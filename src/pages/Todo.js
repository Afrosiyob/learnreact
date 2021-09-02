import React, { useContext, useReducer } from 'react'
import { ThemeContext } from '../context/ContextProvider'




const init = ( state ) => {

    return state

}

const reducer = ( state, { type, payload } ) => {
    switch ( type ) {
        case "INCREMENT":
            return { ...state, counter: state.counter + payload }
        case "DECREMENT":
            return { ...state, counter: state.counter - payload }
        default:
            return { ...state }
    }
}

const Todo = () => {

    const { isDark, setIsDark } = useContext( ThemeContext )

    const initialState = {
        counter: 0
    }

    const [ state, dispatch ] = useReducer( reducer, initialState, init )

    console.log( state );

    const whiteTheme = () => {
        setIsDark( state => ( {
            ...state,
            backgroundColor: "white",
            color: "black"
        } ) )

    }
    const darkTheme = () => {
        setIsDark( state => ( {
            ...state,
            backgroundColor: "rgb(33,33,33)",
            color: "white"
        } ) )
    }

    return (
        <div style={ isDark }>
            <button onClick={ darkTheme } >   dark</button>
            <button onClick={ whiteTheme } >   white </button>
            <button onClick={ () => dispatch( {
                type: "INCREMENT",
                payload: 1
            } ) } >   increment </button>
            <button onClick={ () => dispatch( {
                type: "DECREMENT",
                payload: 1
            } ) } >   decrement </button>
            this is todo page
        </div>
    )
}

export default Todo
