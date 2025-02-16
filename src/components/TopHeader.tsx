import styles from "../css/TopHeader.module.css";
export const TopHeader = () => {
    return (
        <div className={styles.topHeader}>
            <p>
                Summer Sale for All SwimSuits and free express delivery -OFF 50%
                ShopNow
            </p>
            <select>
                <option>English</option>
                <option>Dutch</option>
                <option>French</option>
            </select>
        </div>
    );
};
export default TopHeader;
