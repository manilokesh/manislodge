import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Gallery from "../components/Gallery";
import Attractions from "../components/Attractions";
import Weather from "../components/Weather";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-white font-comfortaa">
      <Header />
      <Hero />
      <About />
      <Features />
      <Gallery />
      <Attractions />
      <Weather />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
