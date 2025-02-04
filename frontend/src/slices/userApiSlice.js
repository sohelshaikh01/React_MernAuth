import { apiSlice } from "./apiSlice";

const USERS_URL = "/api/users";

// For Creating Api State

export const usersApiSlice = apiSlice.injectEndpoints({
         
    endpoints: (builder) => ({
        login: builder.mutation({ 
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body: data 
            }),
        }),
        register: builder.mutation({ 
            query: (data) => ({
                url: `${USERS_URL}`,
                method: 'POST',
                body: data 
            }),
        }),
        logout: builder.mutation({ 
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: 'POST', 
            }),
        }),
        updateUser: builder.mutation({ 
            query: (data) => ({
                url: `${USERS_URL}/profile`,
                method: 'PUT',
                body: data 
            }),
        }),
    }),
});
// This is injected in endpoint in apiSlice

// If Query useLoginQuery, If Mutation useLoginMutation
export const { 
    useLoginMutation, 
    useRegisterMutation, 
    useLogoutMutation,
    useUpdateUserMutation 
} = usersApiSlice;

