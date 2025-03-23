import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import styles from "../css/Wishlist.module.css";
import { deleteAll } from "./store/wishlistSlice";
import { RootState } from "./store/store";
const Wishlist = () => {
    const dispatch = useDispatch();
    const wishList = useSelector((state: RootState) => state.wishList);
    const handleDeleteAll = () => {
        console.log("ckicked");
        dispatch(deleteAll());
    };
    return (
        <>
            <div className={styles.container}>
                {wishList.map((product: any) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
            <button onClick={handleDeleteAll} className={styles.removeAll}>
                Remove All
            </button>
        </>
    );
};
export default Wishlist;
