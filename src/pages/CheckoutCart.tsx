import { Link } from "react-router-dom";
import styles from "../css/Cart.module.css";
const CheckoutCart = () => {
  return (
    <>
      <main>
        <p className={styles.link}>
          {" "}
          <Link to="/">Home / Cart</Link>{" "}
        </p>
        <ul>
          <li>Product</li>
          <li>Price</li>
          <li>Quantity</li>
          <li>Subtotal</li>
        </ul>
        <ul className={styles.productinfo}>
          <li className={styles.productimg}>
            <img src="./src/assets/images/Monitor-cart-Small.png" alt="image" />
            <p>Product Name</p>
          </li>
          <li>$650</li>
          <li>
            <input type="number" />
          </li>
          <li>$1100</li>
        </ul>
        <div className={styles.buttons}>
          <Link to="/">
            <p>Return to shop</p>
          </Link>
          <Link to="/">
            <p>Update card</p>
          </Link>
        </div>
        <div className={styles.checkoutcontainer}>
          <div className={styles.coupon}>
            <input type="text" placeholder="Coupon code" />
            <Link to="/">Apply coupon</Link>
          </div>
          <div className={styles.checkout}>
            <h2>Cart totals</h2>
            <p>
              Subtotal: <span>$12</span>
            </p>
            <p>
              Shipping: <span>$36</span>
            </p>
            <p>
              Total: <span>$15</span>
            </p>
            <Link to="/">Proceed to checkout</Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default CheckoutCart;
