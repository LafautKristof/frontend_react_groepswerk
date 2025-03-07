import { createContext, useState, useEffect, ReactNode } from "react";

type User = {
    id: string;
    name: string;
    role: string;
};
type AuthContextType = {
    token: string | null;
    setToken: (token: string | null) => void;
    user: User | null;
    setUser: (user: User | null) => void;
};

export const AuthContext = createContext<AuthContextType>({
    token: null,
    setToken: () => {},
    user: null,
    setUser: () => {},
});

type AuthProviderProps = {
    children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [token, setToken] = useState<string | null>(() =>
        localStorage.getItem("token")
    );
    const [user, setUser] = useState<User | null>(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    useEffect(() => {
        if (token) {
            localStorage.setItem("token", token);
            console.log(token);
        } else {
            localStorage.removeItem("token");
        }
    }, [token]);

    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
    });

    return (
        <AuthContext.Provider value={{ token, setToken, user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};
