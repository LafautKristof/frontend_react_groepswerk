import styles from "../css/Footer.module.css";
import { Link } from "react-router";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import { VscSend } from "react-icons/vsc";
const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.first_table}>
                    <h2>Exclusive</h2>
                    <h3>Subscribe</h3>
                    <p>Get 10% off your first order</p>
                    <form action="">
                        <div className={styles.input_container}>
                            <input type="text" placeholder="Enter your email" />

                            <p>
                                <VscSend />
                            </p>
                        </div>
                    </form>
                </div>
                <div className={styles.second_table}>
                    <h3>Support</h3>
                    <p>
                        111Bjoy sarani,Dnakia,
                        <br /> Dh1515,Bangladesh
                    </p>
                    <p>exclusive@gmail.com</p>
                    <p> +0000-00000-0000</p>
                </div>
                <div className={styles.third_table}>
                    <h3>Account</h3>

                    <Link to="/myaccount">My Account</Link>
                    <Link to="/login">Login / Register</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="/wishlist">Wishlist</Link>
                    <Link to="/">Shop</Link>
                </div>

                <div className={styles.fourth_table}>
                    <h3>Quick Link</h3>
                    <Link to="/privacypolicy">Privacy Policy</Link>
                    <Link to="/termofuse">Term Of Use</Link>
                    <Link to="/faq">FAQ</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className={styles.fifth_table}>
                    <h3>Download App</h3>
                    <p>From App Store or Google Play</p>
                    <div className={styles.qr_apple_google}>
                        <div>
                            <img src="../icons/QrCode.png" alt="" />
                        </div>
                        <div>
                            <img src="../icons/download-appstore.svg" alt="" />
                            <img
                                src="../icons/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.svg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className={styles.social_media}>
                        <Link to="/">
                            <FaFacebookF />
                        </Link>

                        <Link to="/">
                            <FaTwitter />
                        </Link>

                        <Link to="/">
                            <FaInstagram />
                        </Link>

                        <Link to="/">
                            <FaLinkedinIn />
                        </Link>
                    </div>
                </div>
                <p>© 2025 Exclusive. All Rights Reserved</p>
            </div>
        </>
    );
};
export default Footer;
