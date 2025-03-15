import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cartApi = createApi({
    reducerPath: "cartApi",
    tagTypes: ["Cart"],
    baseQuery: fetchBaseQuery({
        baseUrl: "https://backend-node-groepswerk.onrender.com/api/user/cart",
    }),

    endpoints: (builder) => ({
        addToCart: builder.mutation({
            query: (data) => ({
                url: "/add",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Cart"],
        }),
    }),
});

export const { useAddToCartMutation } = cartApi;
export default cartApi;
