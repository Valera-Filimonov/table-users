import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {UsersObject} from "./types";

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://retoolapi.dev/eqsQ4S/' }),
    endpoints: (builder) => ({
        getUsers: builder.mutation<Array<UsersObject>, string>({
            query: (user) => ({
                url: `${user}`,
                method: 'GET'
            }),
        }),
        postUser: builder.mutation<UsersObject, any>({
            query: (body) => ({
                url: `users`,
                method: 'POST',
                body,
            }),
        }),
        deleteUser: builder.mutation<{ success: boolean; id: string }, string | null>({
            query: (id) => ({
                url: `users/${id}`,
                method: 'DELETE',
            }),
        })
    }),
})

export const {useGetUsersMutation, usePostUserMutation, useDeleteUserMutation} = usersApi;