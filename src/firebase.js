import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: "psychologists-07",
    storageBucket: "psychologists-07.firebasestorage.app",
    messagingSenderId: "352985056369",
    appId: "1:352985056369:web:8b444b25c9a3e2eef707d0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
