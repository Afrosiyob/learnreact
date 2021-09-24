import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { fetchList } from '../api/query.service'

const Todos = () => {

    const [todos, setTodos] = useState([])

    // Queries
    const { isLoading, error, data } = useQuery(['todos', { url: "https://jsonplaceholder.typicode.com/todos" }], fetchList, {
        onSuccess: async () => {
            console.log("success fetched");
        }
    })

    useEffect(() => {
        setTodos(data?.data)
    }, [data, error])

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            <ul>
                {todos && todos.map((item, index) => (
                    <li key={index}>
                        {item?.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todos
