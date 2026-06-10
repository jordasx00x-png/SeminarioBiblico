import { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, User } from 'firebase/auth';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    setAuthError(null);
    try {
      // Try popup first
      await signInWithPopup(auth, provider);
    } catch (error: any) {
      console.error('Error signing in with Google', error);
      
      // If unauthorized domain, alert the user (common issue with custom deployments like Netlify)
      if (error.code === 'auth/unauthorized-domain' || (error.message && error.message.includes('auth/unauthorized-domain'))) {
        const errorMsg = `El dominio actual (${window.location.hostname}) no está autorizado en la consola de Firebase.`;
        setAuthError(errorMsg);
        alert('Este dominio (' + window.location.hostname + ') no ha sido autorizado en la consola de Firebase. Por favor, añádalo a la lista de dominios permitidos.');
        return;
      }

      // If popup is blocked or fails, try redirect as fallback (common on mobile)
      if (error.code === 'auth/popup-blocked' || error.code === 'auth/popup-closed-by-user' || /Mobi|Android/i.test(navigator.userAgent)) {
        try {
          const { signInWithRedirect } = await import('firebase/auth');
          await signInWithRedirect(auth, provider);
        } catch (e: any) {
          console.error('Redirect failed too', e);
          if (e.code === 'auth/unauthorized-domain' || (e.message && e.message.includes('auth/unauthorized-domain'))) {
            setAuthError(`El dominio actual (${window.location.hostname}) no está autorizado en la consola de Firebase.`);
          } else {
            setAuthError('Error al iniciar sesión por redirección: ' + e.message);
          }
        }
      } else {
        setAuthError('Error al iniciar sesión: ' + error.message);
      }
    }
  };

  const signOut = () => {
    auth.signOut();
  };

  return { user, isLoading, authError, signInWithGoogle, signOut, setAuthError };
}
