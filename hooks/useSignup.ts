import { useRouter } from "next/router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "config/firebase/firebaseApp";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export interface SignUpFormProps {
    email: string;
    password: string;
}

export interface UseLoginResult {
    signUp: (email: string, password: string) => Promise<void>;
    error?: any;
    isPending?: boolean;
}

export const useSignUp = (props: SignUpFormProps): UseLoginResult => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();
    const router = useRouter();

    const signUp = async (email: string, password: string): Promise<void> => {
        setError(null);
        setIsPending(true);

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            if (!res) {
                throw new Error("Could not complete signup");
            }
            dispatch({ type: "LOGIN", payload: res.user });
            router.push("/panel_uzytkownika");
            if (!isCancelled) {
                setIsPending(false);
                setError(null);
            }
        } catch (error) {
            if (!isCancelled) {
                setIsPending(false);
                setError(true);
            }
        }
    };
    return { signUp, error, isPending };
};
