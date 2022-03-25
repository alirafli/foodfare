import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { firebaseConfig } from './env';
import { getFirestore } from 'firebase/firestore';

export const firebaseApp = initializeApp(firebaseConfig);

export const analytics = getAnalytics(firebaseApp);
export const auth = getAuth(firebaseApp);
export const database = getFirestore(firebaseApp);
