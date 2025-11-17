import React, { useState, useEffect } from "react";
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
import { motion } from "framer-motion";

// Simple error boundary component
const ErrorBoundary = ({ children, componentName }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error) => {
      console.error(`Error in ${componentName}:`, error);
      setHasError(true);
    };

    // Add error listener
    window.addEventListener('error', errorHandler);
    
    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, [componentName]);

  if (hasError) {
    return (
      <div className="bg-[#050414] min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Component Error</h2>
          <p className="text-gray-400 mb-6">Failed to load {componentName} component.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  return children;
};

const App = () => {
  const [appError, setAppError] = useState(null);

  // Error boundary effect
  useEffect(() => {
    const handleError = (error) => {
      console.error("App error:", error);
      setAppError(error);
    };

    window.addEventListener("error", handleError);
    return () => window.removeEventListener("error", handleError);
  }, []);

  // If there's an error, show a fallback UI
  if (appError) {
    return (
      <div className="bg-[#050414] min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Something went wrong</h1>
          <p className="text-gray-400 mb-6">We're sorry, but something went wrong. Please try refreshing the page.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#050414] min-h-screen">
      <Navbar />
      <div className="pt-20">
        {/* Background grid pattern */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        />
        <div className="relative">
          <ErrorBoundary componentName="About">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <About />
            </motion.div>
          </ErrorBoundary>
          
          <ErrorBoundary componentName="Skills">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Skills />
            </motion.div>
          </ErrorBoundary>
          
          <ErrorBoundary componentName="ExperienceEducation">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <ExperienceEducation />
            </motion.div>
          </ErrorBoundary>
          
          <ErrorBoundary componentName="Services">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Services />
            </motion.div>
          </ErrorBoundary>
          
          <ErrorBoundary componentName="LiveProjectHighlights">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <LiveProjectHighlights />
            </motion.div>
          </ErrorBoundary>
          
          <ErrorBoundary componentName="Work">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Work />
            </motion.div>
          </ErrorBoundary>
          
          <ErrorBoundary componentName="Certification">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Certification />
            </motion.div>
          </ErrorBoundary>
          
          <ErrorBoundary componentName="Contact">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Contact />
            </motion.div>
          </ErrorBoundary>
          
          <ErrorBoundary componentName="Footer">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Footer />
            </motion.div>
          </ErrorBoundary>
          
          <ErrorBoundary componentName="Chatbot">
            <PortfolioChatbot />
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
};

export default App;