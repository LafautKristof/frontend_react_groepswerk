import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import { useRef } from "react";
import styles from "../css/Grid1Row.module.css";
import ProductCard from "./ProductCard";
const Grid1Row = () => {
    const sliderRef = useRef<HTMLDivElement>(null);

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
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
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
