import React, { useState, useEffect } from "react";

const features = [
    {
        title: "Innovation",
        desc: "From groundbreaking strategies to cutting-edge technologies, our innovative solutions redefine possibilities and drive your success in the digital landscape.",
        icon: (
            <div className="relative p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
            </div>
        ),
        color: "from-blue-500 to-purple-600",
        delay: "0ms"
    },
    {
        title: "Strategy",
        desc: "Embrace the future with our forward-thinking approach, where progressive strategies pave the way for your sustained growth and competitiveness.",
        icon: (
            <div className="relative p-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
        ),
        color: "from-emerald-500 to-teal-600",
        delay: "200ms"
    },
    {
        title: "Outcome",
        desc: "Unlock unparalleled results with our tailored solutions, where innovation and expertise converge to drive superior outcomes and propel your business forward.",
        icon: (
            <div className="relative p-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full animate-bounce"></div>
            </div>
        ),
        color: "from-orange-500 to-red-600",
        delay: "400ms"
    },
];

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeCard, setActiveCard] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('about-section');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="about-section"
            className="min-h-[70vh] flex flex-col items-center justify-center bg-white px-4 py-16"
        >
            {/* Demo resolution badge */}
          
            {/* Main Heading */}
            <h2 className="text-black text-3xl md:text-4xl font-bold text-center mb-3 leading-snug">
                Spending more time fixing tech than<br className="hidden md:block" /> growing your business?
            </h2>
            {/* Subheading */}
            <p className="text-gray-700 text-center max-w-xl mx-auto mb-8">
                Leave the tech to us — from web development to automation — and focus on what you do best.
            </p>
            {/* CTA Button */}
            <button
                className="bg-black text-white font-semibold rounded-md px-8 py-4 text-base shadow-md hover:bg-gray-900 transition mb-2 mx-auto block"
            >
                EXPLORE OUR SERVICES
            </button>
        </section>
    );
};

export default About;