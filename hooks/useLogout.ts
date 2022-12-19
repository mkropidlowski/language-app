import { useRouter } from "next/router";
import { initFirebase } from "config/firebase/firebaseApp";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";

export interface UseLoginResult {
    error?: any;
    isPending?: boolean;
}

export const useLogout = (props: UseLoginResult) => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();
    const router = useRouter();

    initFirebase();
    const auth = getAuth();

    const logout = async () => {
        setError(null);
        setIsPending(true);

        try {
            await auth.signOut();

            dispatch({ type: "LOGOUT" });

            if (!isCancelled) {
                setIsPending(false);
                setError(null);
                router.push("/");
            }
        } catch (error) {
            if (!isCancelled) {
                setIsPending(false);
                setError(error);
            }
        }
    };
    useEffect(() => {
        return () => setIsCancelled(true);
    }, []);

    return { logout, error, isPending };
};
