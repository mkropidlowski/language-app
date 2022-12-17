import { signInWithEmailAndPassword } from "firebase/auth";
import { initFirebase } from "config/firebase/firebaseApp";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export interface LoginFormProps {
    email: string;
    password: string;
}

export interface UseLoginResult {
    signIn: (email: string, password: string) => Promise<void>;
    error?: any;
    isPending?: boolean;
}

export const useLogin = (props: LoginFormProps): UseLoginResult => {
    const [isCanceled, setIsCanceled] = useState(false);
    const [error, setError] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    initFirebase();
    const auth = getAuth();

    const signIn = async (email: string, password: string): Promise<void> => {
        setError(null);
        setIsPending(true);

        try {
            const res = await signInWithEmailAndPassword(auth, email, password);

            dispatch({ type: "LOGIN", payload: res.user });
            if (!isCanceled) {
                setIsPending(false);
                setError(null);
            }
        } catch (error) {
            if (!isCanceled) {
                setIsPending(false);
                setError(true);
            }
        }
    };
    return { signIn, error, isPending };
};
