
import React from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { apiService } from '../api/api'

const Posts = () => {

    const queryClient = useQueryClient()

    const { isLoading, isError, data, error } = useQuery( [ 'GET_POSTS', { name: "aforisyob" } ], apiService, {
        onSuccess: () => console.log( "success fetching posts" )
    } )

    console.log( "isLoading", isLoading );
    console.log( "isError", isError );
    console.log( "data", data );
    console.log( "error", error );

    return (
        <div>
            there are posts
            <button onClick={ async () => {
                await queryClient.prefetchQuery(
                    [ 'GET_POSTS', { name: "aforisyob" } ],
                    apiService,
                    // {
                    //     staleTime: 10 * 1000, // only prefetch if older than 10 seconds
                    // }
                )
            } } > refetching </button>
        </div>
    )
}

export default Posts
