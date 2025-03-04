import { createContext, useState, useEffect, ReactNode } from "react";

export const CartContext = createContext([] as any);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });
    const addDataToCart = () => {
        localStorage.setItem("cart", JSON.stringify(cart));
    };

    useEffect(() => {
        addDataToCart();
    }, [cart]);
    return (
        <CartContext.Provider value={[cart, setCart]}>
            {children}
        </CartContext.Provider>
    );
};
