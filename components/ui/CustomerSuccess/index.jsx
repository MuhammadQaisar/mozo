import { useState } from "react";
import SectionWrapper from "../../SectionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { montserrat } from "../font";

const successStories = [
    {
        name: "Alhawar",
        title: "Operations Director, ALKASSIB",
        avatar: "/Alhawar.jpg",
        feedback: "Working with Mozo was a game-changer for our business. Their expertise in AI and automation helped us streamline operations and reduce costs by 40% while improving customer satisfaction.",
        project: "AI Automation System"
    },
    {
        name: "Tim",
        title: "CEO & Founder, Taus Enterprises",
        avatar: "/Tim.jpeg",
        feedback: "The team at Mozo Technologies delivered a robust, scalable solution that perfectly aligned with our business goals. Their attention to detail and commitment to quality is unmatched.",
        project: "Enterprise Web App"
    },
    {
        name: "Rashida",
        title: "Founder & CEO, MUXILITE",
        avatar: "/rashida.jpeg",
        feedback: "Mozo Technologies transformed our digital presence with their innovative approach. Their team delivered exceptional results that exceeded our expectations, boosting our conversion rates by 300%.",
        project: "E-commerce Platform"
    }
];

const CustomerSuccess = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prev) => (prev === successStories.length - 1 ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? successStories.length - 1 : prev - 1));
    };

    const activeStory = successStories[activeIndex];

    return (
        <SectionWrapper className={`py-20 md:py-28 bg-gray-50 ${montserrat.className}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
                        Customer <span className="  text-[#F06A6A]">Success Stories</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        See how we've helped businesses like yours achieve their goals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Feedback */}
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.5 }}
                            >
                                <blockquote className="text-lg md:text-2xl font-sm text-gray-700 leading-relaxed mb-6 italic">
                                    “{activeStory.feedback}”
                                </blockquote>
                                <div className="font-bold text-gray-900">{activeStory.name}</div>
                                <div className="text-gray-600">{activeStory.title}</div>
                                <div className="mt-4 text-sm font-medium text-gray-500 uppercase tracking-wider">{activeStory.project}</div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Controls */}
                        <div className="flex items-center gap-4 mt-8">
                            <button
                                onClick={handlePrev}
                                className="p-4 rounded-full bg-white shadow-md hover:bg-gray-200 transition-colors"
                                aria-label="Previous story"
                            >
                                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                            </button>
                            <button
                                onClick={handleNext}
                                className="p-4 rounded-full bg-white shadow-md hover:bg-gray-200 transition-colors"
                                aria-label="Next story"
                            >
                                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="relative h-96">
                        <AnimatePresence>
                            {successStories.map((story, index) => (
                                activeIndex === index && (
                                    <motion.img
                                        key={story.name}
                                        src={story.avatar}
                                        alt={story.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white"
                                    />
                                )
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default CustomerSuccess;