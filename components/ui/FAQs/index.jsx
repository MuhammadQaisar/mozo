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
        <SectionWrapper id="faqs" className="py-20 mb-20 md:mb-40 bg-gradient-to-br from-gray-50 to-white"> {/* Section container with ID and styling */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Centered content container */}
                {/* Section Header */}
                <div className="text-center mb-16"> {/* Center-aligned text with bottom margin */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-montserrat leading-tight"> {/* Responsive title styling */}
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"> {/* Responsive subtitle styling */}
                        Find answers to the most common questions about our services.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-6"> {/* Vertical spacing between FAQ items */}
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl"> {/* Styling for each FAQ card */}
                            <button
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none transition-colors duration-300 hover:bg-gray-50" // Button styling for FAQ question
                                onClick={() => setOpenIdx(openIdx === idx ? null : idx)} // Toggles the open state of the FAQ item
                            >
                                <span className="text-xl font-semibold text-gray-800"> {/* Question text styling */}
                                    {faq.question}
                                </span>
                                <span className={`flex items-center justify-center w-8 h-8 rounded-full bg-[#F06A6A] text-white transition-transform duration-300 transform ${
                                    openIdx === idx ? "rotate-45" : "rotate-0" // Rotates the icon when the FAQ is open
                                }`}> {/* Icon styling */}
                                    <svg
                                        className="w-5 h-5" // SVG icon size
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6" // SVG path for plus/minus icon
                                        ></path>
                                    </svg>
                                </span>
                            </button>
                            {/* FAQ Answer (conditionally rendered) */}
                            {openIdx === idx && (
                                <div className="px-6 pb-6 text-gray-700 leading-relaxed animate-fade-in-down border-t border-gray-100 pt-4"> {/* Answer text styling and animation */}
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