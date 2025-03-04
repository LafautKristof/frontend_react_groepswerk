import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";

import { createContext, useState, useEffect } from "react";
export const Wishlist = createContext([] as any);
export const Cart = createContext([] as any);

function App() {
    const [wishlist, setWishlist] = useState(() => {
        const storedWishlist = localStorage.getItem("wishlist");
        return storedWishlist ? JSON.parse(storedWishlist) : [];
    });
    const addDataToWishlist = () => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    };

    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });
    const addDataToCart = () => {
        localStorage.setItem("cart", JSON.stringify(cart));
    };
    useEffect(() => {
        addDataToCart();
        addDataToWishlist();
    }, [wishlist, cart]);

    return (
        <Cart.Provider value={{ cart, setCart }}>
            <Wishlist.Provider value={{ wishlist, setWishlist }}>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </Layout>
            </Wishlist.Provider>
        </Cart.Provider>
    );
}

export default App;
