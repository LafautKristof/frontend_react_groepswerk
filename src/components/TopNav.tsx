import styles from "../css/TopNav.module.css";
import { Link, NavLink, useNavigate } from "react-router";
import {
    IoCartOutline,
    IoHeartOutline,
    IoPersonOutline,
    IoFileTrayFullOutline,
    IoCloseCircleOutline,
    IoStarOutline,
    IoLogOutOutline,
} from "react-icons/io5";
import { GrUserAdmin } from "react-icons/gr";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useContext, useRef } from "react";
import { AuthContext } from "../context/authContext";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
const TopNav = () => {
    const { token, setToken } = useContext(AuthContext);
    const { user, setUser } = useContext(AuthContext);
    const [isDropDown, setIsDropDown] = useState(false);
    const dropDownRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const wishList = useSelector((state: any) => state.wishList);
    const cart = useSelector((state: any) => state.cart);
    const handleLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setUser(null);
        setToken(null);

        navigate("/login");
    };
    const handleClick = () => {
        setIsDropDown((prev) => !prev);
    };
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropDownRef.current &&
                !dropDownRef.current.contains(event.target as Node)
            ) {
                setIsDropDown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <>
            <div className={styles.topNav}>
                <h2>Exclusive</h2>
                <div className={styles.links}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/login">Sign Up</NavLink>
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
                        <div className={styles.divHeart}>
                            <Link to="/wishlist">
                                <IoHeartOutline className={styles.heart} />
                            </Link>
                            {wishList.length > 0 && (
                                <span>{wishList.length}</span>
                            )}
                        </div>
                        <div className={styles.divCart}>
                            <Link to="/cart">
                                <IoCartOutline
                                    className={styles.cart}
                                    onClick={handleClick}
                                />{" "}
                            </Link>{" "}
                            {cart.length > 0 && <span>{cart.length}</span>}
                        </div>
                        {token && (
                            <>
                                <div className={styles.divUser}>
                                    <div className={styles.dropdownContainer}>
                                        <IoPersonOutline
                                            className={styles.user}
                                        />
                                        <div className={styles.dropdown}>
                                            <div>
                                                <Link to="/profile">
                                                    <IoPersonOutline
                                                        size={24}
                                                    />
                                                    Manage Account
                                                </Link>
                                            </div>
                                            <div>
                                                <Link to="/myorder">
                                                    <IoFileTrayFullOutline
                                                        size={24}
                                                    />
                                                    My Order
                                                </Link>
                                            </div>
                                            <div>
                                                <Link to="/mycancelations">
                                                    <IoCloseCircleOutline
                                                        size={24}
                                                    />
                                                    My Cancelations
                                                </Link>
                                            </div>
                                            <div>
                                                <Link to="/myreview">
                                                    <IoStarOutline size={24} />
                                                    My Reviews
                                                </Link>
                                            </div>
                                            {user?.role === "admin" && (
                                                <div>
                                                    <Link
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        to="https://backend-node-groepswerk.onrender.com/login"
                                                    >
                                                        <GrUserAdmin
                                                            size={24}
                                                        />
                                                        Admin
                                                    </Link>
                                                </div>
                                            )}

                                            <div>
                                                <Link
                                                    to="#"
                                                    onClick={handleLogout}
                                                >
                                                    <IoLogOutOutline
                                                        size={24}
                                                    />
                                                    Logout
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </i>
                </div>
            </div>
            <hr />
        </>
    );
};
export default TopNav;
