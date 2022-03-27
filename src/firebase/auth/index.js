import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../init';

export const register = async (name,email, password) => {
  
  const auth = getAuth();
  updateProfile(auth.currentUser, {
    displayName: name
  });
  return createUserWithEmailAndPassword(auth, email, password);
};

export const login = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

export const logout = () => signOut(auth);
