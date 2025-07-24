import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../../../components/SectionWrapper";

// Simplified feature icons using brand colors
const features = [
    {
        title: "Innovation",
        desc: "We leverage cutting-edge technologies and forward-thinking strategies to build solutions that redefine possibilities and drive your success.",
        icon: (
            <div className="relative flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full">
                <svg className="w-8 h-8 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            </div>
        ),
    },
    {
        title: "Strategy",
        desc: "Our progressive strategies pave the way for sustained growth and competitiveness, ensuring your business is ready for the future.",
        icon: (
            <div className="relative flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full">
                <svg className="w-8 h-8 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            </div>
        ),
    },
    {
        title: "Outcome",
        desc: "We deliver tailored solutions that drive superior outcomes. Our focus is on propelling your business forward with measurable results.",
        icon: (
            <div className="relative flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full">
                <svg className="w-8 h-8 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
            </div>
        ),
    },
];

const About = () => {
    return (
        <SectionWrapper id="about" className="py-20 lg:py-28 bg-white">
            <motion.div
                className="container mx-auto px-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                {/* Headline and Sub-headline */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Your Partner in Digital Innovation
                    </h2>
                    <p className="text-lg text-gray-600">
                        We are a passionate team of developers, designers, and strategists dedicated to building the future. We provide the tools and expertise you need to succeed in the digital age.
                    </p>
                </div>

                {/* Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="text-center p-6 rounded-lg shadow-lg bg-white border border-gray-100"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                        >
                            <div className="flex justify-center mb-5">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </SectionWrapper>
    );
};

export default About;