import { getAuth } from "firebase/auth";
import { createContext, useEffect, useReducer } from "react";
export interface AuthContextProps {
    user: any;
    dispatch: React.Dispatch<any>;
}

export const AuthContext = createContext<AuthContextProps>({
    user: null,
    dispatch: null,
});

export const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload };
        case "LOGOUT":
            return { ...state, user: null };
        case "USER_IS_LOGIN":
            return { ...state, user: action.payload, isUserLogin: true };
        default:
            return state;
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        isUserLogin: false,
    });
    const auth = getAuth();

    useEffect(() => {
        const unsub = auth.onAuthStateChanged((user) => {
            dispatch({ type: "USER_IS_LOGIN", payload: user });
            unsub();
        });
    }, [auth]);

    console.log("AuthContext state:", state);

    return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>;
};
