import React from "react";
import Category from "./components/Category";
import Food from "./components/Food";
import Footer from "./components/Footer";
import Headinecards from "./components/Headinecards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((darkMode) => !darkMode);
  };
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="dark:bg-[#0c0300]">
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Hero />
        <Headinecards />
        <Food />
        <Category />
        <Footer />
      </div>
    </div>
  );
}

export default App;
