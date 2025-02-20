import styles from "../css/TopHeader.module.css";
export const TopHeader = () => {
    return (
        <div className={styles.topHeader}>
            <p>
                Summer Sale for All SwimSuits and free express delivery -OFF
                50%!<span> ShopNow</span>
            </p>
            <div>
                <select>
                    <option>English</option>
                    <option>Dutch</option>
                    <option>French</option>
                </select>
            </div>
        </div>
    );
};
export default TopHeader;
