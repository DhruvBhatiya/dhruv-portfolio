import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useEffect } from "react";

// import Home from "./screens/home/Home";
const Home = lazy(() => import("./screens/home/Home"));
const ReactJs = lazy(() => import("./screens/react/ReactJs"));
const UseRef = lazy(() => import("./screens/react/hooks/useRef/UseRef"));

const  App =()=> {


  var url = window.location.href;
  var filename = url.split("/").pop().split("#")[0].split("?")[0];
  useEffect(()=>{
    console.log("path_", filename);
  })


  // if()
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loadding...</div>}>
          {/* <NavBar /> */}
          <Routes>
            {/* <Route path="/reactjs" element={<ReactJs />} />

            <Route path="useRef" element={<UseRef />} /> */}
          
            <Route index path="/" element={<Home />} />
          </Routes>
          {/* <Footer /> */}
        </Suspense>
      </Router>
      {/* <NavBar />
        <Banner />
      <Skills />
      <Projects />
      <Contact />
        <Footer /> */}
    </div>
  );
}

export default App;
