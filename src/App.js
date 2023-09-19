import React from "react";
import "./App.scss";
import About from "./container/About/About";
import Header from "./container/Header/Header";
import Skills from "./container/Skills/Skills";
import Footer from "./container/Footer/Footer";
//import Testimonials from "./container/Testimonial/Testimonials";
import Work from "./container/Work/Work";
import { Navbar } from "./components";
export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      {/*<Testimonials />*/}
      <Footer />
    </div>
  );
}
