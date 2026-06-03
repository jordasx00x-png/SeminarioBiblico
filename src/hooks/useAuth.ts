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
      
      // If popup is blocked or fails, try redirect as fallback (common on mobile)
      if (error.code === 'auth/popup-blocked' || error.code === 'auth/popup-closed-by-user') {
        // We can't easily auto-redirect from inside a click handler without user knowing,
        // but we can try it.
        try {
          const { signInWithRedirect } = await import('firebase/auth');
          await signInWithRedirect(auth, provider);
        } catch (e) {
          console.error('Redirect failed too', e);
        }
      }
    }
  };

  const signOut = () => {
    auth.signOut();
  };

  return { user, isLoading, signInWithGoogle, signOut };
}
