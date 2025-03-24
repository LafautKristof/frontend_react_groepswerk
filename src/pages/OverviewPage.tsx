import ErrorComponent from "../components/ErrorComponent";
import LoadingComponent from "../components/LoadingComponent";
import Overview from "../components/Overview";
import {
    useGetAllProductsQuery,
    useGetProductsRandomQuery,
} from "../components/store/productsApi";
import { useParams } from "react-router-dom";
const OverviewPage = () => {
    const { item, count } = useParams<{ item?: string; count?: string }>();
    const {
        data: itemData,
        error: itemError,
        isLoading: itemIsLoading,
    } = useGetAllProductsQuery(item || "", { skip: !item });

    const {
        data: countData,
        error: countError,
        isLoading: countIsLoading,
    } = useGetProductsRandomQuery(count || "", { skip: !count });

    const isLoading = itemIsLoading || countIsLoading;
    const error = itemError || countError;
    const data = item ? itemData : countData;
    console.log("2", data);
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
