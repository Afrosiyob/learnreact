import React from 'react'
import { useQuery } from 'react-query'


const Posts2 = () => {


    const { isLoading, isError, data, error } = useQuery(
        [ 'GET_POSTS_TWO', {
            postId: 1,
            userId: 1
        } ],
        async ( { queryKey } ) => {
            console.log( queryKey );
            await fetch( 'https://jsonplaceholder.typicode.com/posts' )
                .then( ( response ) => response.json() )
                .then( ( json ) => console.log( json ) );
        },
        {
            onSuccess: () => {
                console.log( "success fetching..." );
            },
            enabled: true,
            suspense: true
        }
    )

    return (
        <div>
            {
                isLoading ? "...loading" : "posts 2"
            }
        </div>
    )
}

export default Posts2
