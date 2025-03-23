import styles from "../css/Grid1Row.module.css";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import { useRef } from "react";
import ProductCard from "./ProductCard";
import ErrorComponent from "./ErrorComponent";
import LoadingComponent from "./LoadingComponent";
import { useGetProductsRandomQuery } from "./store/productsApi";
import { Product } from "../utils/types";
const Grid1Row = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const { data, error, isLoading } = useGetProductsRandomQuery(10);
    console.log("data", data);
    const products: Product[] = data ? data.data : [];

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -250, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 250, behavior: "smooth" });
        }
    };
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
            <div className={styles.slider_container}>
                <div className={styles.slider} ref={sliderRef}>
                    {products &&
                        products.map((product: Product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                </div>
            </div>{" "}
            <div className={styles.arrows}>
                <button className={styles.arrowLeft} onClick={scrollLeft}>
                    <IoArrowBackOutline />
                </button>
                <button
                    onClick={() => (window.location.href = "/allproduct")}
                    className={styles.viewAll}
                >
                    View All Products
                </button>
                <button className={styles.arrowRight} onClick={scrollRight}>
                    <IoArrowForwardOutline />
                </button>
            </div>
        </>
    );
};
export default Grid1Row;
