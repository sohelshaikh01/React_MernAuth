import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const baseQuery = fetchBaseQuery({ baseUrl: API_BASE_URL });

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User'],

    endpoints: (builder) => ({ }),
    // Endpoints injected through userApiSlice.js
});

