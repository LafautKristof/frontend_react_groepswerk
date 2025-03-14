import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://backend-node-groepswerk.onrender.com/api/products/",
    }),
    endpoints: (builder) => ({
        getProductsRandom: builder.query({
            query: (id) => "/random/" + id,
        }),
    }),
});

export const { useGetProductsRandomQuery } = productsApi;
export default productsApi;
