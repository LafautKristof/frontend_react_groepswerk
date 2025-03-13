import styles from "../css/DetailPage.module.css";
import {
    IoStar,
    IoStarHalf,
    IoStarOutline,
    IoHeartOutline,
    IoRemove,
    IoAddOutline,
} from "react-icons/io5";
import { PiTruck } from "react-icons/pi";
import { PiArrowsCounterClockwiseLight } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
const DetailPage: React.FC = () => {
    const location = useLocation();
    const { product } = location.state || {};
    return (
        <>
            <div className={styles.grid_container}>
                <div className={styles.small_photos}>
                    <img src={product?.images[1]} alt="Kleine foto 1" />
                    <img src={product?.images[2]} alt="Kleine foto 2" />
                    <img src={product?.images[3]} alt="Kleine foto 3" />
                    <img src={product?.images[4]} alt="Kleine foto 4" />
                </div>
                <div className={styles.big_photo}>
                    <img src={product?.images[0]} alt="Grote foto" />
                </div>
                <div className={styles.info}>
                    <h2>{product?.name}</h2>
                    <div className={styles.rating_instock}>
                        <div className={styles.icons}>
                            <IoStar />
                            <IoStar />
                            <IoStarHalf />
                            <IoStarOutline />
                            <IoStarOutline />
                        </div>
                        <p className={styles.reviews}>
                            ({product?.raters} reviews)
                        </p>
                        <p className={styles.divider}>|</p>
                        <p className={styles.instock}>In Stock</p>
                    </div>
                    <p className={styles.price}>${product?.price}</p>
                    <p className={styles.description}>{product?.description}</p>
                    <hr />
                    <div className={styles.buttons}>
                        <div className={styles.quantity}>
                            <button className={styles.min}>
                                <IoRemove />
                            </button>
                            <p>1</p>
                            <button className={styles.plus}>
                                <IoAddOutline />
                            </button>
                        </div>
                        <button className={styles.add_to_cart}>Buy Now</button>

                        <button className={styles.add_to_wishlist}>
                            <IoHeartOutline />
                        </button>
                    </div>
                    <div className={styles.shipping_info}>
                        <div className={styles.shipping}>
                            <p>
                                <PiTruck />
                            </p>
                            <div className={styles.shipping_text}>
                                <h5>Free Delivery</h5>
                                <p>Free Delivery on all orders over $100</p>
                            </div>
                        </div>
                        <hr />
                        <div className={styles.shipping}>
                            <p>
                                <PiArrowsCounterClockwiseLight />
                            </p>
                            <div className={styles.shipping_text}>
                                <h5>Return Delivery</h5>
                                <p>Free 30 Day Delivery Return </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailPage;
