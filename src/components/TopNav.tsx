import { NavLink } from "react-router";
import styles from "../css/TopNav.module.css";

const TopNav = () => {
    return (
        <div className={styles.topNav}>
            <h2>Exclusive</h2>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/register">sign Up</NavLink>
            </li>
            <div className={styles.search}>
                <form action="">
                    <input
                        type="text"
                        placeholder="What are you looking for?"
                    />
                </form>
                <img
                    src="./src/assets/icons/magnifying_glass.svg"
                    alt=""
                    width="20"
                />
            </div>
            <div className={styles.icons}>
                <img src="./src/assets/icons/heart.svg" alt="" />
                <img src="./src/assets/icons/shopping_bag.svg" alt="" />
            </div>
        </div>
    );
};
export default TopNav;
