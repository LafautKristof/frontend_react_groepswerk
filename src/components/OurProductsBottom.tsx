import styles from "../css/OurProductsBottom.module.css";
import ErrorComponent from "./ErrorComponent";
import ProductCard from "./ProductCard";
import LoadingComponent from "./LoadingComponent";

import { useGetProductsRandomQuery } from "./store/productsApi";
const OurProductsBottom = () => {
    const { data, error, isLoading } = useGetProductsRandomQuery(10);
    const products = data && data.data ? data.data.flat() : [];
    if (error)
        return (
            <div>
                <ErrorComponent />
            </div>
        );
    if (isLoading)
        return (
            <div>
                <LoadingComponent />
            </div>
        );
    return (
        <div className={styles.our_products_bottom}>
            {products &&
                products.map(
                    (product: any) => (
                        console.log(product),
                        (<ProductCard key={product._id} product={product} />)
                    )
                )}
        </div>
    );
};
export default OurProductsBottom;
