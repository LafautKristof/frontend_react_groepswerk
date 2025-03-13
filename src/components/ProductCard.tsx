import styles from "../css/ProductCard.module.css";
import {
    IoHeartOutline,
    IoEyeOutline,
    IoStar,
    IoStarHalf,
    IoStarOutline,
} from "react-icons/io5";

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
                            e.preventDefault(); // voorkomt de standaard Link navigatie
                            e.stopPropagation(); // voorkomt dat de klik naar de parent Link bubblet
                            // Voeg hier de logica toe voor de 'heart'-klik, bijvoorbeeld:
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
        </Link>
    );
};

export default ProductCard;
