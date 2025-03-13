import styles from "../css/Grid1Row.module.css";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import { useRef } from "react";
import ProductCard from "./ProductCard";
import useSWR from "swr";
const fetcher = (url: string) => fetch(url).then((res) => res.json());
const Grid1Row = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const {
        data: products,
        error,
        isLoading,
    } = useSWR(
        "https://backend-node-groepswerk.onrender.com/api/products/computerscreen",
        fetcher
    );

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

    return (
        <>
            <div className={styles.slider_container}>
                <div className={styles.slider} ref={sliderRef}>
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
                </div>
            </div>{" "}
            <div className={styles.arrows}>
                <button className={styles.arrowLeft} onClick={scrollLeft}>
                    <IoArrowBackOutline />
                </button>
                <button className={styles.viewAll}>View All Products</button>
                <button className={styles.arrowRight} onClick={scrollRight}>
                    <IoArrowForwardOutline />
                </button>
            </div>
        </>
    );
};
export default Grid1Row;
