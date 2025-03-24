import styles from "../css/Overview.module.css";
import ProductCard from "./ProductCard";

const Overview = ({ product }: any) => {
    console.log(product);
    return (
        <div className={styles.overview}>
            <h1>Overview</h1>
            <div className={styles.grid}>
                {product?.map((product: any) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};
export default Overview;
