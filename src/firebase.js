import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCmA_VL8xJ0-kZY5q8-E0mV0o-8F5h7JqI",
  authDomain: "iitme-8c6a4.firebaseapp.com",
  projectId: "iitme-8c6a4",
  storageBucket: "iitme-8c6a4.appspot.com",
  messagingSenderId: "505305631559",
  appId: "1:505305631559:web:6f2e5b1c8f5d6e7f8a9b0c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
