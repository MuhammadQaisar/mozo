import React, { useState } from "react";
import SectionWrapper from "../../SectionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { montserrat } from "../font";

/**
 * Enhanced FAQs Component
 * Modern, accessible FAQ section with smooth animations and improved visual design.
 * Features glassmorphism effects, better typography, and consistent brand colors.
 */

// Enhanced FAQ data with categories
const faqs = [
    {
        category: "General",
        question: "How is Mozo Technologies different from other agencies?",
        answer: "Mozo Technologies offers a unique blend of cutting-edge technology expertise and personalized service. Unlike traditional agencies, we focus on long-term partnerships, providing dedicated support, transparent communication, and solutions tailored specifically to your business goals. Our team combines technical excellence with strategic thinking to deliver results that drive real growth."
    },
    {
        category: "Services",
        question: "What are the benefits of working with Mozo Technologies?",
        answer: "Working with Mozo Technologies provides numerous advantages: access to highly skilled developers and designers, faster project delivery, cost-effective solutions, scalable architectures, ongoing support and maintenance, and flexible engagement models. We also provide detailed project documentation, regular progress updates, and post-launch optimization to ensure your success."
    },
    {
        category: "Process",
        question: "What if I'm not satisfied with the results?",
        answer: "Your satisfaction is our top priority. We offer a comprehensive satisfaction guarantee that includes regular check-ins, milestone reviews, and the ability to request revisions at any stage. If you're not completely satisfied, we'll work closely with you to understand your concerns and make necessary adjustments until we exceed your expectations."
    },
    {
        category: "Projects",
        question: "Do you handle both project-based work and ongoing partnerships?",
        answer: "Absolutely! We offer flexible engagement models to suit your needs. Whether you need a complete project delivered from start to finish, ongoing development support, dedicated team augmentation, or long-term strategic partnerships, we have the expertise and resources to support your goals at any scale."
    },
    {
        category: "Company",
        question: "What makes Mozo Technologies unique in the market?",
        answer: "Mozo Technologies stands out through our hybrid approach, combining the agility of a boutique agency with the capabilities of an enterprise solution provider. We offer end-to-end services from strategy and design to development and deployment, all while maintaining the personal touch and attention to detail that larger firms often lack."
    },
    {
        category: "Support",
        question: "What kind of ongoing support do you provide?",
        answer: "We provide comprehensive ongoing support including 24/7 monitoring, regular updates and maintenance, performance optimization, security patches, technical support, and strategic consulting. Our support packages are tailored to your specific needs and can scale with your business growth."
    }
];

const FAQs = () => {
    const [openIdx, setOpenIdx] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Get unique categories
    const categories = ["All", ...new Set(faqs.map(faq => faq.category))];

    // Filter FAQs by category
    const filteredFaqs = selectedCategory === "All" 
        ? faqs 
        : faqs.filter(faq => faq.category === selectedCategory);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <SectionWrapper id="faqs" className={`py-20 lg:py-28 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden ${montserrat.className}`}>
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-10 w-72 h-72 bg-[#F06A6A]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-black/3 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Enhanced Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center px-4 py-2 bg-[#F06A6A]/10 rounded-full mb-6">
                        <span className="w-2 h-2 bg-[#F06A6A] rounded-full mr-3 animate-pulse"></span>
                        <span className="text-sm font-medium text-[#F06A6A] uppercase tracking-wider">FAQ</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        <span className="block">Frequently Asked</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F06A6A] via-red-500 to-[#F06A6A] animate-gradient-x">
                            Questions
                        </span>
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Got questions? We've got answers. Here are the most common questions our clients ask about our services and process.
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => {
                                setSelectedCategory(category);
                                setOpenIdx(null); // Close any open FAQ when switching categories
                            }}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                selectedCategory === category
                                    ? 'bg-[#F06A6A] text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-[#F06A6A]/30 hover:text-[#F06A6A]'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* FAQ Items */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="space-y-4"
                >
                    <AnimatePresence mode="wait">
                        {filteredFaqs.map((faq, idx) => (
                            <motion.div
                                key={`${selectedCategory}-${idx}`}
                                variants={itemVariants}
                                layout
                                className="group"
                            >
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 hover:border-[#F06A6A]/30 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                                    <button
                                        className="w-full flex items-center justify-between p-6 lg:p-8 text-left focus:outline-none focus:ring-2 focus:ring-[#F06A6A]/20 focus:ring-inset transition-all duration-300"
                                        onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                                    >
                                        <div className="flex-1 pr-4">
                                            {/* Category Badge */}
                                            <div className="inline-flex px-3 py-1 bg-[#F06A6A]/10 text-[#F06A6A] text-xs font-semibold rounded-full mb-3">
                                                {faq.category}
                                            </div>
                                            
                                            {/* Question */}
                                            <h3 className="text-lg lg:text-xl font-semibold text-gray-900 group-hover:text-[#F06A6A] transition-colors duration-300">
                                                {faq.question}
                                            </h3>
                                        </div>

                                        {/* Toggle Icon */}
                                        <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-[#F06A6A] to-red-500 flex items-center justify-center transition-all duration-300 ${
                                            openIdx === idx ? "rotate-45 scale-110" : "rotate-0 scale-100"
                                        }`}>
                                            <svg
                                                className="w-5 h-5 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                />
                                            </svg>
                                        </div>
                                    </button>

                                    {/* Answer */}
                                    <AnimatePresence>
                                        {openIdx === idx && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                                                    <div className="border-t border-gray-100 pt-6">
                                                        <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                                                            {faq.answer}
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Still Have Questions?
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Can't find the answer you're looking for? Our team is here to help. Get in touch and we'll get back to you within 24 hours.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#F06A6A] to-red-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Contact Us
                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </motion.a>
                            <motion.a
                                href="/get-started"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center px-8 py-4 bg-white text-[#F06A6A] font-semibold rounded-2xl border-2 border-[#F06A6A] hover:bg-[#F06A6A] hover:text-white transition-all duration-300"
                            >
                                Schedule a Call
                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Enhanced Custom Styles */}
            <style jsx>{`
                @keyframes gradient-x {
                    0%, 100% { background-size: 200% 200%; background-position: left center; }
                    50% { background-size: 200% 200%; background-position: right center; }
                }
                .animate-gradient-x {
                    animation: gradient-x 3s ease infinite;
                }
            `}</style>
        </SectionWrapper>
    );
};

export default FAQs;