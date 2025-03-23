import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoginCredentials, LoginResponse } from "../../utils/types";
const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://backend-node-groepswerk.onrender.com/api/auth",
    }),
    endpoints: (builder) => ({
        loginUser: builder.mutation<LoginResponse, LoginCredentials>({
            query: (credentials) => ({
                url: "/login",
                method: "POST",
                body: credentials,
            }),
        }),
    }),
});

export const { useLoginUserMutation } = authApi;
export default authApi;
