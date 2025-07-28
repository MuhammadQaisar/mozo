import React, { useState } from "react";
import SectionWrapper from "../../SectionWrapper";

/**
 * FAQs Component
 * Displays a list of Frequently Asked Questions with collapsible answer sections.
 * Users can click on a question to reveal or hide its answer.
 */

// Array of FAQ objects, each containing a question and its corresponding answer.
const faqs = [
    { question: "How is Mozo Technologies different from Upwork?", answer: "Mozo Technologies offers a curated selection of top-tier tech talent, focusing on long-term partnerships and seamless integration with your existing teams. Unlike Upwork, we provide dedicated support and ensure a perfect match for your specific project needs, guaranteeing quality and commitment." },
    { question: "What are the benefits of hiring developers through MOZO?", answer: "Hiring through Mozo Technologies provides access to highly skilled developers without the overhead of traditional recruitment. Benefits include faster hiring cycles, reduced costs, access to specialized expertise, and flexible engagement models tailored to your project requirements." },
    { question: "What if I'm not satisfied with my new hire?", answer: "Your satisfaction is our priority. If you are not satisfied with a new hire, we offer a transparent and straightforward replacement policy. We will work closely with you to understand the issues and provide a suitable replacement promptly, ensuring minimal disruption to your project." },
    { question: "Does Teamo take on project-based work?", answer: "Yes, Mozo Technologies (formerly Teamo) undertakes both project-based work and dedicated team placements. Whether you need a full team to manage a project from conception to completion or individual experts to augment your existing staff, we have flexible solutions to meet your demands." },
    { question: "Is Mozo a software agency?", answer: "Mozo Technologies operates as a hybrid model, combining elements of a talent solutions provider and a software agency. We not only connect you with exceptional tech talent but also offer end-to-end project development and management services, ensuring comprehensive support for your technological ventures." },
];

const FAQs = () => {
    // State to manage which FAQ item is currently open. Null means no item is open.
    const [openIdx, setOpenIdx] = useState(null);

    return (
        <SectionWrapper id="faqs" className="py-8 sm:py-12 md:py-16 mb-8 sm:mb-16 md:mb-32"> {/* Section container with ID and styling */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Centered content container */}
                {/* Section Header */}
                <div className="mb-8 sm:mb-10 md:mb-12"> {/* Left-aligned text with bottom margin */}
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-700 leading-tight"> {/* Responsive title styling */}
                        Frequently Asked Questions
                    </h2>
                </div>

                {/* FAQ Items */}
                <div className="space-y-0"> {/* No vertical spacing between FAQ items */}
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="border-b border-gray-200 last:border-b-0"> {/* Simple border bottom styling */}
                            <button
                                className="w-full flex items-center justify-between py-4 sm:py-5 md:py-6 text-left focus:outline-none transition-colors duration-300" // Button styling for FAQ question
                                onClick={() => setOpenIdx(openIdx === idx ? null : idx)} // Toggles the open state of the FAQ item
                            >
                                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-600 pr-2 sm:pr-3 md:pr-4"> {/* Question text styling */}
                                    {faq.question}
                                </span>
                                <span className={`flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-black text-white transition-transform duration-300 transform flex-shrink-0 ${
                                    openIdx === idx ? "rotate-45" : "rotate-0" // Rotates the icon when the FAQ is open
                                }`}> {/* Icon styling */}
                                    <svg
                                        className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" // SVG icon size
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="3"
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6" // SVG path for plus/minus icon
                                        ></path>
                                    </svg>
                                </span>
                            </button>
                            {/* FAQ Answer (conditionally rendered) */}
                            {openIdx === idx && (
                                <div className="pb-4 sm:pb-5 md:pb-6 text-sm sm:text-base md:text-lg lg:text-xl font-light text-gray-600 leading-relaxed animate-fade-in-down pr-8 sm:pr-10 md:pr-12 lg:pr-14"> {/* Answer text styling and animation */}
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default FAQs;