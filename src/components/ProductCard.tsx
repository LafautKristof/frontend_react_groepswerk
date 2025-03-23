import styles from "../css/ProductCard.module.css";
import { IoHeartOutline, IoCartOutline } from "react-icons/io5";
import StarRating from "./StarRating";
import { Link } from "react-router";
import { slugit } from "../utils/helpers";
import { useDispatch } from "react-redux";
import { addToWishList, deleteProduct } from "./store/wishlistSlice";
import { useAddToCartMutation } from "./store/cartApi";
import { useSelector } from "react-redux";
import { ProductCardProps, Product, CartItem } from "../utils/types";
import { setCart } from "./store/cartSlice";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { RiDeleteBin7Line } from "react-icons/ri";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const productRating = product.points / Number(product.raters);
    const [addToCart] = useAddToCartMutation();

    const dispatch = useDispatch();
    const { user } = useContext(AuthContext);
    const handleDeleteProduct = (product: Product) => {
        dispatch(deleteProduct(product._id));
    };
    const handleAddToWishlist = (product: Product) => {
        dispatch(addToWishList(product));
    };
    const handleAddToCart = async (product: Product) => {
        if (!user) {
            console.log("user", user);
            return;
        }
        try {
            console.log("product", product);
            console.log("user", user);
            const response = await addToCart({ product, user }).unwrap();
            console.log("responsepdcard", response);
            const cartItems = response.cart;
            dispatch(setCart(cartItems));
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Link
            to={`/detailpage/${product._id}/${slugit(product.name)}`}
            state={{ product }}
        >
            <div className={styles.grid}>
                <div className={styles.image}>
                    <img
                        className={styles.picture}
                        src={product?.images[0]}
                        alt="Product afbeelding"
                    />

                    <p>-40%</p>
                    <i
                        className={styles.heart}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();

                            handleAddToWishlist(product);
                        }}
                    >
                        <IoHeartOutline />
                    </i>
                    <i
                        className={styles.watch}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleAddToCart(product);
                        }}
                    >
                        <IoCartOutline />
                    </i>
                </div>
                <div className={styles.info}>
                    <h2>{product?.name}</h2>
                    <div className={styles.price}>
                        <p className={styles.new_price}>{product?.price}</p>
                        <p className={styles.old_price}>$7.99</p>
                    </div>
                    <div className={styles.rating}>
                        <StarRating rating={productRating} />
                        <p>{product?.raters}</p>
                    </div>
                    {window.location.pathname === "/wishlist" && (
                        <RiDeleteBin7Line
                            className={styles.delete}
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleDeleteProduct(product);
                            }}
                        />
                    )}

                    <div></div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
