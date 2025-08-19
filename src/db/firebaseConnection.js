import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuOpCKmTllt_Jn9UcUO7quIIwTpewmb7w",
  authDomain: "ugtaarmy01.firebaseapp.com",
  projectId: "ugtaarmy01",
  storageBucket: "ugtaarmy01.firebasestorage.app",
  messagingSenderId: "927094006083",
  appId: "1:927094006083:web:5c905ef1887b5a4e9acff6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);