import { publicEnvs } from "config/envs";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: publicEnvs.FIREBASE_API_KEY,
    authDomain: publicEnvs.FIREBASE_AUTH_DOMAIN,
    projectId: publicEnvs.FIREBASE_PROJECT_ID,
    storageBucket: publicEnvs.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: publicEnvs.FIREBASE_MESS_SENDER_ID,
    appId: publicEnvs.FIREBASE_APP_ID,
    measurementId: publicEnvs.FIREBASE_MEASURMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
