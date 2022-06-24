import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyA7t49Kv8XyUXO3OVTNNNJJw0LeJnDux9Q",
    authDomain: "fir-learn-48869.firebaseapp.com",
    projectId: "fir-learn-48869",
    storageBucket: "fir-learn-48869.appspot.com",
    messagingSenderId: "830502492982",
    appId: "1:830502492982:web:83823ffffcdd3249cf3197",
    measurementId: "G-WC0MXKJN8B"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const auth = getAuth(app)