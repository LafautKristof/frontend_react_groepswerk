import styles from "../css/OurProductsBottom.module.css";
import ErrorComponent from "./ErrorComponent";
import ProductCard from "./ProductCard";
import LoadingComponent from "./LoadingComponent";
import { Product } from "../utils/types";
import { useGetProductsRandomQuery } from "./store/productsApi";
const OurProductsBottom = () => {
    const { data, error, isLoading } = useGetProductsRandomQuery("10", {
        skip: false,
    });
    const products: Product[] = Array.isArray(data)
        ? data
        : data && data.data && Array.isArray(data.data)
        ? data.data
        : [];
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
        <>
            <div className={styles.our_products_bottom}>
                {products &&
                    products.map(
                        (product: any) => (
                            console.log(product),
                            (
                                <ProductCard
                                    key={product._id}
                                    product={product}
                                />
                            )
                        )
                    )}
            </div>{" "}
            <button
                onClick={() => (window.location.href = "/allproduct/random/40")}
                className={styles.viewAll}
            >
                View All Products
            </button>
        </>
    );
};
export default OurProductsBottom;
