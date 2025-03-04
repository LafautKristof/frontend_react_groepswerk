import styles from "../css/TopNav.module.css";
import { Link, NavLink } from "react-router";
import {
    IoCartOutline,
    IoHeartOutline,
    IoPersonOutline,
} from "react-icons/io5";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
const TopNav = () => {
    const { token } = useContext(AuthContext);
    return (
        <>
            <div className={styles.topNav}>
                <h2>Exclusive</h2>
                <div className={styles.links}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/register">Sign Up</NavLink>
                </div>
                <div className={styles.search_icons}>
                    <div>
                        <form>
                            <input
                                type="text"
                                placeholder="What are you looking for"
                            />
                        </form>

                        <p>
                            <HiOutlineMagnifyingGlass size={24} />
                        </p>
                    </div>
                    <i className={styles.icons}>
                        <Link to="/favorites">
                            <IoHeartOutline size={30} />
                        </Link>
                        <Link to="/cart">
                            <IoCartOutline size={30} />
                        </Link>
                        {token && <IoPersonOutline size={30} />}
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
