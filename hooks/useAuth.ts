import { initFirebase } from "config/firebase/firebaseApp";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const useAuth = () => {
    initFirebase();
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            // console.log(uid);

            // ...
        } else {
            console.log("User not sign");
        }
    });
};
