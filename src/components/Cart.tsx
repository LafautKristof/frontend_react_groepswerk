import { useSelector } from "react-redux";
import styles from "../css/Cart.module.css";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import {
    increment,
    decrement,
    clearCart,
    deleteProductSlice,
} from "./store/cartSlice";
import { AiTwotoneDelete } from "react-icons/ai";
import { RootState } from "./store/store";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import {
    useDeleteProductMutation,
    useDeleteAllProductsMutation,
} from "./store/cartApi";
const Cart = () => {
    const { user } = useContext(AuthContext);
    const cart = useSelector((state: RootState) => state.cart);
    console.log(cart.items[0]);
    const [deleteProduct] = useDeleteProductMutation();
    const [deleteAllProducts] = useDeleteAllProductsMutation();
    const dispatch = useDispatch();
    const handleClearCart = async () => {
        if (!user) {
            console.log("user", user);
            return;
        }
        try {
            const userId = user._id;
            console.log("user", user._id);
            const response = await deleteAllProducts({ userId });
            console.log("responsepdcard", response);

            dispatch(clearCart());
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteProduct = async (id: any) => {
        if (!user) {
            console.log("user", user);
            return;
        }
        try {
            console.log("id", id);
            const productId = id;
            const userId = user._id;
            console.log("user", user._id);
            const response = await deleteProduct({ productId, userId });
            console.log("responsepdcard", response);

            dispatch(deleteProductSlice(productId));
        } catch (error) {
            console.log(error);
        }
    };

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
                    {cart.items.map(
                        (product: any) => (
                            console.log("product", product),
                            (
                                <tbody
                                    key={product._id}
                                    className={styles.custom_tbody}
                                >
                                    <tr>
                                        <td className={styles.custom_td}>
                                            <img
                                                src={product.images[0]}
                                                alt={product.name}
                                            />
                                            <div
                                                onClick={() =>
                                                    handleDeleteProduct(
                                                        product._id
                                                    )
                                                }
                                                className={styles.delete}
                                            >
                                                <span>
                                                    <AiTwotoneDelete />
                                                </span>
                                            </div>
                                            <span>{product.name}</span>
                                        </td>
                                        <td>${product.price}</td>
                                        <td>
                                            <div className={styles.quantity}>
                                                <p>{product.quantity}</p>
                                                <div>
                                                    <button
                                                        onClick={() => {
                                                            dispatch(
                                                                increment(
                                                                    product._id
                                                                )
                                                            );
                                                        }}
                                                    >
                                                        +
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            dispatch(
                                                                decrement(
                                                                    product._id
                                                                )
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
                                                product.price * product.quantity
                                            ).toFixed(2)}
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        )
                    )}
                </table>

                <div className={styles.buttons}>
                    <button onClick={() => (window.location.href = "/")}>
                        Return to shop
                    </button>{" "}
                    <button onClick={handleClearCart}>Delete Cart</button>
                </div>
                <div className={styles.total}>
                    <h2>Cart Total</h2>
                    <div>
                        <h3>Subtotal: </h3>
                        <p>
                            {cart.items
                                .reduce(
                                    (total: any, item: any) =>
                                        total + item.price,
                                    0
                                )
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
                        {cart.items
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
