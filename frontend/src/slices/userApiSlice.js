import { apiSlice } from './apiSlice';

const USERS_URL = '/api/users';

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body: data
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/login`,
                method: 'POST',
            }),
        }),
    }),
});
// This is injected in endpoint in apiSlice

// If Query useLoginQuery
export const { useLoginMutation, useLogoutMutation } = usersApiSlice;