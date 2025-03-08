import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import ChiSiamo from "./pages/ChiSiamo";
import StartWarsPage from "./pages/StartWarsPage";
import CalculatorPage from "./pages/CalculatorPage";
import Navbar from "./components/General/Navbar";
import Footer from "./components/General/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow text-center">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/chisiamo" element={<ChiSiamo />} />
          <Route path="/starwars" element={<StartWarsPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
