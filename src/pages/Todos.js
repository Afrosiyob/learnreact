import React from 'react'
import { useQuery } from 'react-query'
import { fetchGetPosts } from '../api/query.service'

const Todos = () => {

    // Queries
    const { isLoading, error, data } = useQuery(['todos', { note: "fetching todos" }], fetchGetPosts)




    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    console.log(data);

    return (
        <div>
            all todos
        </div>
    )
}

export default Todos
