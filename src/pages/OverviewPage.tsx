import Overview from "../components/Overview";
import { useGetAllProductsQuery } from "../components/store/productsApi";
import { useParams } from "react-router-dom";
const OverviewPage = () => {
    const { item } = useParams<{ item: string }>();
    const { data, error, isLoading } = useGetAllProductsQuery(item || "");
    console.log("item", item);
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error occurred</div>;

    return (
        <div>
            <Overview product={data} />
        </div>
    );
};

export default OverviewPage;
