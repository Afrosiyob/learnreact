import React, { useState, useMemo } from 'react'


function generateUser ( firstName, lastName ) {
  const user = {
    firstName,
    lastName
  }

  console.log( user );
  return user
}

const App = () => {

  const [ counter, setCounter ] = useState( 0 )
  const [ firstName, setFirstName ] = useState( '' )
  const [ lastName, setLastName ] = useState( '' )

  const generateUserMemo = useMemo( () => generateUser( firstName, lastName ), [
    firstName, lastName
  ] )

  return (
    <div>
      <button onClick={ () => setCounter( prevCounter => prevCounter + 1 ) }> counter { counter } </button>

      <input value={ firstName } onChange={ e => setFirstName( e.target.value ) } />
      <input value={ lastName } onChange={ e => setLastName( e.target.value ) } />

      <pre>

        {
          JSON.stringify( generateUserMemo, null, 2 )
        }
      </pre>

    </div>
  )
}

export default App
