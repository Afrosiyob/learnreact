import React, { Fragment, useState } from 'react'

const CounterC = () => {


    const [ count, setCount ] = useState( 0 )
    const [ colored, setColored ] = useState( false )


    const increment = () => {
        setCount( count + 1 )
    }

    const changeColor = () => {
        setColored( !colored )
    }

    return (
        <Fragment>
            <p style={ { color: colored ? "red" : "black" } }> Count { count } </p>
            <button onClick={ increment }> increment count </button>
            <button onClick={ changeColor } > change color </button>
        </Fragment>
    )
}

export default CounterC
