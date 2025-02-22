import styles from "../css/OurProductsBottom.module.css";
import ProductCard from "./ProductCard";
const OurProductsBottom = () => {
    return (
        <div className={styles.our_products_bottom}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    );
};
export default OurProductsBottom;
