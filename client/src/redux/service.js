import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products?limit=100",
    }),
    getProduct: builder.query({
      query: (id) => `/product/${id}`,
    }),
  }),
});

export const paymentgatewayApi = createApi({
  reducerPath: "paymentGatePath",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.0.101:3005/",
    mode: "cors"
  }),

  endpoints: (builder) => ({
    postOrder: builder.mutation({
      query: (orderData) => (

        {
        url: "/postOrder",
        method: "POST",
        body: orderData,
      }),
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductQuery } = dataApi;

export const { usePostOrderMutation } = paymentgatewayApi;
