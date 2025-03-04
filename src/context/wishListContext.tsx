import { createContext, useState, useEffect, ReactNode } from "react";
export const WishlistContext = createContext([] as any);
export const WishListProvider = ({ children }: { children: ReactNode }) => {
    const [wishlist, setWishlist] = useState(() => {
        const storedWishlist = localStorage.getItem("wishlist");
        return storedWishlist ? JSON.parse(storedWishlist) : [];
    });
    const addDataToWishlist = () => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    };

    useEffect(() => {
        addDataToWishlist();
    }, [wishlist]);
    return (
        <WishlistContext.Provider value={[wishlist, setWishlist]}>
            {children}
        </WishlistContext.Provider>
    );
};
