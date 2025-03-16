import Overview from "../components/Overview";
import { useGetAllProductsQuery } from "../components/store/productsApi";
import { useParams } from "react-router-dom";
const OverviewPage = () => {
    const { item } = useParams<{ item: string }>();
    console.log("2", item);
    const { data, error, isLoading } = useGetAllProductsQuery(item || "");
    console.log("dataaa", data);
    if (error) return <div>Error loading products</div>;
    if (isLoading) return <div>Loading...</div>;
    return (
        <div>
            <Overview product={data} />
        </div>
    );
};
export default OverviewPage;
