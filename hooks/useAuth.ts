import { onAuthStateChanged } from "firebase/auth";
import { auth } from "config/firebase/firebaseApp";

export const useAuth = () => {
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
