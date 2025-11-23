import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import "./Tutorial.css"; // Import custom styles
import { useEffect } from "react";

const Tutorial = () => {
    useEffect(() => {
        // Check if tutorial has already been shown
        const hasSeenTutorial = localStorage.getItem("hasSeenPortfolioTutorial");

        if (!hasSeenTutorial) {
            const driverObj = driver({
                showProgress: true,
                animate: true,
                allowClose: true,
                popoverClass: 'driverjs-theme', // Apply custom class
                doneBtnText: "Let's Go! 🚀",
                closeBtnText: "Skip",
                nextBtnText: "Next ➡️",
                prevBtnText: "⬅️ Back",
                steps: [
                    {
                        element: "#about",
                        popover: {
                            title: "Hi! I'm Samyak 👋",
                            description: "Welcome to my portfolio. Here's a quick tour of my work and skills.",
                            side: "bottom",
                            align: "start",
                        },
                    },
                    {
                        element: "#skills",
                        popover: {
                            title: "My Tech Stack 🛠️",
                            description: "I specialize in Python, React, Machine Learning, and Data Science.",
                            side: "top",
                            align: "start",
                        },
                    },
                    {
                        element: "#live-projects",
                        popover: {
                            title: "Deployed Apps 🚀",
                            description: "Interact with my live dashboards and web applications here.",
                            side: "top",
                            align: "start",
                        },
                    },
                    {
                        element: "#work",
                        popover: {
                            title: "Project Gallery 📂",
                            description: "Filter projects by category (ML, NLP, etc.) and click to view code & details.",
                            side: "top",
                            align: "start",
                        },
                    },
                    {
                        element: ".fixed.bottom-6.right-6", // Target the Chatbot container
                        popover: {
                            title: "Ask SAM 🤖",
                            description: "My AI assistant can instantly answer questions about my experience and skills.",
                            side: "left",
                            align: "end",
                        },
                    },
                ],
                onDestroyed: () => {
                    // Save to localStorage so it doesn't show again
                    localStorage.setItem("hasSeenPortfolioTutorial", "true");
                },
            });

            // Small delay to ensure DOM is ready
            setTimeout(() => {
                driverObj.drive();
            }, 1500);
        }
    }, []);

    return null; // This component doesn't render anything visible itself
};

export default Tutorial;
