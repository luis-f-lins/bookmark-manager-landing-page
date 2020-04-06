import React from "react";
import "./App.scss";
import NavBar from "./components/NavBar";
import Highlighted from "./components/Highlighted";
import Features from "./components/Features";
import Download from "./components/Download";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Highlighted />
      <Features />
      <Download />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
