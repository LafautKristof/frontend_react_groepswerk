import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productsApi = createApi({
    reducerPath: "productsApi",
    tagTypes: ["Product"],
    baseQuery: fetchBaseQuery({
        baseUrl: "https://backend-node-groepswerk.onrender.com/api/products/",
    }),
    endpoints: (builder) => ({
        getProductsRandom: builder.query({
            query: (id) => `/random/${id}`,
            providesTags: ["Product"],
        }),
        getAllProducts: builder.query({
            query: (item: string) =>
                item && item.trim() !== "" ? `/${item}` : "/",
            providesTags: ["Product"],
        }),
    }),
});

export const { useGetProductsRandomQuery, useGetAllProductsQuery } =
    productsApi;
export default productsApi;
