import React from "react";
import { motion } from "framer-motion";

const SectionWrapper = (Component, idName) =>
    function HOC() {
        return (
            <motion.section
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    show: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.75,
                        },
                    },
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="max-w-7xl mx-auto relative z-0"
            >
                <span className="hash-span" id={idName}>
                    &nbsp;
                </span>

                <Component />
            </motion.section>
        );
    };

export default SectionWrapper;
