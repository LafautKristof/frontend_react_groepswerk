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
import { useRef } from "react";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../components/store/authSlice";
import { clearCart } from "../components/store/cartSlice";
import { deleteAll } from "../components/store/wishlistSlice";
import { RootState } from "./store/store";
const TopNav = () => {
    const token = localStorage.getItem("token");
    const user = useSelector((state: RootState) => state.auth.user);
    const [isDropDown, setIsDropDown] = useState(false);
    console.log(isDropDown);
    const dropDownRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const wishList = useSelector((state: RootState) => state.wishList);
    const cart = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
    console.log(user?.role);
    const handleLogout = () => {
        localStorage.removeItem("token");
        dispatch(clearUser());
        dispatch(clearCart());
        dispatch(deleteAll());

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
                    {user && token ? (
                        <NavLink to="/" onClick={handleLogout}>
                            Logout
                        </NavLink>
                    ) : (
                        <>
                            <NavLink to="/login">Login</NavLink>
                            <NavLink to="/register" onClick={handleLogout}>
                                Register
                            </NavLink>
                        </>
                    )}
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
                            {cart.items.length > 0 && (
                                <span>{cart.items.length}</span>
                            )}
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
                                                <Link to="/myaccount">
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
                                                    to="/"
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
