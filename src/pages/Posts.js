import axios from 'axios'
import React from 'react'
import { useQuery, useQueryClient } from 'react-query'




const Posts = () => {

    const queryClient = useQueryClient()

    const fetchGetPosts = async ( { queryKey } ) => {
        const [ key, props ] = queryKey
        console.log( props );
        return await axios.get( "https://jsonplaceholder.typicode.com/posts" )
            .then( response => response )
            .catch( error => error )
    }

    const { isLoading, isError, data, error } = useQuery( [ 'posts', { name: "aforisyob" } ], fetchGetPosts, {
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
                    [ 'posts', { name: "aforisyob" } ],
                    fetchGetPosts,
                    // {
                    //     staleTime: 10 * 1000, // only prefetch if older than 10 seconds
                    // }
                )
            } } > refetching </button>
        </div>
    )
}

export default Posts
