import React from "react";
import { Banner } from "../../components/Banner";
import { Contact } from "../../components/Contact";
import { Footer } from "../../components/Footer";
import { NavBar } from "../../components/NavBar";
import { Projects } from "../../components/Projects";
import { Skills } from "../../components/Skills";


const Home = () => {
  return (
    <div className="homePage">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
