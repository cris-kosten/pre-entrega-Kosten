
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"

// para proteger la informacion importamos el .env
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTH,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAG,
    messagingSenderId: import.meta.env.VITE__MESSAGIND_SENDER,
    appId: import.meta.env.VITE_APP_ID,
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);