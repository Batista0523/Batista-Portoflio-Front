import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Projects from "./containers/Projects/Projects";
import Header from "./containers/Header/Header";
import About from "./containers/About/About";
import Skills from "./containers/Skills/Skills";
import Contacts from "./containers/Contact/Contact";

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contacts/>}/>
          <Route
            path="/"
            element={
              <>
                <Header />
                <About />
                <Skills/>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
