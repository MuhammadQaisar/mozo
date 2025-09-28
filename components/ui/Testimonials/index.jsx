import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { montserrat, poppins } from "../font";
import SectionWrapper from "../../SectionWrapper";

const testimonials = [
    {
         logo: "/logos/muxilite.jpg",
        company: "MUXILITE",
        summary: "Mozo Technologies transformed our digital presence with their innovative approach. Their team delivered exceptional results that exceeded our expectations, boosting our conversion rate.",
        avatar: "/rashida.jpeg",
        name: "Rashida",
        title: "Founder & CEO",
        rating: 5,
        project: "E-commerce Platform"

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
    
        logo: "/logos/alkassib.png",
        company: "ALKASSIB",
        summary: "Six months ago, we were drowning in inefficient processes. Mozo's team didn't just implement AI solutions - they really understood our business and tailored everything to our specific needs",
        avatar: "/Alhawar.jpg",
        name: "Mohammad Alhawar",
        title: "Operations Director",
        rating: 5,
        project: "AI Automation System"
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
        <SectionWrapper className={`pt-10 sm:py-20 md:py-28 bg-white ${montserrat.className}`}>
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-4 lg:px-4">
                <h2 className={`text-4xl md:text-4xl font-extrabold text-gray-800 mb-6 ${montserrat.className}`}>What Our <span className="text-[#F06A6A]">Clients</span> feedback</h2>
                {/* <p className="text-medium md:text-md text-gray-600 mb-12">We are trusted by businesses of all sizes .</p> */}

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

                            <blockquote className="text-base md:text-sm text-gray-800 leading-relaxed mb-8 max-w-3xl text-center">
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
                                        <div className="font-medium text-gray-600 text-xs sm:text-sm">{activeTestimonial.name}</div>
                                        <div className="text-gray-600 text-sm sm:text-base">{activeTestimonial.title}, {activeTestimonial.company}</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="hidden md:block">
                        <button
                            onClick={handlePrev}
                            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors -ml-8 lg:-ml-16"
                            aria-label="Previous testimonial"
                        >
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors -mr-8 lg:-mr-16"
                            aria-label="Next testimonial"
                        >
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>

                <div className="md:hidden flex justify-center space-x-4 mt-8 z-10">
                    <button
                        onClick={handlePrev}
                        className="p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
                        aria-label="Previous testimonial"
                    >
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button
                        onClick={handleNext}
                        className="p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
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