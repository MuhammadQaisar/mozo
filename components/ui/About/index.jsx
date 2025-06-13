import React from "react";

const features = [
    {
        title: "Innovation",
        desc: "From groundbreaking strategies to cutting-edge technologies, our innovative solutions redefine possibilities and drive your success in the digital landscape.",
        icon: (
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FFFFFF]">
                {/* Speaker icon */}
               <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 6C20.5 7.5 21 10 21 12C21 14 20.5 16.5 19 18M16 8.99998C16.5 9.49998 17 10.5 17 12C17 13.5 16.5 14.5 16 15M3 10.5V13.5C3 14.6046 3.5 15.5 5.5 16C7.5 16.5 9 21 12 21C14 21 14 3 12 3C9 3 7.5 7.5 5.5 8C3.5 8.5 3 9.39543 3 10.5Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </span>
        ),
    },
    {
        title: "Strategy",
        desc: "Embrace the future with our forward-thinking approach, where progressive strategies pave the way for your sustained growth and competitiveness in an ever-evolving digital world.",
        icon: (
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FFFFFF]">
                {/* Chart icon */}
            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 7L12 21" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 3L17 21" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 10L7 21" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </span>
        ),
    },
    {
        title: "Outcome",
        desc: "Unlock unparalleled results with our tailored solutions, where innovation and expertise converge to drive superior outcomes and propel your business towards unprecedented success.",
        icon: (
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FFFFFF]">
                {/* Dollar icon */}


<svg fill="#000000" width="800px" height="800px" viewBox="-12 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
<title>dollar</title>
<path d="M4.88 15.24v-4.64c0.88 0.32 1.52 1.2 1.52 2.2 0 0.48 0.36 0.84 0.84 0.84s0.84-0.36 0.84-0.84c0-1.92-1.36-3.56-3.2-3.96v-0.88c0-0.48-0.36-0.84-0.84-0.84s-0.84 0.36-0.84 0.84v0.88c-1.84 0.4-3.2 2-3.2 3.96s1.36 3.56 3.2 3.96v4.64c-0.88-0.32-1.52-1.2-1.52-2.2 0-0.48-0.36-0.84-0.84-0.84s-0.84 0.36-0.84 0.84c0 1.92 1.36 3.56 3.2 3.96v0.88c0 0.48 0.36 0.84 0.84 0.84s0.84-0.36 0.84-0.84v-0.88c1.84-0.4 3.2-2 3.2-3.96s-1.4-3.56-3.2-3.96zM1.68 12.8c0-1 0.64-1.88 1.52-2.2v4.4c-0.88-0.32-1.52-1.2-1.52-2.2zM4.88 21.4v-4.4c0.88 0.32 1.52 1.2 1.52 2.2s-0.64 1.84-1.52 2.2z"></path>
</svg>            </span>
        ),
    },
];

const About = () => (
    <section
        id="about"
        className="relative w-full min-h-[600px] flex flex-col items-center justify-center overflow-hidden px-4 py-20 md:py-32 bg-white scroll-mt-24"
    >
        {/* Grid lines */}
        <svg
            className="absolute left-1/2 -translate-x-1/2 w-[250vw] h-[100vh] z-0 pointer-events-none"
            width="1920"
            height="900"
            viewBox="0 0 1920 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {[...Array(Math.ceil(1920 / 80) + 1)].map((_, i) => (
                <line
                    key={`v-${i}`}
                    x1={i * 80}
                    y1="0"
                    x2={i * 80}
                    y2="900"
                    stroke="#D1D5DB"
                    strokeWidth="1"
                    strokeOpacity="0.12"
                />
            ))}
            {[...Array(Math.ceil(900 / 80) + 1)].map((_, i) => (
                <line
                    key={`h-${i}`}
                    x1="0"
                    y1={i * 80}
                    x2="1920"
                    y2={i * 80}
                    stroke="#D1D5DB"
                    strokeWidth="1"
                    strokeOpacity="0.12"
                />
            ))}
        </svg>
        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 mb-12">
                <div className="flex-1">
                    <div className="uppercase text-xs font-bold tracking-widest mb-4 font-montserrat">
                        What we do
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-6 font-montserrat leading-tight">
                        We solve digital
                        <br className="hidden md:block" />
                        challenges
                    </h2>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                    <p className="text-black text-base md:text-lg mb-6 md:mb-0 font-montserrat">
                        Together, we help our clients achieve tangible, measurable results.
                        Focused on business outcomes — we bring a unique set of expertise and
                        skills to the party.
                    </p>
                    <a
                        href="#about"
                        className="self-start mt-2 text-xs font-semibold tracking-wide uppercase border-b-2 border-black hover:border-[#F06A6A] transition-colors font-montserrat"
                    >
                        More about us
                    </a>
                </div>
            </div>
            {/* Features grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((f, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm flex flex-col h-full transition "
                    >
                        <div className="flex items-center justify-between mb-6">
                            <div className="text-2xl md:text-3xl font-extrabold font-montserrat text-black">
                                {f.title}
                            </div>
                            {f.icon}
                        </div>
                        <div className="text-gray-700 text-base font-montserrat">
                            {f.desc}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default About;