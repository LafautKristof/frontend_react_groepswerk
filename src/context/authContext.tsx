import React, { createContext, useState, useEffect } from "react";
import { User } from "../utils/types";
interface AuthContextType {
    user: any;
    token: string;
    setUser: (user: User | null) => void;
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    token: "",
    setUser: () => {},
});

interface AuthProviderProps {
    children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");

        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (error) {
                console.error("Error parsing stored user:", error);
                setUser(null);
            }
        }
    }, []);
    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                token: localStorage.getItem("token") || "",
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;
