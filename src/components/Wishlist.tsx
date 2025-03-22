import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import styles from "../css/Wishlist.module.css";
const Wishlist = () => {
    const wishList = useSelector((state: any) => state.wishList);
    console.log(wishList);
    return (
        <div className={styles.container}>
            {wishList.map((product: any) => (
                <ProductCard key={product._id} product={product} />
            ))}
        </div>
    );
};
export default Wishlist;
