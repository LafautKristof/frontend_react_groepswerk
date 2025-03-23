import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AddToCartResponse, AddToCartRequest } from "../../utils/types";

const cartApi = createApi({
    reducerPath: "cartApi",
    tagTypes: ["Cart"],
    baseQuery: fetchBaseQuery({
        baseUrl: "https://backend-node-groepswerk.onrender.com/api/user/cart",
    }),

    endpoints: (builder) => ({
        addToCart: builder.mutation<AddToCartResponse, AddToCartRequest>({
            query: ({ product, user }) => ({
                url: "/add",
                method: "POST",
                body: { product, userId: user._id },
            }),
            invalidatesTags: ["Cart"],
        }),
        deleteProduct: builder.mutation<
            AddToCartResponse,
            { productId: string; userId: string }
        >({
            query: ({ productId, userId }) => ({
                url: `/delete/${userId}/${productId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Cart"],
        }),
        deleteAllProducts: builder.mutation({
            query: ({ userId }) => ({
                url: `/deleteAll/${userId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Cart"],
        }),
    }),
});

export const {
    useAddToCartMutation,
    useDeleteProductMutation,
    useDeleteAllProductsMutation,
} = cartApi;
export default cartApi;
