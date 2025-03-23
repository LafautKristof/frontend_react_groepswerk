// context/AuthContext.tsx
import React, { createContext, useState, useEffect } from "react";
import { User } from "../utils/types";
interface AuthContextType {
    user: any; // Pas het type aan, bijvoorbeeld: User | null
    setUser: (user: User | null) => void;
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    setUser: () => {},
});

interface AuthProviderProps {
    children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<any>(null);

    // Optioneel: bij het laden van de app, probeer de gebruiker te herstellen vanuit localStorage
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
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;
