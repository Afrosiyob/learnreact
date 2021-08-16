import React, { useEffect, useMemo, useState } from "react";

function complexNumber ( num ) {
  console.log( "complexNumber" );
  let i = 0;
  while ( i < 1000000000 ) {
    i++;
  }
  return num * 2;
}

const CounterB = () => {
  const [ state, setState ] = useState( {
    counter: 1,
    colored: false
  } );

  const complexNum = useMemo( () => {
    return complexNumber( state.counter )
  }, [ state.counter ] );

  useEffect( () => {
    console.log( "counter B" );
  } );

  return (
    <div>
      <button
        onClick={ () =>
          setState( ( prevState ) => ( {
            ...prevState,
            counter: prevState.counter++,
          } ) )
        }
      >
        { " " }
        plus
      </button>
      <button
        onClick={ () => setState( ( prevState ) => ( {
          ...prevState,
          colored: !state.colored
        } ) ) }
      >

        change color

      </button>
      <div style={ { color: state.colored ? "red" : "black" } }> some text { complexNum } </div>
    </div>
  );
};

export default CounterB;
