import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import ExperienceEducation from "./components/ExperienceEducation/ExperienceEducation";
import Services from "./components/Services/Services";
import Work from "./components/Work/Work";
import Certification from "./components/Certification/Certification";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import PortfolioChatbot from "./components/Chatbot/Chatbot";
import LiveProjectHighlights from "./components/LiveProjectHighlights/LiveProjectHighlights";


const App = () => {
  return (
    <div className="bg-[#050414] min-h-screen">
      <Navbar />
      <div className="pt-20">
        <div
          className="absolute inset-0 
                     bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),
                          linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]
                     bg-[size:14px_24px]
                     [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        />
        <div className="relative">
          <About />
          <Skills />
          <ExperienceEducation />
          <Services />
          <LiveProjectHighlights />
          <Work />
          <Certification />
          <Contact />
          <Footer />
          <PortfolioChatbot />
        </div>
      </div>
    </div>
  );
};

export default App;