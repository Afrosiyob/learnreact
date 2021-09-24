import React, { useEffect, useReducer, useState } from 'react'
import { useQuery } from 'react-query'
import { fetchList } from '../api/query.service'


const initialState = {
    loading: false,
    data: null,
    error: null
}

const reducer = ( state, { type, payload } ) => {
    switch ( type ) {
        case "GET_POST":
            return { ...state, loading: true }
        case "GET_POST_SUCCESS":
            return { ...state, loading: false, data: payload }
        case "GET_POST_ERROR":
            return { ...state, loading: false, error: payload }
        default:
            return { ...state }
    }
}

const init = ( state ) => ( {
    ...state,
    name: "afrosiyob"
} )

const Todos = () => {



    const [ state, dispatch ] = useReducer( reducer, initialState, init )

    console.log( state );
    const [ todos, setTodos ] = useState( [] )

    // Queries
    const { isLoading, error, data } = useQuery( [ 'todos', { url: "https://jsonplaceholder.typicode.com/todos" } ], fetchList, {
        onSuccess: async () => {
            console.log( "success fetched" );
        }
    } )

    useEffect( () => {
        setTodos( data?.data )
    }, [ data, error ] )

    if ( isLoading ) return 'Loading...'

    if ( error ) return 'An error has occurred: ' + error.message

    return (
        <div>
            <ul>
                { todos && todos.map( ( item, index ) => (
                    <li key={ index }>
                        { item?.title }
                    </li>
                ) ) }
            </ul>
        </div>
    )
}

export default Todos
