import { createContext, useReducer } from "react";
export interface AuthContextProps {
    user: any;
    dispatch: React.Dispatch<any>;
}

export const AuthContext = createContext<AuthContextProps>({
    user: null,
    dispatch: null,
});

// export const useAuthContext = (): AuthContextProps => useContext(AuthContext);

// export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload };
        case "LOGOUT":
            return { ...state, user: null };
        default:
            return state;
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
    });
    console.log("AuthContext state:", state);

    return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>;
};
