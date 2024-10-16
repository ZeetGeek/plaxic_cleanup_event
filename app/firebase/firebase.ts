// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase Error Codes
const firebaseErrorCodes: { [key: string]: string } = {
    "auth/user-not-found": "User not found",
    "auth/wrong-password": "Wrong password",
    "auth/invalid-email": "Invalid email",
};

// Firebase Configuration
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth: any = getAuth(app);
const db = getFirestore(app);
export { auth, db, firebaseErrorCodes };
