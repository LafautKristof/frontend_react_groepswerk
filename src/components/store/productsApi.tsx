import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductsResponse } from "../../utils/types";

const productsApi = createApi({
    reducerPath: "productsApi",
    tagTypes: ["Product"],
    baseQuery: fetchBaseQuery({
        baseUrl: "https://backend-node-groepswerk.onrender.com/api/products/",
    }),
    endpoints: (builder) => ({
        getProductsRandom: builder.query<ProductsResponse, string>({
            query: (id) => `/random/${id}`,
            providesTags: ["Product"],
        }),
        getAllProducts: builder.query<ProductsResponse, string>({
            query: (item: string) =>
                item && item.trim() !== "" ? `/${item}` : "/",
            providesTags: ["Product"],
        }),
    }),
});

export const { useGetProductsRandomQuery, useGetAllProductsQuery } =
    productsApi;
export default productsApi;
