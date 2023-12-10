import React from "react";
import { About,Skills, Testimonials, Projects, Header, Footer } from "./containers";
import { NavBar } from "./components";
import "./App.scss";
import Test from "./containers/Test";

function App() {
  return (
    <div className="app">
       <NavBar/>
      <Header/>
      <About/>
      <Test/>
      <Skills/>
      <Projects/>
      <Footer/>
      <Testimonials/>

    </div>

  ) 
}

export default App;
