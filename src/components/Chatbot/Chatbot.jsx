import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Chatbot.css"; // Import the CSS file

const PortfolioChatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      role: "assistant", 
      content: "👋 Hey there! I'm SAM — Samyak Anand's AI twin. I'm here to help you explore his portfolio and answer questions about his work! What would you like to know?" 
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const messagesEndRef = useRef(null);
  const suggestionsRef = useRef(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Set initial suggestions
  useEffect(() => {
    if (messages.length === 1) {
      setSuggestions([
        "What projects has SAM worked on?",
        "Tell me about SAM's skills",
        "Show me his live projects"
      ]);
    }
  }, [messages.length]);

  // Generate context-aware suggestions based on last user message
  useEffect(() => {
    if (messages.length > 1 && messages[messages.length - 2].role === "user") {
      const lastUserMessage = messages[messages.length - 2].content.toLowerCase();
      
      // Generate multiple suggestions based on the last user message
      let newSuggestions = [];
      
      if (lastUserMessage.includes("project") || lastUserMessage.includes("work")) {
        newSuggestions = [
          "Show me details about his ML projects",
          "What technologies did he use in his projects?",
          "Can you tell me about his Power BI dashboards?",
          "What was his most challenging project?",
          "Show me his live projects"
        ];
      } else if (lastUserMessage.includes("skill") || lastUserMessage.includes("technology")) {
        newSuggestions = [
          "What programming languages does he know?",
          "Tell me about his cloud experience",
          "What ML frameworks is he proficient in?",
          "Does he have experience with MLOps tools?"
        ];
      } else if (lastUserMessage.includes("certification") || lastUserMessage.includes("course")) {
        newSuggestions = [
          "What Kaggle certificates does he have?",
          "Tell me about his Naresh IT course",
          "Does he have any cloud certifications?",
          "What about his university certifications?"
        ];
      } else if (lastUserMessage.includes("experience") || lastUserMessage.includes("internship")) {
        newSuggestions = [
          "What did he do at Evoastra?",
          "Tell me about his Gilbert Research Center internship",
          "What were his key achievements at Evoastra?",
          "How long was his internship at Gilbert Research Center?"
        ];
      } else if (lastUserMessage.includes("education") || lastUserMessage.includes("study")) {
        newSuggestions = [
          "What's his highest qualification?",
          "Where did he complete his diploma?",
          "What was his university major?",
          "Did he have any academic achievements?"
        ];
      } else if (lastUserMessage.includes("contact") || lastUserMessage.includes("hire")) {
        newSuggestions = [
          "What's his email address?",
          "How can I connect with him on LinkedIn?",
          "Does he have a phone number I can reach?",
          "Where is he located?"
        ];
      } else if (lastUserMessage.includes("live") || lastUserMessage.includes("deploy")) {
        newSuggestions = [
          "Show me his live projects",
          "What websites has he deployed?",
          "Does he have any portfolio websites?",
          "Show me his coming soon projects"
        ];
      } else {
        // Default suggestions if no specific context
        newSuggestions = [
          "What makes him stand out as a data scientist?",
          "What are his career goals?",
          "How can I hire him for a project?",
          "What's his GitHub profile?"
        ];
      }
      
      setSuggestions(newSuggestions);
    }
  }, [messages]);

  const handleNavigation = (content) => {
    const lower = content.toLowerCase();
    console.log("Chatbot navigation triggered with content:", content);
    
    // Helper function to scroll to element with better reliability
    const scrollToElement = (elementId) => {
      console.log(`Attempting to scroll to element: ${elementId}`);
      
      // Try multiple times with increasing delays to ensure element is available
      let attempts = 0;
      const maxAttempts = 10;
      
      const tryScroll = () => {
        const element = document.getElementById(elementId);
        attempts++;
        
        if (element) {
          console.log(`Found element: ${elementId}, scrolling...`);
          // Scroll with offset to account for fixed navbar
          const navbarHeight = 80; // Approximate navbar height
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
          
          // Also try the native scrollIntoView as fallback
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
        } else if (attempts < maxAttempts) {
          console.log(`Element ${elementId} not found, attempt ${attempts}/${maxAttempts}. Retrying in 100ms...`);
          setTimeout(tryScroll, 100);
        } else {
          console.log(`Element ${elementId} not found after ${maxAttempts} attempts`);
        }
      };
      
      // Start the first attempt
      tryScroll();
    };
    
    // Navigation actions with more specific keyword matching
    if (lower.includes("project") || lower.includes("work") || lower.includes("portfolio")) {
      console.log("Navigating to work section");
      scrollToElement("work");
      return;
    }
    
    if (lower.includes("contact") || lower.includes("get in touch") || lower.includes("reach")) {
      console.log("Navigating to contact section");
      scrollToElement("contact");
      return;
    }
    
    if (lower.includes("certification") || lower.includes("certificate") || lower.includes("kaggle") || lower.includes("naresh")) {
      console.log("Navigating to certification section");
      scrollToElement("certification");
      return;
    }
    
    // Handle education requests - navigate to section AND switch to education tab
    if (lower.includes("education") || lower.includes("study") || lower.includes("school") || lower.includes("college") || lower.includes("university") || lower.includes("degree") || lower.includes("diploma")) {
      console.log("Navigating to experience-education section and switching to education tab");
      scrollToElement("experience-education");
      
      // Switch to education tab after a delay to ensure section is visible
      setTimeout(() => {
        const educationTabButton = document.querySelector('button[onClick*="education"]');
        if (educationTabButton) {
          educationTabButton.click();
          console.log("Switched to education tab");
        } else {
          console.log("Education tab button not found");
        }
      }, 500);
      return;
    }
    
    // Handle experience requests - navigate to section AND switch to experience tab
    if (lower.includes("background") || lower.includes("experience") || lower.includes("internship") || lower.includes("work experience") || lower.includes("job") || lower.includes("career")) {
      console.log("Navigating to experience-education section and switching to experience tab");
      scrollToElement("experience-education");
      
      // Switch to experience tab after a delay to ensure section is visible
      setTimeout(() => {
        const experienceTabButton = document.querySelector('button[onClick*="experience"]');
        if (experienceTabButton) {
          experienceTabButton.click();
          console.log("Switched to experience tab");
        } else {
          console.log("Experience tab button not found");
        }
      }, 500);
      return;
    }
    
    if (lower.includes("skill") || lower.includes("abilities") || lower.includes("expertise") || lower.includes("competenc") || lower.includes("programming") || lower.includes("language") || lower.includes("tool")) {
      console.log("Navigating to skills section");
      scrollToElement("skills");
      return;
    }
    
    if (lower.includes("about") || lower.includes("introduction") || lower.includes("hi") || lower.includes("hello") || lower.includes("who are you")) {
      console.log("Navigating to about section");
      scrollToElement("about");
      return;
    }
    
    if (lower.includes("service") || lower.includes("offer") || lower.includes("solution") || lower.includes("website") || lower.includes("ai") || lower.includes("ml") || lower.includes("machine learning") || lower.includes("data science")) {
      console.log("Navigating to services section");
      scrollToElement("services");
      return;
    }
    
    // Resume download
    if (lower.includes("cv") || lower.includes("resume") || lower.includes("download")) {
      console.log("Opening CV download link");
      setTimeout(() => {
        window.open(
          import.meta.env.VITE_RESUME_DOWNLOAD_URL,
          "_blank"
        );
      }, 300); // Slight delay to allow any scrolling to complete
      return;
    }
  };

  const getResponse = (messageText) => {
    const lower = messageText.toLowerCase();
    
    // Project-related responses
    if (lower.includes("project")) {
      if (lower.includes("power bi") || lower.includes("dashboard")) {
        return "I've worked on several Power BI projects including Financial Risk Analytics, Credit Card Analytics, Blinkit Sales & Inventory Analytics, Amazon Prime Video Dashboard, Netflix Dashboard, and Insurance Data Analysis. Each dashboard provides deep insights into different business domains with interactive visualizations.";
      } else if (lower.includes("web scrap") || lower.includes("car24")) {
        return "I built a web scraping pipeline for Car24 Hyderabad that extracts car listing data and structures it for analysis. The project uses Python, BeautifulSoup, and pandas for data processing.";
      } else if (lower.includes("ml") || lower.includes("machine learning") || lower.includes("deep learning")) {
        return "My ML projects include a Disease Predictor (multi-disease system), Customer Churn Prediction with Deep Learning, Student Performance Indicator, and Network Security ML Pipeline. These projects showcase various ML techniques from classification to deep learning.";
      } else if (lower.includes("live") || lower.includes("deploy")) {
        return "I have several live projects including Diksha Anand's Portfolio, Sonali Makeover Artistry website, Aurum Delights (coming soon), and Horeka (coming soon). You can view them in the Live Projects section of my portfolio.";
      } else {
        return "I've worked on 16+ projects across data science, machine learning, and business intelligence. My key projects include Power BI dashboards, ML models, web scraping pipelines, and NLP applications. Would you like to know about a specific project?";
      }
    }
    
    // Skill-related responses
    if (lower.includes("skill") || lower.includes("technology")) {
      if (lower.includes("program") || lower.includes("language")) {
        return "I'm proficient in Python, SQL, R, Java, and C. Python is my primary language for data science and ML work.";
      } else if (lower.includes("ml") || lower.includes("ai")) {
        return "I specialize in Machine Learning with Scikit-learn, Deep Learning with TensorFlow/Keras, and NLP with NLTK. I also have experience with MLOps tools like MLflow and Docker.";
      } else if (lower.includes("bi") || lower.includes("power bi") || lower.includes("dashboard")) {
        return "I'm skilled in Power BI, DAX, and Power Query for creating interactive dashboards. I've built end-to-end analytics solutions for various business domains.";
      } else {
        return "My key skills include Data Science, Machine Learning, Deep Learning, NLP, Power BI, Python, SQL, and Cloud technologies. I'm also experienced in MLOps and web development with Flask/Streamlit.";
      }
    }
    
    // Experience-related responses
    if (lower.includes("experience") || lower.includes("internship")) {
      if (lower.includes("evoastra")) {
        return "At Evoastra, I worked as a Data Science Intern where I led a team of 5 interns to build end-to-end Machine Learning workflows using Python, SQL, scikit-learn, and Power BI. I developed a CARS24 web-scraping & analytics pipeline and created an AI-powered resume parser (NLP + Flask).";
      } else if (lower.includes("gilbert")) {
        return "At Gilbert Research Center, I worked as a Data Science & ML Intern where I engineered clinical ML models and modular pipelines with drift detection and API deployment using Flask, MLflow, and DAGsHub. I applied advanced statistical methods to improve accuracy and interpretability of clinical data insights.";
      } else {
        return "I have experience as a Data Science Intern at Evoastra and as a Data Science & ML Intern at Gilbert Research Center. Both roles involved working with real-world data to drive business insights and develop ML solutions.";
      }
    }
    
    // Education-related responses
    if (lower.includes("education") || lower.includes("study")) {
      if (lower.includes("diploma")) {
        return "I completed my Diploma in Computer Science at Bajaj College of Polytechnic with a strong foundation in programming, database management, and computer networks.";
      } else {
        return "I'm currently pursuing a Bachelor of Technology in Computer Science and Engineering with specialization in Artificial Intelligence and Machine Learning at Ballarpur Institute of Technology.";
      }
    }
    
    // Certification-related responses
    if (lower.includes("certification") || lower.includes("course")) {
      if (lower.includes("kaggle")) {
        return "I have multiple Kaggle certifications including Data Science with Python, Machine Learning, Data Visualization, and Pandas. These certifications validate my skills in data analysis and machine learning.";
      } else {
        return "I have several certifications from Kaggle in Data Science, Machine Learning, and Data Visualization. I also completed a Data Analysis course from Naresh i Technologies.";
      }
    }
    
    // Live projects related responses
    if (lower.includes("live") || lower.includes("deploy")) {
      return "I have several live projects including Diksha Anand's Portfolio (https://dikshaanand.vercel.app/), Sonali Makeover Artistry website (https://sonali-makeover-artistry.vercel.app/), Aurum Delights (https://aurum-delights.vercel.app/ - coming soon), and Horeka (coming soon). You can view them in the Live Projects section of my portfolio.";
    }
    
    // Contact-related responses
    if (lower.includes("contact") || lower.includes("hire") || lower.includes("email")) {
      return "You can reach me at samyakanand2003@gmail.com or connect with me on LinkedIn. I'm open to opportunities in Data Science, Machine Learning, and Business Intelligence roles.";
    }
    
    // Resume-related responses
    if (lower.includes("cv") || lower.includes("resume")) {
      return "You can download my resume using the link in the contact section. It contains detailed information about my experience, skills, and projects.";
    }
    
    // Default responses
    if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
      return "Hello there! 👋 I'm SAM, Samyak Anand's AI twin. I'm here to help you explore his portfolio. What would you like to know about his work?";
    }
    
    if (lower.includes("thank")) {
      return "You're welcome! 😊 Is there anything else you'd like to know about Samyak's work or projects?";
    }
    
    // Fallback response
    return "I'm SAM, Samyak Anand's AI assistant. I can help you learn about his projects, skills, experience, and education. Try asking about his Power BI dashboards, ML projects, or certifications!";
  };

  const sendMessage = async (messageText = input) => {
    if (!messageText.trim() || isLoading) return;

    const userMessage = { role: "user", content: messageText };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    console.log("Sending message:", messageText);
    // Handle navigation immediately
    handleNavigation(messageText);

    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const botReply = getResponse(messageText);
      
      setMessages([...updatedMessages, { role: "assistant", content: botReply }]);
    } catch (err) {
      console.error("Chatbot error:", err);
      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: "⚠️ I'm having trouble responding right now. Please try again later!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    sendMessage(suggestion);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="chatbot-wrapper">
      {/* Floating Button */}
      <div
        onClick={() => setOpen(!open)}
        className="chatbot-icon bg-gradient-to-r from-purple-600 via-purple-700 to-pink-500 p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group relative overflow-hidden cursor-pointer"
      >
        <div className="flex items-center relative z-10">
          <span className="text-white text-lg mr-1">🤖</span>
          <span className="text-white text-lg font-bold">SAM</span>
        </div>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div 
            className="chatbot-window bg-gradient-to-br from-[#1a0b2e]/95 to-[#0d081f]/95 backdrop-blur-2xl border border-white/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-4 text-white bg-gradient-to-r from-purple-600 via-purple-700 to-pink-500 rounded-t-2xl font-semibold flex justify-between items-center relative overflow-hidden">
              <div className="flex items-center relative z-10">
                <motion.span 
                  className="text-2xl mr-2"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  🤖
                </motion.span>
                <span>SAM</span>
              </div>
              <button 
                onClick={() => setOpen(false)}
                className="text-white hover:text-gray-200 transition-colors relative z-10 hover:bg-white/20 p-1 rounded-full"
              >
                ✕
              </button>
            </div>

            {/* Chat Log */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-hide">
              <AnimatePresence>
                {messages.map((m, i) => (
                  <motion.div
                    key={i}
                    className={`p-3 rounded-xl text-sm max-w-[85%] ${
                      m.role === "user"
                        ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white self-end ml-auto"
                        : "bg-gradient-to-br from-gray-700/50 to-gray-800/50 text-white border border-white/10"
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {m.content}
                  </motion.div>
                ))}
              </AnimatePresence>
              {isLoading && (
                <motion.div 
                  className="p-3 rounded-xl text-sm bg-gradient-to-br from-gray-700/50 to-gray-800/50 text-white border border-white/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            <div 
              ref={suggestionsRef}
              className="px-4 pb-2 flex flex-col gap-2 max-h-32 overflow-y-auto"
            >
              <AnimatePresence>
                {suggestions.slice(0, 2).map((suggestion, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    disabled={isLoading}
                    className="px-3 py-2 text-sm bg-gradient-to-r from-purple-600/80 to-blue-500/80 text-white rounded-full hover:scale-[1.02] transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm border border-white/20 text-left shadow-lg hover:shadow-xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    💡 {suggestion}
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Chat with SAM..."
                  className="flex-1 bg-[#2d1a4d]/50 border border-white/20 rounded-xl px-3 py-2 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-sm"
                  disabled={isLoading}
                />
                <motion.button
                  onClick={() => sendMessage()}
                  disabled={isLoading}
                  className={`px-4 py-2 rounded-xl transition ${
                    isLoading
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                  }`}
                  whileHover={{ scale: isLoading ? 1 : 1.05 }}
                  whileTap={{ scale: isLoading ? 1 : 0.95 }}
                >
                  <span className="text-white">➤</span>
                </motion.button>
              </div>
              <div className="text-xs text-purple-400 text-center mt-2 opacity-60">
                AI assistant by Samyak Anand ©
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioChatbot;