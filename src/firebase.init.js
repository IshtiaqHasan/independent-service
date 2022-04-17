// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDvbjF8xtY6qURLruxDz-qCKCB8H9fbak8",
    authDomain: "learn-quran-3f0fa.firebaseapp.com",
    projectId: "learn-quran-3f0fa",
    storageBucket: "learn-quran-3f0fa.appspot.com",
    messagingSenderId: "246559313561",
    appId: "1:246559313561:web:64a4f3bdadead8a4d03208"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;