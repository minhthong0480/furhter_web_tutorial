import React, { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  const [counter, setCounter] = useState(0);


  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const plusButton = () => {
    const sum = counter + parseInt(number);
    setCounter(sum)
  };
  const minusButton = () => {
    const sum = counter - parseInt(number);
    setCounter(sum)
  };

  return (
    <>
      <div>Counter</div>
      <input type="number" onChange={handleChange} />
      <button onClick={plusButton}>+</button>
      <button onClick={minusButton}>-</button>
      <p>{counter}</p>
    </>
  );
}

export default Counter;
