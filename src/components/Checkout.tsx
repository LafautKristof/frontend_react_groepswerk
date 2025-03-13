import React from "react";
import styles from "../css/Checkout.module.css";

const CheckoutForm: React.FC = () => {
    return (
        <div className={styles.checkout_container}>
            <div className={styles.billing_details}>
                <h2>Billing Details</h2>
                <form>
                    <label>
                        First Name<span>*</span>
                    </label>
                    <input type="text" name="firstName" required />

                    <label>Company Name</label>
                    <input type="text" name="companyName" />

                    <label>
                        Street Address<span>*</span>
                    </label>
                    <input type="text" name="streetAddress" required />

                    <label>Apartment, floor, etc. (optional)</label>
                    <input type="text" name="apartment" />

                    <label>
                        Town/City<span>*</span>
                    </label>
                    <input type="text" name="city" required />

                    <label>
                        Phone Number<span>*</span>
                    </label>
                    <input type="text" name="phoneNumber" required />

                    <label>
                        Email Address<span>*</span>
                    </label>
                    <input type="email" name="email" required />

                    <div className={styles.save_info}>
                        <input type="checkbox" name="saveInfo" />
                        <label>
                            Save this information for faster check-out next time
                        </label>
                    </div>
                </form>
            </div>

            <div className={styles.order_summary}>
                <div className={styles.order_item}>
                    <div className={styles.img}>
                        <img
                            src="src\assets\images\1200x1046.jpg"
                            alt="LCD Monitor"
                        />
                    </div>
                    <div className={styles.info}>
                        <p>LCD Monitor</p>
                        <p>$650</p>
                    </div>
                </div>

                <div className={styles.order_item}>
                    <div className={styles.img}>
                        <img
                            src="src\assets\images\1200x1046.jpg"
                            alt="Gamepad"
                        />
                    </div>
                    <div className={styles.info}>
                        <p>HI Gamepad</p>
                        <p>$1100</p>
                    </div>
                </div>
                <div className={styles.order_total}>
                    <span>Subtotal:</span>

                    <span>$1750</span>
                </div>
                <hr />
                <div className={styles.order_total}>
                    <span>Shipping:</span>
                    <span>Free</span>
                </div>
                <hr />
                <div className={styles.order_total}>
                    <span>Total:</span>
                    <span>$1750</span>
                </div>
                <div className={styles.payment_method}>
                    <label>
                        <input type="radio" name="payment" value="bank" />
                        Bank
                    </label>
                    <label>
                        <input type="radio" name="payment" value="cash" />
                        Cash on delivery
                    </label>
                </div>
                <div className={styles.coupon}>
                    <input type="text" placeholder="Coupon Code" />
                    <button className={styles.button}>Apply Coupon</button>
                </div>
                <button className={styles.button}>Place Order</button>
            </div>
        </div>
    );
};

export default CheckoutForm;
