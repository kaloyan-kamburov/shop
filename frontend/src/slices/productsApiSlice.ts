import { get } from "http";
import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  countInStock: number;
  image?: string;
};

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getProductDetails: builder.query<Product, string>({
      query: (id) => ({
        url: `${PRODUCTS_URL}/${id}`,
      }),
    })
  }),
  overrideExisting: false, // Ensure this is set correctly
});

export const { useGetProductsQuery, useGetProductDetailsQuery } = productsApiSlice;
