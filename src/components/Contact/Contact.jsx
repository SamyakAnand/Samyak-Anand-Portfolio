import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { FiMail, FiMapPin, FiMessageSquare, FiPhone, FiSend, FiUser } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef(null);

  // Initialize EmailJS (Correct v4 format)
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    console.log("Initializing EmailJS v4 with key:", publicKey);

    if (!publicKey) {
      console.error("❌ Missing PUBLIC KEY");
      return;
    }

    // v4 syntax
    emailjs.init({
      publicKey: publicKey,
    });

    console.log("✔ EmailJS v4 initialized");
  }, []);

  // SEND EMAIL HANDLER
  const sendEmail = async (e) => {
    e.preventDefault();

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    console.log("====== EMAILJS DEBUG INFO ======");
    console.log("serviceID:", serviceID);
    console.log("templateID:", templateID);
    console.log("publicKey:", publicKey);
    console.log("===============================");

    try {
      const result = await emailjs.sendForm(
        serviceID,
        templateID,
        form.current,
        { publicKey: publicKey }  // REQUIRED in v4
      );

      console.log("✔ SUCCESS:", result);
      toast.success("Message sent!");
      form.current.reset();

    } catch (error) {
      console.error("❌ Email error:", error);
      toast.error("Failed to send message.");
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[7vw] md:px-[7vw] lg:px-[10vw]"
    >
      <ToastContainer />

      {/* Section Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">GET IN TOUCH</h2>
        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto">
          Have a project in mind or want to discuss opportunities? I'd love to hear from you!
        </p>
      </motion.div>

      <div className="mt-12 grid md:grid-cols-2 gap-8 items-stretch w-full max-w-5xl">
        {/* Contact Form */}
        <motion.div 
          className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-md rounded-3xl p-8 border border-gray-700 shadow-2xl"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
              <FiSend className="w-5 h-5 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold text-purple-500">Send Me a Message</h3>
          </div>
          
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label htmlFor="user_name" className="block text-gray-300 mb-2">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className="text-gray-400" />
                </div>
                <motion.input
                  type="text"
                  name="user_name"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl pl-10 px-4 py-3 bg-white/10 backdrop-blur-sm border-2 border-gray-700 transition-all duration-300 text-white placeholder-white/60 focus:outline-none focus:ring-0 focus:border-purple-500 shadow-lg shadow-purple-500/20"
                  required
                  whileFocus={{ scale: 1.02 }}
                  whileHover={{ borderColor: "#8b5cf6" }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="user_email" className="block text-gray-300 mb-2">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="text-gray-400" />
                </div>
                <motion.input
                  type="email"
                  name="user_email"
                  placeholder="Enter your email address"
                  className="w-full rounded-xl pl-10 px-4 py-3 bg-white/10 backdrop-blur-sm border-2 border-gray-700 transition-all duration-300 text-white placeholder-white/60 focus:outline-none focus:ring-0 focus:border-purple-500 shadow-lg shadow-purple-500/20"
                  required
                  whileFocus={{ scale: 1.02 }}
                  whileHover={{ borderColor: "#8b5cf6" }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMessageSquare className="text-gray-400" />
                </div>
                <motion.input
                  type="text"
                  name="subject"
                  placeholder="What is this regarding?"
                  className="w-full rounded-xl pl-10 px-4 py-3 bg-white/10 backdrop-blur-sm border-2 border-gray-700 transition-all duration-300 text-white placeholder-white/60 focus:outline-none focus:ring-0 focus:border-purple-500 shadow-lg shadow-purple-500/20"
                  required
                  whileFocus={{ scale: 1.02 }}
                  whileHover={{ borderColor: "#8b5cf6" }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
              <motion.textarea
                name="message"
                placeholder="Type your message here..."
                rows="5"
                className="w-full rounded-xl px-4 py-3 bg-white/10 backdrop-blur-sm border-2 border-gray-700 transition-all duration-300 text-white placeholder-white/60 focus:outline-none focus:ring-0 focus:border-purple-500 shadow-lg shadow-purple-500/20 resize-none"
                required
                whileFocus={{ scale: 1.02 }}
                whileHover={{ borderColor: "#8b5cf6" }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              ></motion.textarea>
            </div>
            
            <motion.button
              type="submit"
              className="w-full py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02, boxShadow: "0 15px 30px -5px rgba(139, 92, 246, 0.6), 0 10px 15px -5px rgba(139, 92, 246, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <FiSend className="w-5 h-5" />
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-md rounded-3xl p-8 border border-gray-700 shadow-2xl"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
              <FiPhone className="w-5 h-5 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold text-purple-500">Contact Information</h3>
          </div>
          
          <p className="text-sm text-white/70 mb-6">
            Prefer to reach out directly? Here's how you can get in touch with me.
          </p>

          <div className="space-y-4 mb-8">
            <motion.a
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/10 transition-all duration-300 group"
              href="mailto:samyak.g.anand@gmail.com"
              whileHover={{ x: 5 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center shadow-lg">
                <FiMail className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-purple-500">Email</div>
                <div className="text-sm text-white/60 group-hover:text-purple-500 transition-colors">
                  samyak.g.anand@gmail.com
                </div>
              </div>
            </motion.a>
            
            <motion.a
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/10 transition-all duration-300 group"
              href="tel:+919623719948"
              whileHover={{ x: 5 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center shadow-lg">
                <FiPhone className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-purple-500">Phone</div>
                <div className="text-sm text-white/60 group-hover:text-purple-500 transition-colors">
                  +91 9623719948
                </div>
              </div>
            </motion.a>
            
            <motion.a
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/10 transition-all duration-300 group"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/maps/search/?api=1&query=Hyderabad,+Telangana,+India"
              whileHover={{ x: 5 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center shadow-lg">
                <FiMapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-purple-500">Location</div>
                <div className="text-sm text-white/60 group-hover:text-purple-500 transition-colors">
                  Hyderabad, Telangana, India
                </div>
              </div>
            </motion.a>
          </div>

          <motion.div 
            className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center shadow-lg flex-shrink-0">
                <FiUser className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-purple-500 mb-2">Let's Connect</div>
                <p className="text-sm text-white/70 leading-relaxed">
                  I'm always open to discussing new opportunities, creative projects, or just having a chat about technology and innovation.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Social Links */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 mb-4 text-center">Connect with me on</p>
            <div className="flex justify-center gap-6">
              <motion.a 
                href="https://github.com/SamyakAnand" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1.0 }}
              >
                <div className="bg-gray-800/50 p-3 rounded-full border border-gray-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/samyakanand/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1.1 }}
              >
                <div className="bg-gray-800/50 p-3 rounded-full border border-gray-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;