import React, { useEffect, useRef, useState } from "react";
import { usePrevious } from "../hooks/usePrevious";

const CounterA = () => {
  const [state, setState] = useState({
    counter: 0,
    colored: false,
  });

  useEffect(() => {
    console.log("counter A");
  });

  const prevCounter = usePrevious(state.counter);

  console.log(`Now : ${state.counter}`);
  console.log(`Before : ${prevCounter}`);

  const inputRef = useRef("");

  const handleAction = (type) => {
    if (type === "increment") {
      setState((prevState) => ({
        ...prevState,
        counter: prevState.counter + 1,
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        counter: prevState.counter - 1,
      }));
    }
  };

  return (
    <div>
      <button onClick={() => handleAction("increment")}> increment </button>
      <button onClick={() => handleAction("decrement")}> decrement </button>
      this is counter A
      <input
        ref={inputRef}
        onChange={() => {
          console.log(inputRef.current.value);
        }}
      />
    </div>
  );
};

export default CounterA;
