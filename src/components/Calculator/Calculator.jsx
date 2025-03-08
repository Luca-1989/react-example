import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      // eslint-disable-next-line no-eval
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator bg-gray-800 text-white p-4 rounded">
      <div className="display mb-4">
        <div className="input text-right text-xl">{input}</div>
        <div className="result text-right text-2xl font-bold">{result}</div>
      </div>
      <div className="buttons grid grid-cols-4 gap-2">
        {["7", "8", "9", "/"].map((value) => (
          <button
            key={value}
            onClick={() => handleClick(value)}
            className="bg-blue-600 hover:bg-blue-700 p-4 rounded"
          >
            {value}
          </button>
        ))}
        {["4", "5", "6", "*"].map((value) => (
          <button
            key={value}
            onClick={() => handleClick(value)}
            className="bg-blue-600 hover:bg-blue-700 p-4 rounded"
          >
            {value}
          </button>
        ))}
        {["1", "2", "3", "-"].map((value) => (
          <button
            key={value}
            onClick={() => handleClick(value)}
            className="bg-blue-600 hover:bg-blue-700 p-4 rounded"
          >
            {value}
          </button>
        ))}
        {["0", ".", "=", "+"].map((value) => (
          <button
            key={value}
            onClick={value === "=" ? handleCalculate : () => handleClick(value)}
            className="bg-blue-600 hover:bg-blue-700 p-4 rounded"
          >
            {value}
          </button>
        ))}
        <button
          onClick={handleClear}
          className="col-span-4 bg-red-600 hover:bg-red-700 p-4 rounded"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Calculator;
