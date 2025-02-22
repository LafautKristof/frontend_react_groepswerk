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
                    <img
                        src="../src/assets/icons/FillWithLeftArrow.svg"
                        alt=""
                    />
                </button>
                <button className={styles.viewAll}>View All Products</button>
                <button className={styles.arrowRight} onClick={scrollRight}>
                    <img
                        src="../src/assets/icons/FillWithRightArrow.svg"
                        alt=""
                    />
                </button>
            </div>
        </>
    );
};
export default Grid1Row;
