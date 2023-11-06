import React, { useState } from 'react';
import MainNum from "./MainNum.js";

function Main() {
  const [counter, setCounter] = useState(0);

  const handleCounter = (value) => {
    setCounter(counter + value);
  };

  return (
    <div>
      <button onClick={() => handleCounter(1)}>+</button>
      <button onClick={() => handleCounter(-1)}>-</button>
      <MainNum counter={counter} />
    </div>
  );
}

export default Main;