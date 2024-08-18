// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "project-788df.firebaseapp.com",
  projectId: "project-788df",
  storageBucket: "project-788df.appspot.com",
  messagingSenderId: "399802403753",
  appId: "1:399802403753:web:5fd8a8b640b559aba552b8",
  measurementId: "G-71JP1EXKBJ"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db=getFirestore(app)
const analytics = getAnalytics(app);