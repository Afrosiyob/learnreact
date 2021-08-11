import React, { useEffect, useState } from "react";

function complexNumber(num) {
  let i = 0;
  while (i < 1000000000) {
    i++;
  }
  return num * 2;
}

const CounterB = () => {
  const [state, setState] = useState({
    counter: 1,
  });

  const complexNum = complexNumber(state.counter);

  useEffect(() => {
    console.log("counter B");
  });

  return (
    <div>
      <button
        onClick={() =>
          setState((prevState) => ({
            ...prevState,
            counter: prevState.counter++,
          }))
        }
      >
        {" "}
        dqwdqw
      </button>
      this is counter B {complexNum}
    </div>
  );
};

export default CounterB;
