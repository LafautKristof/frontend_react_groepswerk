import styles from "../css/CategoriesTop.module.css";
const CategoriesTop = () => {
    return (
        <div className={styles.top_frame_730}>
            <div className={styles.categories}>
                <div className={styles.top_row}>
                    <p className={styles.red}></p>
                    <h3>Categories</h3>
                </div>
                <div className={styles.title}>
                    <h2>Browse By Category</h2>
                </div>
            </div>
        </div>
    );
};
export default CategoriesTop;
