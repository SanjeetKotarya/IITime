import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAZ-Vpc084g0JSqoGyZg3guRH16sQknuL8",
  authDomain: "iitime-a6f63.firebaseapp.com",
  projectId: "iitime-a6f63",
  storageBucket: "iitime-a6f63.firebasestorage.app",
  messagingSenderId: "487164501543",
  appId: "1:487164501543:web:1c538cf2866d28e948b802"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
