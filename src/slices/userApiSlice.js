import { apiSlice } from "./apiSlice";

const USERS_URL = "/api/users";

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
            query: (data) => {
                // const token = localStorage.getItem('token'); // Or get it from Redux state
                return {
                    url: `${USERS_URL}/profile`,
                    method: 'PUT',
                    body: data,
                };
            },
        }),
    }),
});


export const { 
    useLoginMutation, 
    useRegisterMutation, 
    useLogoutMutation,
    useUpdateUserMutation 
} = usersApiSlice;

