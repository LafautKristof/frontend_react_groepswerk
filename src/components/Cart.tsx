import { useSelector } from "react-redux";
import styles from "../css/Cart.module.css";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { increment, decrement } from "./store/cartSlice";
import { AiTwotoneDelete } from "react-icons/ai";
const Cart = () => {
    const cart = useSelector((state: any) => state.cart);

    const dispatch = useDispatch();

    return (
        <>
            <div className={styles.table_container}>
                <table className={styles.custom_table}>
                    <thead className={styles.custom_thead}>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    {cart?.map((cartItem: any) => (
                        <tbody
                            key={cartItem._id}
                            className={styles.custom_tbody}
                        >
                            <tr>
                                <td className={styles.custom_td}>
                                    <img
                                        src={cartItem.images[0]}
                                        alt={cartItem.name}
                                    />
                                    <div className={styles.delete}>
                                        <span>
                                            <AiTwotoneDelete />
                                        </span>
                                    </div>
                                    <span>{cartItem.name}</span>
                                </td>
                                <td>${cartItem.price.toFixed(2)}</td>
                                <td>
                                    <div className={styles.quantity}>
                                        <p>{cartItem.quantity}</p>
                                        <div>
                                            <button
                                                onClick={() => {
                                                    dispatch(
                                                        increment(cartItem._id)
                                                    );
                                                }}
                                            >
                                                +
                                            </button>
                                            <button
                                                onClick={() => {
                                                    dispatch(
                                                        decrement(cartItem._id)
                                                    );
                                                }}
                                            >
                                                -
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    $
                                    {(
                                        cartItem.price * cartItem.quantity
                                    ).toFixed(2)}
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>

                <div className={styles.buttons}>
                    <button onClick={() => (window.location.href = "/")}>
                        Return to shop
                    </button>{" "}
                    <button>Delete Cart</button>
                </div>
                <div className={styles.total}>
                    <h2>Cart Total</h2>
                    <div>
                        <h3>Subtotal: </h3>
                        <p>
                            {cart
                                .reduce((total, item) => total + item.price, 0)
                                .toFixed(2)}
                        </p>
                    </div>
                    <hr />
                    <div>
                        <h3>Shipping:</h3> <p>free </p>
                    </div>
                    <hr />
                    <div>
                        <h3>Total:</h3>
                        {cart
                            .reduce(
                                (total, item) =>
                                    total + item.price * item.quantity,
                                0
                            )
                            .toFixed(2)}
                    </div>
                    <Link to="/checkout">
                        <button>Process to checkout</button>
                    </Link>
                </div>
            </div>
        </>
    );
};
export default Cart;
