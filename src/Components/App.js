import React from "react";
import './App.css';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Main from "./Pages/Main";
import Navigation from "./Pages/Navigation";
import Education from "./Pages/Education";
import Skills from "./Pages/Skills";
import Profiles from "./Pages/Profiles";
import Contact from "./Pages/Contact";

const App = () => {
    return (
      <>
        <Navigation />
        <Main />
        <Home />
        <About />
        <Education />
        <Skills/>
        <Profiles/>
        <Contact/>
        <div className="footer-box">
            <div className="footer-div">
              <span>&#169;</span> Copyright{"  <"}Vibha Mishra{"> 2022"}
            </div>
        </div>
      </>
    );
}
export default App;