import { onAuthStateChanged } from "firebase/auth";
import { auth } from "config/firebase/firebaseApp";

export const useAuth = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
        } else {
            console.log("Błedny login i hasło");
        }
    });
};
