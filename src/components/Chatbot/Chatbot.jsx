import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiSend, FiSmile, FiUser, FiX } from "react-icons/fi";
import { experiences, projects, SkillsInfo } from "../../constants";
import "./Chatbot.css";

const PortfolioChatbot = () => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("professional"); // 'professional' or 'friendly'
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm SAM, Samyak's AI assistant. I can help you navigate this portfolio and answer questions about his work. How can I assist you today?"
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([
    "Tell me about Samyak's skills",
    "Show me his latest projects",
    "What is his experience?",
    "Why should we hire him?"
  ]);
  const messagesEndRef = useRef(null);
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(typeof window !== 'undefined');
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Update welcome message when mode changes
  useEffect(() => {
    if (messages.length === 1 && messages[0].role === "assistant") {
      const welcomeMsg = mode === "professional"
        ? "Hello! I'm SAM, Samyak's AI assistant. I can help you navigate this portfolio and answer questions about his work. How can I assist you today?"
        : "Hey there! I'm SAM! 🤖 I'm here to show you around Samyak's awesome portfolio. Ask me anything about his projects, skills, or just say hi! 🚀";

      setMessages([{ role: "assistant", content: welcomeMsg }]);
    }
  }, [mode]);

  const handleNavigation = (content) => {
    if (!isBrowser) return;
    const lower = content.toLowerCase();

    const scrollTo = (id) => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
      }
    };

    if (lower.includes("project") || lower.includes("work")) scrollTo("work");
    else if (lower.includes("skill") || lower.includes("tech")) scrollTo("skills");
    else if (lower.includes("about")) scrollTo("about");
    else if (lower.includes("contact") || lower.includes("email")) scrollTo("contact");
    else if (lower.includes("experience") || lower.includes("job")) scrollTo("experience-education");
    else if (lower.includes("education") || lower.includes("study")) scrollTo("experience-education");
    else if (lower.includes("certif")) scrollTo("certification");
    else if (lower.includes("service")) scrollTo("services");
  };

  const updateSuggestions = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes("skill") || lower.includes("tech")) {
      setSuggestions(["What are his Applied AI skills?", "Which ML tools does he use?", "Show me the live demos", "Contact Samyak"]);
    } else if (lower.includes("project") || lower.includes("work")) {
      setSuggestions(["Show me NEXUS", "What does ARGUS AI do?", "Explain SHIRO CodeMind", "See his experience"]);
    } else if (lower.includes("experience") || lower.includes("job") || lower.includes("intern") || lower.includes("softgrowth") || lower.includes("trainer")) {
      setSuggestions(["What did he do at Softgrowth?", "What did he do at Evoastra?", "Tell me about Gilbert Research", "View his resume"]);
    } else if (lower.includes("hire") || lower.includes("strength") || lower.includes("weakness")) {
      setSuggestions(["What is his biggest challenge?", "How does he handle conflict?", "Contact info", "View projects"]);
    } else {
      setSuggestions(["Tell me about Samyak's skills", "Show me his latest projects", "What is his experience?", "Why should we hire him?"]);
    }
  };

  const generateResponse = (text) => {
    const lower = text.toLowerCase();
    let response = "";

    // 1. Check for specific data queries

    // Specific Project Query (Dynamic)
    // Check if any project title (or part of it) is in the user input
    const matchedProject = projects.find(p => {
      const titleLower = p.title.toLowerCase();
      const firstWord = titleLower.split(' ')[0];
      const firstTwoWords = titleLower.split(' ').slice(0, 2).join(' ');

      // Match if:
      // 1. Input contains the full title
      // 2. Input contains the first two words (e.g. "Disease Predictor")
      // 3. Input contains the first word (e.g. "Blinkit", "Amazon") - provided it's not a common word like "the"
      // 4. Title contains the input (fuzzy match for long inputs)
      return lower.includes(titleLower) ||
        lower.includes(firstTwoWords) ||
        (firstWord.length > 3 && lower.includes(firstWord)) ||
        (lower.length > 4 && titleLower.includes(lower));
    });

    if (matchedProject) {
      if (mode === "professional") {
        response = `The ${matchedProject.title} is a key project where Samyak used ${matchedProject.tags.slice(0, 3).join(", ")}. It involves ${matchedProject.description.split('.')[0]}. You can find more details in the 'Work' section.`;
      } else {
        response = `Oh, the ${matchedProject.title}? That one is cool! 🚀 He used ${matchedProject.tags[0]} and ${matchedProject.tags[1]} to build it. It's all about ${matchedProject.description.split('.')[0].toLowerCase()}. Check it out! 💻`;
      }
      return response;
    }

    // Skills
    // Check if the input mentions any specific skill directly
    const specificSkill = SkillsInfo?.flatMap(s => s.skills)?.find(s => lower.includes(s.name.toLowerCase()));

    if (specificSkill || lower.includes("skill") || lower.includes("tech") || lower.includes("stack") || lower.includes("know")) {

      if (specificSkill) {
        if (mode === "professional") {
          response = `Samyak lists ${specificSkill.name} among his technical skills. The portfolio highlights project work and learning context where available.`;
        } else {
          response = `He has worked with ${specificSkill.name} as part of his technical toolkit. 💻`;
        }
      } else if (lower.includes("ml") || lower.includes("machine learning")) {
        if (mode === "professional") {
          response = `Samyak's machine-learning work includes Scikit-learn, TensorFlow, PyTorch, and NLP workflows. Relevant projects include Disease Predictor, Network Security, Student Performance, and Resume Analyzer.`;
        } else {
          response = `Machine Learning is his jam! 🤖 He works with TensorFlow, PyTorch, and more to build smart AI models.`;
        }
      } else if (lower.includes("skill") || lower.includes("tech") || lower.includes("stack")) {
        const topSkills = ["Python", "FastAPI", "Generative AI", "Machine Learning", "SQL", "Power BI"];
        if (mode === "professional") {
          response = `Samyak's technical toolkit includes ${topSkills.join(", ")}, alongside retrieval workflows, NLP, databases, and MLOps tools. His focus is Applied AI engineering, ML, and Python backend development.`;
        } else {
          response = `Samyak works across ${topSkills.join(", ")} and related tools for AI applications, analytics, and backend development. ✨`;
        }
      }
    }
    // Projects (General)
    else if (lower.includes("project") || lower.includes("built") || lower.includes("work")) {
      const projectNames = projects.slice(0, 3).map(p => p.title).join(", ");
      if (mode === "professional") {
        response = `Samyak has worked on impactful projects such as ${projectNames}, and many more. His work spans Applied AI, Machine Learning, and Business Intelligence. You can view them in the 'Work' section.`;
      } else {
        response = `Check out these cool projects! 🚀 He built ${projectNames} and so much more. He loves building things that solve real problems! 💻`;
      }
    }
    // Experience
    else if (lower.includes("experience") || lower.includes("job") || lower.includes("intern") || lower.includes("evoastra") || lower.includes("gilbert") || lower.includes("softgrowth") || lower.includes("trainer")) {
      const latestExp = experiences[0];
      if (lower.includes("softgrowth") || lower.includes("trainer")) {
        if (mode === "professional") {
          response = `At Softgrowth Infotech, Samyak worked as a Data Science Trainer from October 2025 to November 2026. He mentored 100+ learners and guided 5+ postgraduate project teams in Python, Data Science, Machine Learning, preprocessing, EDA, statistics, and technical project work. The engagement concluded on 9 November 2026.`;
        } else {
          response = `At Softgrowth, Samyak mentored more than 100 learners and guided 5+ postgraduate project teams in Data Science and ML. 🎓`;
        }
      } else if (lower.includes("evoastra")) {
        if (mode === "professional") {
          response = `At Evoastra Ventures, Samyak led a team of five interns, developed CARS24 listing data-collection workflows, and contributed to NLP-based recruitment and resume analysis.`;
        } else {
          response = `At Evoastra, he was a team lead! 👨‍✈️ He guided five interns and contributed to CARS24 data collection and NLP resume analysis.`;
        }
      } else if (lower.includes("gilbert")) {
        if (mode === "professional") {
          response = `At Gilbert Research Center, Samyak worked with clinical healthcare datasets and modular ingestion, validation, transformation, and model-training workflows, using MLflow and DagsHub for experiment tracking.`;
        } else {
          response = `At Gilbert Research, he worked on clinical datasets and ML workflows. 🏥`;
        }
      } else {
        if (mode === "professional") {
          response = `Samyak most recently worked as a ${latestExp.role} at ${latestExp.company}, where he mentored 100+ learners and guided 5+ postgraduate project teams.`;
        } else {
          response = `He recently worked as a ${latestExp.role} at ${latestExp.company}! 💼 He mentored learners and guided postgraduate project teams. ✨`;
        }
      }
    }
    // Resume / CV
    else if (lower.includes("resume") || lower.includes("cv")) {
      if (mode === "professional") {
        response = "You can view and download Samyak's resume from the 'About' section or by clicking the 'Download CV' button on the main page.";
      } else {
        response = "Want to see the official paper? 📄 You can grab his resume from the 'About' section. It's got all the details! 📝";
      }
    }
    // Contact
    else if (lower.includes("contact") || lower.includes("email")) {
      if (mode === "professional") {
        response = "You can reach Samyak via the contact form below or connect with him on LinkedIn. He is open to discussing new opportunities.";
      } else {
        response = "Hit him up! 📩 You can send a message through the contact form or say hi on LinkedIn. He'd love to hear from you! 👋";
      }
    }

    // --- HR / Behavioral Questions ---

    // Why Hire
    else if (lower.includes("hire") || lower.includes("why you")) {
      if (mode === "professional") {
        response = "Samyak combines project-led Applied AI work, Python backend development, machine-learning workflows, and analytics. His documented experience includes mentoring 100+ learners, guiding 5+ postgraduate teams, and leading five interns at Evoastra. His projects emphasize traceability and clear implementation boundaries.";
      } else {
        response = "Samyak's profile combines applied project work, Python backend development, machine-learning workflows, analytics, and technical mentorship. The portfolio links to working demos and source repositories so you can review the work directly.";
      }
    }
    // Strengths
    else if (lower.includes("strength") || lower.includes("good at")) {
      if (mode === "professional") {
        response = "Samyak's documented strengths include Python and API development, machine-learning and NLP workflows, data analytics, source-grounded retrieval, and technical mentorship.";
      } else {
        response = "His documented strengths are Python and API development, ML/NLP workflows, retrieval-based applications, BI reporting, and technical mentorship. 🚀";
      }
    }
    // Weaknesses
    else if (lower.includes("weakness") || lower.includes("bad at")) {
      if (mode === "professional") {
        response = "The portfolio does not publish a formal weakness statement. Samyak should answer this personally in an interview; the assistant will not invent a personality trait.";
      } else {
        response = "The profile does not list a personal weakness, so I won't make one up. That's a better question for Samyak himself. 🙂";
      }
    }
    // Challenge
    else if (lower.includes("challenge") || lower.includes("difficult") || lower.includes("problem")) {
      if (mode === "professional") {
        response = "A documented challenge was coordinating a team of five interns at Evoastra while contributing to CARS24 data collection and an NLP resume-analysis workflow. The resume records the team-lead role and project scope, but does not publish a delivery-time or performance metric.";
      } else {
        response = "Leading five interns at Evoastra was a meaningful teamwork responsibility. He coordinated the team while contributing to data collection and NLP resume analysis. 🏆";
      }
    }
    // Teamwork / Conflict
    else if (lower.includes("team") || lower.includes("conflict")) {
      if (mode === "professional") {
        response = "Samyak believes in open communication and collaborative problem-solving. In team settings, he actively listens to diverse viewpoints and focuses on finding data-driven solutions that benefit the project and the team.";
      } else {
        response = "Teamwork makes the dream work! 🤝 Samyak is all about good vibes and collaboration. He listens to everyone and helps the team find the best solution together! ✨";
      }
    }

    // General / Fallback
    else if (lower.includes("hello") || lower.includes("hi")) {
      response = mode === "professional"
        ? "Hello! How can I help you explore Samyak's portfolio today?"
        : "Hi there! 👋 Ready to explore? Ask me anything!";
    }
    else {
      response = mode === "professional"
        ? "I can provide information about Samyak's projects, skills, experience, and education. I can also answer questions about his strengths and work style. What would you like to know?"
        : "I'm mostly an expert on Samyak's work! 😅 Ask me about his projects, skills, or experience and I'll spill the beans! 🫘";
    }

    return response;
  };

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    const userMsg = { role: "user", content: text };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    // Navigate if applicable
    handleNavigation(text);

    // Update suggestions based on context
    updateSuggestions(text);

    // Simulate delay
    setTimeout(() => {
      const replyText = generateResponse(text);
      setMessages(prev => [...prev, { role: "assistant", content: replyText }]);
      setIsLoading(false);
    }, 600);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSendMessage(input);
  };

  if (!isBrowser) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[500px] bg-tertiary/90 backdrop-blur-xl border border-white/10 dark:border-white/10 border-black/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-[#8245ec] to-[#a855f7] flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                  🤖
                </div>
                <div>
                  <h3 className="font-bold text-white">SAM</h3>
                  <div className="flex items-center gap-1 text-xs text-white/80">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Online
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {/* Mode Toggle */}
                <button
                  onClick={() => setMode(mode === "professional" ? "friendly" : "professional")}
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  title={`Switch to ${mode === "professional" ? "Friendly" : "Professional"} Mode`}
                >
                  {mode === "professional" ? <FiUser size={18} className="text-white" /> : <FiSmile size={18} className="text-white" />}
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors text-white"
                >
                  <FiX size={20} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${msg.role === "user"
                      ? "bg-[#8245ec] text-white rounded-br-none"
                      : "bg-white-100/10 dark:bg-white/10 text-secondary rounded-bl-none border border-black/5 dark:border-white/5"
                      }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white-100/10 dark:bg-white/10 p-3 rounded-2xl rounded-bl-none flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions - Always Visible */}
            <div className="px-4 py-2 flex gap-2 overflow-x-auto scrollbar-hide">
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  onClick={() => {
                    const text = s;
                    if (!text.trim()) return;

                    const userMsg = { role: "user", content: text };
                    setMessages(prev => [...prev, userMsg]);
                    setInput("");
                    setIsLoading(true);

                    // Navigate if applicable
                    handleNavigation(text);

                    // Update suggestions based on context
                    updateSuggestions(text);

                    // Simulate delay
                    setTimeout(() => {
                      const replyText = generateResponse(text);
                      setMessages(prev => [...prev, { role: "assistant", content: replyText }]);
                      setIsLoading(false);
                    }, 600);
                  }}
                  className="whitespace-nowrap px-3 py-1 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 rounded-full text-xs text-secondary transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 bg-primary/50 border-t border-black/10 dark:border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={mode === "professional" ? "Ask about Samyak's work..." : "Say hi to Sam! 👋"}
                  className="flex-1 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full px-4 py-2 text-white-100 focus:outline-none focus:border-[#8245ec] transition-colors placeholder-gray-500"
                />
                <button
                  onClick={() => handleSendMessage(input)}
                  disabled={!input.trim()}
                  className="p-3 bg-[#8245ec] hover:bg-[#6d39c3] text-white rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FiSend size={18} />
                </button>
              </div>
              <div className="text-center mt-2">
                <span className="text-[10px] text-gray-500">
                  Mode: <span className={mode === "professional" ? "text-blue-400" : "text-yellow-400"}>{mode.charAt(0).toUpperCase() + mode.slice(1)}</span>
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`h-14 bg-gradient-to-r from-[#8245ec] to-[#a855f7] rounded-full shadow-[0_0_20px_rgba(130,69,236,0.5)] flex items-center justify-center text-white relative group transition-all duration-300 ${open ? "w-14" : "w-auto px-6 gap-2"}`}
      >
        <div className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity" />
        {open ? (
          <FiX size={24} />
        ) : (
          <>
            <span className="text-2xl">🤖</span>
            <span className="font-bold text-lg whitespace-nowrap">SAM</span>
          </>
        )}
      </motion.button>
    </div>
  );
};

export default PortfolioChatbot;