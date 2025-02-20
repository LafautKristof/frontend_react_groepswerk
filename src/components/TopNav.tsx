import { Link, NavLink } from "react-router";
import styles from "../css/TopNav.module.css";

const TopNav = () => {
    return (
        <>
            <div className={styles.topNav}>
                <h2>Exclusive</h2>
                <div className={styles.links}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/signup">Sign Up</NavLink>
                </div>
                <div className={styles.search_icons}>
                    <div>
                        <form>
                            <input
                                type="text"
                                placeholder="What are you looking for"
                            />
                        </form>

                        <img src="\src\assets\icons\magnifying_glass.svg" />
                    </div>
                    <i className={styles.icons}>
                        <Link to="/favorites">
                            <img src="/src/assets/icons/heart.svg" alt="" />
                        </Link>
                        <Link to="/cart">
                            <img
                                src="/src/assets/icons/shopping_bag.svg"
                                alt=""
                            />
                        </Link>
                        {/* <Link to="/profile">
                        <img src="/src/assets/icons/user.svg" alt="" />
                    </Link> */}
                    </i>
                </div>
            </div>
            <hr />
        </>
    );
};
export default TopNav;
