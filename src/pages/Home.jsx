// src/pages/Home.jsx
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Work from "./Work";
import Hero from "../components/Hero";
import TestimonialsSection from "../components/TestimonialsSection";
const Home = () => {
  return (
    <>
      <Hero />

      <About />

      <Work />
      <Services />
      <TestimonialsSection />
      <Contact />
    </>
  );
};

export default Home;
