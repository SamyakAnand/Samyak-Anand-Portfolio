import React from "react";
import About from "./components/About/About";
import Certification from "./components/Certification/Certification";
import PortfolioChatbot from "./components/Chatbot/Chatbot";
import Contact from "./components/Contact/Contact";
import ExperienceEducation from "./components/ExperienceEducation/ExperienceEducation";
import Footer from "./components/Footer/Footer";
import LiveProjectHighlights from "./components/LiveProjectHighlights/LiveProjectHighlights";
import Navbar from "./components/Navbar/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import Tutorial from "./components/Tutorial/Tutorial";
import Work from "./components/Work/Work";

// Class-based Error Boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error(`Error in ${this.props.componentName}:`, error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 m-4 bg-red-900/20 border border-red-500/50 rounded-lg text-center">
          <h3 className="text-red-400 font-bold mb-2">Error in {this.props.componentName}</h3>
          <p className="text-gray-400 text-sm mb-4">Something went wrong loading this component.</p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded text-sm transition-colors"
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

const App = () => {
  return (
    <div className="bg-primary min-h-screen relative">
      <ScrollProgress />
      <Navbar />
      <div className="pt-20">
        <div className="relative">
          <Tutorial />

          <ErrorBoundary componentName="About">
            <About />
          </ErrorBoundary>

          <ErrorBoundary componentName="Skills">
            <Skills />
          </ErrorBoundary>

          <ErrorBoundary componentName="ExperienceEducation">
            <ExperienceEducation />
          </ErrorBoundary>

          <ErrorBoundary componentName="Services">
            <Services />
          </ErrorBoundary>

          <ErrorBoundary componentName="LiveProjectHighlights">
            <LiveProjectHighlights />
          </ErrorBoundary>

          <ErrorBoundary componentName="Work">
            <Work />
          </ErrorBoundary>

          <ErrorBoundary componentName="Certification">
            <Certification />
          </ErrorBoundary>

          <ErrorBoundary componentName="Contact">
            <Contact />
          </ErrorBoundary>

          <ErrorBoundary componentName="Footer">
            <Footer />
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