// src/pages/Home.jsx
import About from "./About";
import Services from "./Services";

import Contact from "./Contact";
import Work from "./Work";
import Hero from "../components/Hero";
import TestimonialsSection from "../components/TestimonialsSection";

const Home = () => {
  return (
    <div className="space-y-5 md:space-y-8 lg:space-y-10">
      <Hero />

      <About />

      {/* Pull Work a bit closer to About */}
      <div className="-mt-4 md:-mt-6">
        <Work />
      </div>

      <Services />
      <TestimonialsSection />
      <Contact />
    </div>
  );
};

export default Home;
