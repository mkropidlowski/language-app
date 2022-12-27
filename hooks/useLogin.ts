import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "config/firebase/firebaseApp";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useRouter } from "next/router";

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
    const router = useRouter();

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
                router.push("/logowanie");
            }
        }
    };
    return { signIn, error, isPending };
};
