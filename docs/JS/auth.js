// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
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
const auth = getAuth(app);

//EMAIL AUTH
// new user
function signUpWithEmail(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Usuario registrado:", user);
        })
        .catch((error) => {
            // Manejo de errores
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error en el registro:", errorCode, errorMessage);
        });
    }
// Sign In
function signInWithEmail(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Usuario autenticado:", user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error en la autenticación:", errorCode, errorMessage);
        });
    }

// BTTNS TIME
// SIGN UP
document.getElementById('email-signup-btn').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signUpWithEmail(email, password);
});
// SIGN IN
document.getElementById('email-signin-btn').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signInWithEmail(email, password);
});  