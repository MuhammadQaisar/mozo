import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { montserrat } from "../font";
import SectionWrapper from "../../SectionWrapper";

const testimonials = [
    {
        logo: "/logos/alkassib.png",
        company: "ALKASSIB",
        summary: "Working with Mozo was a game-changer for our business. Their expertise in AI and automation helped us streamline operations and reduce costs by 40% while improving customer satisfaction.",
        avatar: "/Alhawar.jpg",
        name: "Mohammad Alhawar",
        title: "Operations Director",
        rating: 5,
        project: "AI Automation System"
    },
     {
        logo: "/logos/taus.jpg",
        company: "TAUS Enterprises",
        summary: "The team at Mozo Technologies delivered a robust, scalable solution that perfectly aligned with our business goals. Their attention to detail and commitment to quality is unmatched.",
        avatar: "/Tim.jpeg",
        name: "Tim",
        title: "CEO & Founder",
        rating: 5,
        project: "Enterprise Web App"
    },
    {
        logo: "/logos/muxilite.jpg",
        company: "MUXILITE",
        summary: "Mozo Technologies transformed our digital presence with their innovative approach. Their team delivered exceptional results that exceeded our expectations, boosting our conversion rates by 300%.",
        avatar: "/rashida.jpeg",
        name: "Rashida",
        title: "Founder & CEO",
        rating: 5,
        project: "E-commerce Platform"
    }
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const activeTestimonial = testimonials[activeIndex];

    return (
        <SectionWrapper className={`py-20 md:py-28 bg-white ${montserrat.className}`}>
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">WHAT OUR <span className="text-[#F06A6A]">CLIENTS</span> SAY</h2>
                <p className="text-lg text-gray-600 mb-12">We are trusted by businesses of all sizes.</p>

                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col items-center"
                        >
                            <div className="mb-4">
                                <img
                                    src={activeTestimonial.logo}
                                    alt={activeTestimonial.company}
                                    className="h-16 w-auto object-contain mx-auto"
                                />
                            </div>

                            <blockquote className="text-xl md:text-xl font-sm text-gray-800 leading-relaxed mb-8 max-w-3xl text-center">
                                “{activeTestimonial.summary}”
                            </blockquote>

                            <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:space-x-4">
                                <div className="flex flex-col items-center mb-4 sm:mb-0">
                                    <img
                                        src={activeTestimonial.avatar}
                                        alt={activeTestimonial.name}
                                        className="w-16 h-16 rounded-full object-cover mb-2"
                                    />
                                    <div className="text-center">
                                        <div className="font-medium text-gray-600 text-sm">{activeTestimonial.name}</div>
                                        <div className="text-gray-600 text-base">{activeTestimonial.title}, {activeTestimonial.company}</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors -ml-16"
                        aria-label="Previous testimonial"
                    >
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors -mr-16"
                        aria-label="Next testimonial"
                    >
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Testimonials;