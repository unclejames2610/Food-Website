import React from "react";
import Category from "./components/Category";
import Food from "./components/Food";
import Headinecards from "./components/Headinecards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Headinecards />
      <Food />
      <Category />
    </div>
  );
}

export default App;
