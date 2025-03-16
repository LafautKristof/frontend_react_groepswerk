import styles from "../css/ProductCard.module.css";
import { IoHeartOutline, IoCartOutline } from "react-icons/io5";
import StarRating from "./StarRating";
import { Link } from "react-router";
import { slugit } from "../utils/helpers";
import { useDispatch } from "react-redux";
import { addToWishList } from "./store/wishlistSlice";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import { useAddToCartMutation } from "./store/cartApi";
import { addToCart } from "./store/cartSlice";
import { ProductCardProps, Product } from "../utils/types";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const productRating = product.points / Number(product.raters);
    const [addToCartMutation] = useAddToCartMutation();

    const dispatch = useDispatch();
    const { user } = useContext(AuthContext);

    const handleAddToWishlist = (product: Product) => {
        dispatch(addToWishList(product));
    };
    const handleAddToCart = async (product: Product) => {
        if (!user) {
            alert("You need to be logged in to add products to your cart.");
        } else {
            console.log(user);
            try {
                await addToCartMutation({ product, user }).unwrap();
                dispatch(addToCart(product));
            } catch (error) {
                console.log(error);
            }
        }
    };
    return (
        <Link
            to={`/detailpage/${product._id}/${slugit(product.name)})`}
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

                            console.log("Heart clicked!");
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
                            console.log("Watch clicked!");
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
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
