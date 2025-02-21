import { useRef } from "react";
import styles from "../css/Grid1Row.module.css";
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
                    <div className={styles.grid}>
                        <div className={styles.image}>
                            <img
                                className={styles.picture}
                                src="\src\assets\images\foto_grid.svg"
                                alt=""
                            />
                            <div className={styles.cart}></div>
                            <p>-40%</p>
                            <i className={styles.heart}>
                                <img
                                    src="\src\assets\images\Fill_Heart.svg"
                                    alt=""
                                />
                            </i>
                            <i className={styles.watch}>
                                <img
                                    src="\src\assets\images\Fill_Eye.svg"
                                    alt=""
                                />
                            </i>
                        </div>
                        <div className={styles.info}>
                            <h2>Havit HV-G92 Gamepad</h2>
                            <div className={styles.price}>
                                <p className={styles.new_price}>$ 3.99</p>
                                <p className={styles.old_price}>$ 7.99</p>
                            </div>
                            <div className={styles.rating}>
                                <img
                                    src="/src\assets\images\Five_star.png"
                                    alt=""
                                />
                                <p>(88)</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.grid}>
                        <div className={styles.image}>
                            <img
                                className={styles.picture}
                                src="\src\assets\images\foto_grid.svg"
                                alt=""
                            />
                            <div className={styles.cart}></div>
                            <p>-40%</p>
                            <i className={styles.heart}>
                                <img
                                    src="\src\assets\images\Fill_Heart.svg"
                                    alt=""
                                />
                            </i>
                            <i className={styles.watch}>
                                <img
                                    src="\src\assets\images\Fill_Eye.svg"
                                    alt=""
                                />
                            </i>
                        </div>
                        <div className={styles.info}>
                            <h2>Havit HV-G92 Gamepad</h2>
                            <div className={styles.price}>
                                <p className={styles.new_price}>$ 3.99</p>
                                <p className={styles.old_price}>$ 7.99</p>
                            </div>
                            <div className={styles.rating}>
                                <img
                                    src="/src\assets\images\Five_star.png"
                                    alt=""
                                />
                                <p>(88)</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.grid}>
                        <div className={styles.image}>
                            <img
                                className={styles.picture}
                                src="\src\assets\images\foto_grid.svg"
                                alt=""
                            />
                            <div className={styles.cart}></div>
                            <p>-40%</p>
                            <i className={styles.heart}>
                                <img
                                    src="\src\assets\images\Fill_Heart.svg"
                                    alt=""
                                />
                            </i>
                            <i className={styles.watch}>
                                <img
                                    src="\src\assets\images\Fill_Eye.svg"
                                    alt=""
                                />
                            </i>
                        </div>
                        <div className={styles.info}>
                            <h2>Havit HV-G92 Gamepad</h2>
                            <div className={styles.price}>
                                <p className={styles.new_price}>$ 3.99</p>
                                <p className={styles.old_price}>$ 7.99</p>
                            </div>
                            <div className={styles.rating}>
                                <img
                                    src="/src\assets\images\Five_star.png"
                                    alt=""
                                />
                                <p>(88)</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.grid}>
                        <div className={styles.image}>
                            <img
                                className={styles.picture}
                                src="\src\assets\images\foto_grid.svg"
                                alt=""
                            />
                            <div className={styles.cart}></div>
                            <p>-40%</p>
                            <i className={styles.heart}>
                                <img
                                    src="\src\assets\images\Fill_Heart.svg"
                                    alt=""
                                />
                            </i>
                            <i className={styles.watch}>
                                <img
                                    src="\src\assets\images\Fill_Eye.svg"
                                    alt=""
                                />
                            </i>
                        </div>
                        <div className={styles.info}>
                            <h2>Havit HV-G92 Gamepad</h2>
                            <div className={styles.price}>
                                <p className={styles.new_price}>$ 3.99</p>
                                <p className={styles.old_price}>$ 7.99</p>
                            </div>
                            <div className={styles.rating}>
                                <img
                                    src="/src\assets\images\Five_star.png"
                                    alt=""
                                />
                                <p>(88)</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.grid}>
                        <div className={styles.image}>
                            <img
                                className={styles.picture}
                                src="\src\assets\images\foto_grid.svg"
                                alt=""
                            />
                            <div className={styles.cart}></div>
                            <p>-40%</p>
                            <i className={styles.heart}>
                                <img
                                    src="\src\assets\images\Fill_Heart.svg"
                                    alt=""
                                />
                            </i>
                            <i className={styles.watch}>
                                <img
                                    src="\src\assets\images\Fill_Eye.svg"
                                    alt=""
                                />
                            </i>
                        </div>
                        <div className={styles.info}>
                            <h2>Havit HV-G92 Gamepad</h2>
                            <div className={styles.price}>
                                <p className={styles.new_price}>$ 3.99</p>
                                <p className={styles.old_price}>$ 7.99</p>
                            </div>
                            <div className={styles.rating}>
                                <img
                                    src="/src\assets\images\Five_star.png"
                                    alt=""
                                />
                                <p>(88)</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.grid}>
                        <div className={styles.image}>
                            <img
                                className={styles.picture}
                                src="\src\assets\images\foto_grid.svg"
                                alt=""
                            />
                            <div className={styles.cart}></div>
                            <p>-40%</p>
                            <i className={styles.heart}>
                                <img
                                    src="\src\assets\images\Fill_Heart.svg"
                                    alt=""
                                />
                            </i>
                            <i className={styles.watch}>
                                <img
                                    src="\src\assets\images\Fill_Eye.svg"
                                    alt=""
                                />
                            </i>
                        </div>
                        <div className={styles.info}>
                            <h2>Havit HV-G92 Gamepad</h2>
                            <div className={styles.price}>
                                <p className={styles.new_price}>$ 3.99</p>
                                <p className={styles.old_price}>$ 7.99</p>
                            </div>
                            <div className={styles.rating}>
                                <img
                                    src="/src\assets\images\Five_star.png"
                                    alt=""
                                />
                                <p>(88)</p>
                            </div>
                        </div>
                    </div>
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
