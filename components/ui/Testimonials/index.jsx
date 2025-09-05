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
        name: "Alhawar",
        title: "Operations Director",
        rating: 5,
        project: "AI Automation System"
    },
     {
        logo: "/logos/taus.jpg",
        company: "Taus Enterprises",
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
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">What Our Clients Say</h2>
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
                            <div className="flex items-center mb-4">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <svg key={i} className={`w-6 h-6 ${i < activeTestimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <blockquote className="text-xl md:text-2xl font-medium text-gray-700 leading-relaxed mb-8 max-w-3xl">
                                “{activeTestimonial.summary}”
                            </blockquote>

                            <div className="flex items-center">
                                <img
                                    src={activeTestimonial.avatar}
                                    alt={activeTestimonial.name}
                                    className="w-16 h-16 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <div className="font-bold text-gray-900">{activeTestimonial.name}</div>
                                    <div className="text-gray-600">{activeTestimonial.title}, {activeTestimonial.company}</div>
                                </div>
                                <img
                                    src={activeTestimonial.logo}
                                    alt={activeTestimonial.company}
                                    className="h-10 ml-8 object-contain grayscale opacity-60"
                                />
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