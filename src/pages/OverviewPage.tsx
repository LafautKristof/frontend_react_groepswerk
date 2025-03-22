import ErrorComponent from "../components/ErrorComponent";
import LoadingComponent from "../components/LoadingComponent";
import Overview from "../components/Overview";
import { useGetAllProductsQuery } from "../components/store/productsApi";
import { useParams } from "react-router-dom";
const OverviewPage = () => {
    const { item } = useParams<{ item: string }>();
    const { data, error, isLoading } = useGetAllProductsQuery(item || "");
    console.log("item", item);
    if (isLoading)
        return (
            <div>
                <LoadingComponent />
            </div>
        );
    if (error)
        return (
            <div>
                <ErrorComponent />
            </div>
        );

    return (
        <div>
            <Overview product={data} />
        </div>
    );
};

export default OverviewPage;
