import styles from "../css/ProductCard.module.css";
import {
    IoHeartOutline,
    IoEyeOutline,
    IoStar,
    IoStarHalf,
    IoStarOutline,
} from "react-icons/io5";

type ObjectId = string;
type Product = {
    _id: ObjectId;
    name: string;
    brand: string;
    price: number;
    capacity: string;
    speed: string;
    type: string;
    latency: string;
    rgb: string;
    description: string;
    images: string[];
    raters: string;
    points: number;
};

type ProductCardProps = {
    product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    console.log(product);
    return (
        <div className={styles.grid}>
            <div className={styles.image}>
                <img
                    className={styles.images}
                    src={product?.images[0]}
                    alt="Product afbeelding"
                />

                <p>-40%</p>
                <i className={styles.heart}>
                    <IoHeartOutline />
                </i>
                <i className={styles.watch}>
                    <IoEyeOutline />
                </i>
            </div>
            <div className={styles.info}>
                <h2>{product?.name}</h2>
                <div className={styles.price}>
                    <p className={styles.new_price}>$10.00</p>
                    <p className={styles.old_price}>$7.99</p>
                </div>
                <div className={styles.rating}>
                    <IoStarOutline />
                    <IoStarOutline />
                    <IoStarOutline />
                    <IoStarOutline />
                    <IoStarOutline />
                    <p>(5000)</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
