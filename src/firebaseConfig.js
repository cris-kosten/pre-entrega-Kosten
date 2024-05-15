
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyCOtqCae79R9yf4Ivykxx4btOteYLqbAqQ",
    authDomain: "proyecto-react-relojes.firebaseapp.com",
    projectId: "proyecto-react-relojes",
    storageBucket: "proyecto-react-relojes.appspot.com",
    messagingSenderId: "939094573933",
    appId: "1:939094573933:web:8a37e21d93ece6e7cdd064"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);