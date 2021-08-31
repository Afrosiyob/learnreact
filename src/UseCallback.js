import React, { useCallback, useEffect, useState } from 'react'

const UseCallback = () => {


    const [ message, setMessage ] = useState( 'message' )
    const [ counter, setCounter ] = useState( 0 )

    const greeting = useCallback(
        ( msg ) => {
            console.log( `helloo world ${ msg } ` );
        },
        [],
    )


    useEffect( () => {

        greeting( message )

    }, [ greeting, message ] )


    return (
        <div>
            <button onClick={ () => setCounter( prevCounter => prevCounter + 1 ) }> counter { counter } </button>
        </div>
    )
}

export default UseCallback
