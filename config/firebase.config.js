// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.FIREBASE_API_KEY,
  authDomain: "homehive-6576e.firebaseapp.com",
  projectId: "homehive-6576e",
  storageBucket: "homehive-6576e.firebasestorage.app",
  messagingSenderId: "529525324786",
  appId: "1:529525324786:web:28d8a2527ffef44e45896b"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage};
