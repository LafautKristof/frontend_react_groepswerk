import styles from "../css/ProductCard.module.css";
const ProductCard = () => {
    return (
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
                    <img src="\src\assets\images\Fill_Heart.svg" alt="" />
                </i>
                <i className={styles.watch}>
                    <img src="\src\assets\images\Fill_Eye.svg" alt="" />
                </i>
            </div>
            <div className={styles.info}>
                <h2>Havit HV-G92 Gamepad</h2>
                <div className={styles.price}>
                    <p className={styles.new_price}>$ 3.99</p>
                    <p className={styles.old_price}>$ 7.99</p>
                </div>
                <div className={styles.rating}>
                    <img src="/src\assets\images\Five_star.png" alt="" />
                    <p>(88)</p>
                </div>
            </div>
        </div>
    );
};
export default ProductCard;
