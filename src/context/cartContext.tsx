import {
    createContext,
    useState,
    useEffect,
    ReactNode,
    useContext,
} from "react";
import { AuthContext } from "./authContext";

type CartItem = {
    _id: string;
};
type CartContextType = {
    cart: CartItem[] | null;
    setCart: (cart: any | null) => void;
};
export const CartContext = createContext<CartContextType>({
    cart: null,
    setCart: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const { user, token } = useContext(AuthContext);
    const [cart, setCart] = useState<CartItem[] | null>(null);

    useEffect(() => {
        if (user && token) {
            const userWithCart = user as any;
            if (userWithCart.cart && userWithCart.cart.length > 0) {
                setCart(userWithCart.cart);
            } else {
                setCart([]);
            }
        } else {
            setCart(null);
        }
    }, [user, token]);
    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
};
