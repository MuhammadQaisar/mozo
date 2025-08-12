import SectionWrapper from "../../SectionWrapper";
import { motion } from "framer-motion";
import { useState } from "react";
import { montserrat } from "../font";

const testimonials = [
    {
        logo: "/logos/muxilite.jpg",
        company: "MUXILITE",
        summary: "Mozo Technologies transformed our digital presence with their innovative approach. Their team delivered exceptional results that exceeded our expectations, boosting our conversion rates by 300%.",
        avatar: "/nadia.png",
        name: "Nadia Sheikh",
        title: "Founder & CEO",
        rating: 5,
        project: "E-commerce Platform"
    },
    {
        logo: "/logos/alkassib.png",
        company: "ALKASSIB",
        summary: "Working with Mozo was a game-changer for our business. Their expertise in AI and automation helped us streamline operations and reduce costs by 40% while improving customer satisfaction.",
        avatar: "/hira-tariq.webp",
        name: "Hira Tariq",
        title: "Operations Director",
        rating: 5,
        project: "AI Automation System"
    },
    {
        logo: "/logos/taus.jpg",
        company: "Taus Enterprises",
        summary: "The team at Mozo Technologies delivered a robust, scalable solution that perfectly aligned with our business goals. Their attention to detail and commitment to quality is unmatched.",
        avatar: "https://randomuser.me/api/portraits/men/65.jpg",
        name: "Tahir Mehmood",
        title: "CEO & Founder",
        rating: 5,
        project: "Enterprise Web App"
    }
];

const Testimonials = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const handlePrev = () => {
        setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <svg
                key={i}
                className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ));
    };

    return (
        <SectionWrapper className={`py-20 lg:py-28 ${montserrat.className}`}>
            {/* Background with gradient */}
            <div className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-40">
                    <div 
                        className="absolute inset-0" 
                        style={{
                            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(240, 106, 106, 0.1) 1px, transparent 0)',
                            backgroundSize: '40px 40px'
                        }}
                    ></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-[#F06A6A]/10 to-[#F06A6A]/10 border border-[#F06A6A]/50">
                            <svg className="w-4 h-4 text-[#F06A6A]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            <span className="text-[#F06A6A] font-medium text-sm">Client Testimonials</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                            What Our <span className="bg-gradient-to-r from-[#F06A6A] via-[#F06A6A] to-[#F06A6A] bg-clip-text text-transparent">Clients Say</span>
                        </h2>
                        <p className="text-black text-lg max-w-2xl mx-auto">
                            Don't just take our word for it. Here's what industry leaders say about working with us.
                        </p>
                    </div>

                    {/* Main Testimonial Card */}
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            key={activeTestimonial}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="relative bg-white rounded-3xl shadow-xl border border-slate-200/50 overflow-hidden"
                        >
                            {/* Gradient accent */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F06A6A] via-[#F06A6A] to-[#F06A6A]"></div>
                            
                            <div className="p-8 lg:p-12">
                                <div className="flex flex-col lg:flex-row items-start gap-8">
                                    {/* Content */}
                                    <div className="flex-1">
                                        {/* Company Info */}
                                        <div className="flex items-center gap-4 mb-6">
                                            {testimonials[activeTestimonial].logo && (
                                                <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-100 flex items-center justify-center p-2">
                                                    <img
                                                        src={testimonials[activeTestimonial].logo}
                                                        alt={testimonials[activeTestimonial].company}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                            )}
                                            <div>
                                                <h3 className="text-xl font-bold text-black">{testimonials[activeTestimonial].company}</h3>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <div className="flex items-center gap-1">
                                                        {renderStars(testimonials[activeTestimonial].rating)}
                                                    </div>
                                                    <span className="text-sm text-slate-500">• {testimonials[activeTestimonial].project}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Quote */}
                                        <div className="relative mb-8">
                                            <svg className="absolute -top-2 -left-2 w-8 h-8 text-[#F06A6A]/20" fill="currentColor" viewBox="0 0 32 32">
                                                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z"/>
                                            </svg>
                                            <blockquote className="text-black text-lg lg:text-xl leading-relaxed pl-6">
                                                "{testimonials[activeTestimonial].summary}"
                                            </blockquote>
                                        </div>

                                        {/* Author Info */}
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#F06A6A]/20">
                                                <img
                                                    src={testimonials[activeTestimonial].avatar}
                                                    alt={testimonials[activeTestimonial].name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <div className="font-bold text-black text-lg">{testimonials[activeTestimonial].name}</div>
                                                <div className="text-black">{testimonials[activeTestimonial].title}</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Large Avatar (Desktop) */}
                                    <div className="hidden lg:block flex-shrink-0">
                                        <div className="w-48 h-48 rounded-2xl overflow-hidden ring-4 ring-[#F06A6A]/10">
                                            <img
                                                src={testimonials[activeTestimonial].avatar}
                                                alt={testimonials[activeTestimonial].name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Navigation */}
                        <div className="flex items-center justify-center gap-6 mt-12">
                            <button
                                onClick={handlePrev}
                                className="group p-3 rounded-full bg-white border border-slate-200 hover:border-[#F06A6A] hover:bg-[#F06A6A]/10 transition-all duration-200 shadow-sm"
                                aria-label="Previous testimonial"
                            >
                                <svg className="w-5 h-5 text-black group-hover:text-[#F06A6A] transition-colors" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            {/* Avatar Navigation */}
                            <div className="flex items-center gap-3">
                                {testimonials.map((testimonial, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveTestimonial(idx)}
                                        className={`relative w-14 h-14 rounded-full overflow-hidden transition-all duration-300 ${
                                            activeTestimonial === idx
                                                ? "ring-3 ring-[#F06A6A] ring-offset-2 scale-110"
                                                : "ring-2 ring-slate-200 opacity-60 hover:opacity-100 hover:ring-slate-300"
                                        }`}
                                        aria-label={`Show testimonial from ${testimonial.name}`}
                                    >
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            className="w-full h-full object-cover"
                                        />
                                        {activeTestimonial === idx && (
                                            <div className="absolute inset-0 bg-[#F06A6A]/10"></div>
                                        )}
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={handleNext}
                                className="group p-3 rounded-full bg-white border border-slate-200 hover:border-[#F06A6A] hover:bg-[#F06A6A]/10 transition-all duration-200 shadow-sm"
                                aria-label="Next testimonial"
                            >
                                <svg className="w-5 h-5 text-black group-hover:text-[#F06A6A] transition-colors" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Testimonials;
