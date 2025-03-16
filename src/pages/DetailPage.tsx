import { useLocation } from "react-router-dom";
import DetailProduct from "../components/DetailProduct";
const DetailPage: React.FC = () => {
    const location = useLocation();
    const { product } = location.state || {};

    if (!product) {
        return <p>Product not found</p>;
    }
    return (
        <>
            <DetailProduct product={product} />{" "}
        </>
    );
};

export default DetailPage;
