import React from "react";
import { About,Skills, Testimonials, Projects, Header, Footer } from "./containers";
import { NavBar } from "./components";
import "./App.scss";

function App() {
  return (
    <div className="app">
       <NavBar/>
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <Footer/>
      <Testimonials/>

    </div>

  ) 
}

export default App;
