import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD6mVt_en5pvBQrmw4K8eJsI_T4afQuD3Q',
  authDomain: 'frist-firebase-23433.firebaseapp.com',
  projectId: 'frist-firebase-23433',
  storageBucket: 'frist-firebase-23433.firebasestorage.app',
  messagingSenderId: '624775329601',
  appId: '1:624775329601:web:60153cc1c3cd7ceb9ad3c0',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
