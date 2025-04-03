// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuxgivHKunh27tFTxKB-2YBemrS1f1QpM",
  authDomain: "proyecto-next-coder.firebaseapp.com",
  projectId: "proyecto-next-coder",
  storageBucket: "proyecto-next-coder.firebasestorage.app",
  messagingSenderId: "587809294088",
  appId: "1:587809294088:web:7ac4535818e64f66884ebd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exporta Firestore
const db = getFirestore(app);
export { db };