import styles from "../css/ProductCard.module.css";
import { IoHeartOutline, IoCartOutline } from "react-icons/io5";
import StarRating from "./StartRating";
import { Link } from "react-router";
import { slugit } from "../utils/helpers";
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
    const productRating = product.points / Number(product.raters);
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
                            // Voeg hier de logica toe voor de 'watch'-klik, als gewenst
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
