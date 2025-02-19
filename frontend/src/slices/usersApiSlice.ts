import { get } from "http";
import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";
import { register } from "module";

type User = {
  _id: string;
  name: string;
  email: string;
};

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<User, void>({
      query: (data) => ({
        method: "POST",
        url: `${USERS_URL}/auth`,
        body: data,
      }),
    }),
    register: builder.mutation<User, void>({
      query: (data) => ({
        method: "POST",
        url: `${USERS_URL}`,
        body: data,
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        method: "POST",
        url: `${USERS_URL}/logout`,
      }),
    }),
    profile: builder.mutation<User, void>({
      query: (data) => ({
        method: "PUT",
        url: `${USERS_URL}/profile`,
        body: {
          ...data,
        },
      }),
    }),
    getUsers: builder.query<User[], void>({
      query: () => ({
        url: `${USERS_URL}`,
      }),
      providesTags: ["Users"],
      keepUnusedDataFor: 5,
    }),
    deleteUser: builder.mutation<void, string>({
      query: (id) => ({
        url: `${USERS_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),
    getUserDetails: builder.query<User, string>({
      query: (id) => ({
        url: `${USERS_URL}/${id}`,
      }),
      keepUnusedDataFor: 5,
    }),
    updateUser: builder.mutation<User, User>({
      query: (data) => ({
        url: `${USERS_URL}/${data._id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
  overrideExisting: false, // Ensure this is set correctly
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useProfileMutation,
  useGetUsersQuery,
  useDeleteUserMutation,
  useGetUserDetailsQuery,
  useUpdateUserMutation,
} = usersApiSlice;
