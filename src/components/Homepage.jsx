import React from "react";

import { About, Footer, Skills, Work, Profile, Experience } from "../container";
import { Navbar } from ".";

const Homepage = () => {
  return (
    <div className="app">
      <Navbar />
      <Profile />
      <About />
      <Work />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
};

export default Homepage;
