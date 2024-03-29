import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../models/IPost";

export const postAPI = createApi({
    reducerPath: "postAPI",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    tagTypes: ['Post'],
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({
            query: (limit: number = 100) => ({
                url: '/posts?',
                params: {
                    _limit: limit
                }
            }),
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            providesTags: result => ['Post']
        }),
        createPost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: '/posts?',
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        deletePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Post']
        })
    })
})