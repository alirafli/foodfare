import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { firebaseConfig } from './env';

export const firebaseApp = initializeApp(firebaseConfig);

export const analytics = getAnalytics(firebaseApp());
export const auth = getAuth(firebaseApp());
