import React, { useState } from "react"


const faqs = [
    { question: "How is MOZO Technologies different from Upwork?", answer: "Answer for question 1." },
    { question: "What are the benefits of hiring developers through MOZO?", answer: "Answer for question 2." },
    { question: "What if I’m not satisfied with my new hire?", answer: "Answer for question 3." },
    { question: "Does Teamo take on project-based work?", answer: "Answer for question 4." },
    { question: "Is MOZO a software agency?", answer: "Answer for question 5." },
];

const CaseStudies = () => {
    const [openIdx, setOpenIdx] = useState(null);

    return (
        <section className="flex justify-center items-center py-16 font-[Montserrat] bg-white">
            <div className="w-full max-w-3xl mx-auto">
                <h2 className="text-lg md:text-xl font-bold text-black mb-6 text-center px-2 md:px-0">
                    Frequently Asked Questions
                </h2>
                <div className="bg-white">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="border-b border-[#D3D3E3] last:border-b-0">
                            <button
                                className="w-full flex items-center justify-between py-4 px-2 md:px-0 text-left focus:outline-none"
                                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                            >
                                <span className="text-black text-base md:text-lg font-normal">
                                    {faq.question}
                                </span>
                                <span className="flex items-center justify-center">
                                    <svg
                                        className="w-7 h-7"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle cx="12" cy="12" r="12" fill="#000"/>
                                        <path d="M12 8v8M8 12h8" stroke="#F06A6A" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                </span>
                            </button>
                            {openIdx === idx && (
                                <div className="px-2 md:px-0 pb-4 text-black text-sm">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;