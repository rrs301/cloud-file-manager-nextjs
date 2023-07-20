// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "apps-e02e4.firebaseapp.com",
  projectId: "apps-e02e4",
  storageBucket: "apps-e02e4.appspot.com",
  messagingSenderId: "931728242416",
  appId: "1:931728242416:web:21e8a10f1285009a293435",
  measurementId: "G-66XFBWBSKG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


