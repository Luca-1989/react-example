import React, { useState } from "react";

const ChiSiamo = () => {
  const title = "Chi Siamo";
  const [count, setCount] = useState(0);

  const Counter = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>Current Count: {count}</p>
      <button
        onClick={Counter}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Increment
      </button>
    </div>
  );
};

export default ChiSiamo;
