import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import DetailPage from "./pages/DetailPage";
import CheckoutForm from "./pages/CheckoutPage";
import MyAccount from "./pages/ProfileEdit";
import { AuthProvider } from "./context/authContext";
import { WishListProvider } from "./context/wishListContext";
import { CartProvider } from "./context/cartContext";
import OverviewPage from "./pages/OverviewPage";
import WishlistPage from "./pages/WishListPage";
import CartPage from "./pages/CartPage";
import Page404 from "./pages/Page404";

function App() {
    return (
        <AuthProvider>
            <CartProvider>
                <WishListProvider>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />

                            <Route
                                path="/detailpage/:id/:slug"
                                element={<DetailPage />}
                            />
                            <Route
                                path="/allproduct/"
                                element={<OverviewPage />}
                            />
                            <Route
                                path="/allproduct/:item"
                                element={<OverviewPage />}
                            />
                            <Route
                                path="/checkout"
                                element={<CheckoutForm />}
                            />
                            <Route path="/myaccount" element={<MyAccount />} />
                            <Route
                                path="/wishlist"
                                element={<WishlistPage />}
                            />
                            <Route path="/cart" element={<CartPage />} />
                            <Route path="*" element={<Page404 />} />
                        </Routes>
                    </Layout>
                </WishListProvider>
            </CartProvider>
        </AuthProvider>
    );
}

export default App;
