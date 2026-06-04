import { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, User } from 'firebase/auth';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      // Try popup first
      await signInWithPopup(auth, provider);
    } catch (error: any) {
      console.error('Error signing in with Google', error);
      
      // If unauthorized domain, alert the user (common issue with custom deployments like Netlify)
      if (error.code === 'auth/unauthorized-domain') {
        alert('Este dominio (' + window.location.hostname + ') no ha sido autorizado en la consola de Firebase. Por favor, añádalo a la lista de dominios permitidos.');
        return;
      }

      // If popup is blocked or fails, try redirect as fallback (common on mobile)
      if (error.code === 'auth/popup-blocked' || error.code === 'auth/popup-closed-by-user' || /Mobi|Android/i.test(navigator.userAgent)) {
        try {
          const { signInWithRedirect } = await import('firebase/auth');
          await signInWithRedirect(auth, provider);
        } catch (e) {
          console.error('Redirect failed too', e);
          alert('Error al iniciar sesión. Por favor, intente nuevamente o use otro navegador.');
        }
      } else {
        alert('Error al iniciar sesión: ' + error.message);
      }
    }
  };

  const signOut = () => {
    auth.signOut();
  };

  return { user, isLoading, signInWithGoogle, signOut };
}
