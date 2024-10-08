import React from "react";
import "./App.css";

import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Experience from "./components/Experience/Experience";
import Project from "./components/Project/Project";

function App() {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Experience />
        <Project />
      </main>
    </>
  );
}

export default App;
