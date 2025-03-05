import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import DetailPage from "./pages/DetailPage";
import { AuthProvider } from "./context/authContext";
import { WishListProvider } from "./context/wishListContext";
import { CartProvider } from "./context/cartContext";

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
                                path="/detailpage/:id"
                                element={<DetailPage />}
                            />
                        </Routes>
                    </Layout>
                </WishListProvider>
            </CartProvider>
        </AuthProvider>
    );
}

export default App;
