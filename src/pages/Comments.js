import React from 'react'
import { useMutation } from 'react-query'

const Comments = () => {

    const { isLoading, isError, error, mutate } = useMutation( newTodo => axios.post( '/todos', newTodo ) )
    return (
        <div>
            there are comments
        </div>
    )
}

export default Comments
