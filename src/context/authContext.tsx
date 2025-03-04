import { createContext, useState, useEffect, ReactNode } from "react";

type AuthContextType = {
    token: string | null;
    setToken: (token: string | null) => void;
};

export const AuthContext = createContext<AuthContextType>({
    token: null,
    setToken: () => {},
});

type AuthProviderProps = {
    children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [token, setToken] = useState<string | null>(() =>
        localStorage.getItem("token")
    );

    useEffect(() => {
        if (token) {
            localStorage.setItem("token", token);
            console.log(token);
        } else {
            localStorage.removeItem("token");
        }
    }, [token]);

    return (
        <AuthContext.Provider value={{ token, setToken }}>
            {children}
        </AuthContext.Provider>
    );
};
