import { useState } from "react";
import SectionWrapper from "../../SectionWrapper";

// Example icons for AI/ML row (replace with your own SVGs or images as needed)
import python from "../../../public/icons/python.svg";
import tensorflow from "../../../public/icons/tensorflow.svg";
import kaggle from "../../../public/icons/kaggle.svg";
import openai from "../../../public/icons/openai.svg";
import numpy from "../../../public/icons/numpy.svg";

import Image from "next/image";

const features = [
    {
        icon: (
            <svg className="w-8 h-8 text-[#F06A6A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17.25L6 21m0 0l-3.75-3.75M6 21V3m12 0l3.75 3.75M18 3l-3.75 3.75M18 3v18" />
            </svg>
        ),
        title: "AI/ML",
        description: "We offer full-scale support for any size business. From building the foundations with a high-converting site with ongoing SEO for traffic growth, to doing CRO for established brands looking to accelerate on hyperdrive.",
        benefits: [
            "AI Strategy and Consulting",
            "ML Modeling",
            "AI Strategy and Consulting",
            "AI Strategy an",
        ],
        icons: [numpy, python, tensorflow, openai, kaggle],
    },
    {
        icon: (
            <svg className="w-8 h-8 text-[#F06A6A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20l9-5-9-5-9 5 9 5zm0-10V4m0 0L3 9m9-5l9 5" />
            </svg>
        ),
        title: "Digital Marketing",
        description: "",
        benefits: [],
    },
    {
        icon: (
            <svg className="w-8 h-8 text-[#F06A6A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8" />
            </svg>
        ),
        title: "SEO",
        description: "",
        benefits: [],
    },
    {
        icon: (
            <svg className="w-8 h-8 text-[#F06A6A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </svg>
        ),
        title: "Web Development",
        description: "",
        benefits: [],
    },
    {
        icon: (
            <svg className="w-8 h-8 text-[#F06A6A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20l9-5-9-5-9 5 9 5zm0-10V4m0 0L3 9m9-5l9 5" />
            </svg>
        ),
        title: "Digital Marketing",
        description: "",
        benefits: [],
    },
    {
        icon: (
            <svg className="w-8 h-8 text-[#F06A6A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8" />
            </svg>
        ),
        title: "UI/UX",
        description: "",
        benefits: [],
    },
];

const aiIcons = [
    { src: numpy, alt: "Neural Net" },
    { src: python, alt: "Python" },
    { src: tensorflow, alt: "TensorFlow" },
    { src: openai, alt: "OpenAI" },
    { src: kaggle, alt: "Kaggle" },
];

const Features = () => {
    const [activeIdx, setActiveIdx] = useState(0);

    return (
        <SectionWrapper>
            <div className="bg-white py-10 px-2 md:px-8">
                {/* Title and description */}
                <h2 className="text-black text-3xl md:text-4xl font-bold text-center mb-2 font-[Montserrat]">
                    What we Offer?
                </h2>
                <p className="text-black text-center max-w-2xl mx-auto mb-10 font-[Montserrat]">
                    We offer full-scale support for any size business. From building the foundations with a high-converting site with ongoing SEO for traffic growth, to doing CRO for established brands looking to accelerate on hyperdrive.
                </p>
                {/* Main grid */}
                <div className="flex flex-col lg:flex-row justify-center items-start gap-8 w-full">
                    {/* Left: Service cards */}
                    <div className="flex flex-col gap-4 w-full max-w-lg mx-auto">
                        {/* First row */}
                        <div className="flex gap-4">
                            {features.slice(0, 3).map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`flex flex-col items-center justify-center flex-1 h-28 rounded-xl border border-gray-200 bg-gray-100 shadow-md cursor-pointer transition-all ${
                                        activeIdx === idx ? "ring-2 ring-[#F06A6A] bg-white" : ""
                                    }`}
                                    onClick={() => setActiveIdx(idx)}
                                >
                                    <span className="mb-1">{item.icon}</span>
                                    <span className="font-semibold text-base text-black">{item.title}</span>
                                </div>
                            ))}
                        </div>
                        {/* Second row */}
                        <div className="flex gap-4">
                            {features.slice(3, 6).map((item, idx) => (
                                <div
                                    key={idx + 3}
                                    className={`flex flex-col items-center justify-center flex-1 h-28 rounded-xl border border-gray-200 bg-gray-100 shadow-md cursor-pointer transition-all ${
                                        activeIdx === idx + 3 ? "ring-2 ring-[#F06A6A] bg-white" : ""
                                    }`}
                                    onClick={() => setActiveIdx(idx + 3)}
                                >
                                    <span className="mb-1">{item.icon}</span>
                                    <span className="font-semibold text-base text-black">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Right: Details */}
                    <div className="flex-1 flex flex-col items-center lg:items-start mt-8 lg:mt-0">
                        <h3 className="text-lg md:text-xl font-bold text-black mb-2 text-center lg:text-left font-[Montserrat]">
                            Data &amp; Artificial intelligence
                        </h3>
                        <p className="text-black text-center lg:text-left mb-2 font-[Montserrat]">
                            We offer full-scale support for any size business. From building the foundations with a high-converting site with ongoing SEO for traffic growth, to doing CRO for established brands looking to accelerate on hyperdrive.
                        </p>
                        <div className="flex flex-wrap gap-x-8 gap-y-2 justify-center lg:justify-start mb-4">
                            <span className="flex items-center text-black font-bold text-base">
                                <svg className="w-5 h-5 text-[#F06A6A] mr-2" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" /></svg>
                                AI Strategy and Consulting
                            </span>
                            <span className="flex items-center text-black font-bold text-base">
                                <svg className="w-5 h-5 text-[#F06A6A] mr-2" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" /></svg>
                                ML Modeling
                            </span>
                            <span className="flex items-center text-black font-bold text-base">
                                <svg className="w-5 h-5 text-[#F06A6A] mr-2" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" /></svg>
                                AI Strategy and Consulting
                            </span>
                            <span className="flex items-center text-black font-bold text-base">
                                <svg className="w-5 h-5 text-[#F06A6A] mr-2" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" /></svg>
                                AI Strategy an
                            </span>
                        </div>
                        {/* AI/ML icons */}
                        <div className="flex flex-wrap gap-6 justify-center lg:justify-start mb-6">
                            {aiIcons.map((icon, idx) => (
                                <Image key={idx} src={icon.src} alt={icon.alt} width={60} height={60} />
                            ))}
                        </div>
                        <button className="bg-black text-white font-semibold rounded-md px-8 py-4 text-base shadow-md hover:bg-gray-900 transition mx-auto lg:mx-0 block">
                            EXPLORE OUR SERVICES
                        </button>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Features;