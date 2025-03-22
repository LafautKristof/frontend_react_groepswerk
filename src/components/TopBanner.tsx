import styles from "../css/TopBanner.module.css";
import { useState, useEffect, SetStateAction } from "react";

const slidesData = [
    {
        image: "../src/assets/images/hero_endframe__cvklg0xk3w6e_large 2.svg",
        text: "Up to 10% off Voucher",
    },
    {
        image: "../src/assets/images/banner2.jpg",
        text: "Limited Time Offer!",
    },
    {
        image: "../src/assets/images/banner3.jpg",
        text: "Shop Now & Save Big!",
    },
];
const TopBanner = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
        }, 3000); // Verandert elke 3 seconden

        return () => clearInterval(interval);
    }, []);

    // Functie om op bolletjes te klikken
    const goToSlide = (slideIndex: SetStateAction<number>) => {
        setIndex(slideIndex);
    };

    return (
        <div className={styles.topBanner}>
            <div className={styles.tekst}>
                <h1>{slidesData[index].text}</h1>
            </div>

            <div className={styles.fotoslider}>
                <div
                    className={styles.slides}
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {slidesData.map((slide, i) => (
                        <div className={styles.slide} key={i}>
                            <img src={slide.image} alt={`Slide ${i + 1}`} />
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.dots}>
                {slidesData.map((_, i) => (
                    <span
                        key={i}
                        className={`${styles.dot} ${
                            i === index ? styles.active : ""
                        }`}
                        onClick={() => goToSlide(i)}
                    ></span>
                ))}
            </div>
        </div>
    );
};
export default TopBanner;
