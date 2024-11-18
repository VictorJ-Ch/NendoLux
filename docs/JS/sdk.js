// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDQoDYCHkzNUx5d1LxlOjBeFqqLt_DKdbc",
    authDomain: "nendolux.firebaseapp.com",
    projectId: "nendolux",
    storageBucket: "nendolux.firebasestorage.app",
    messagingSenderId: "160661286244",
    appId: "1:160661286244:web:13547f70c886b82df9de71",
    measurementId: "G-Y8XZN2TEMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);