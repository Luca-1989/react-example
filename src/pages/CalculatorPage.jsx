import React from "react";
import Calculator from "../components/Calculator/Calculator";

const CalculatorPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Calculator</h1>
      <Calculator />
    </div>
  );
};

export default CalculatorPage;
