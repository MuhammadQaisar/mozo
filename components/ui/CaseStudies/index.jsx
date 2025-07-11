import React, { useState } from "react"


const faqs = [
    { question: "Question #1", answer: "Answer for question 1." },
    { question: "Question #2", answer: "Answer for question 2." },
    { question: "Question #3", answer: "Answer for question 3." },
    { question: "Question #4", answer: "Answer for question 4." },
    { question: "Question #5", answer: "Answer for question 5." },
    { question: "Question #6", answer: "Answer for question 6." },
];

const CaseStudies = () => {
    const [openIdx, setOpenIdx] = useState(null);

    return (
        <section className="flex justify-center items-center py-16 font-[Montserrat] bg-white">
            <div className="w-full max-w-2xl border border-[#3B3663] rounded-lg p-0 md:p-0 bg-white">
                <h2 className="text-2xl md:text-3xl font-bold text-[#3B3663] text-center mb-2 mt-4">
                    Frequently Asked Questions
                </h2>
                <div>
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="border-b border-[#3B3663] last:border-b-0">
                            <button
                                className="w-full flex items-center justify-between py-4 px-4 text-left focus:outline-none"
                                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                            >
                                <span className="font-semibold text-[#3B3663]">{faq.question}</span>
                                <svg
                                    className={`w-5 h-5 text-[#3B3663] transition-transform duration-200 ${openIdx === idx ? "rotate-90" : ""}`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M9 6l6 6-6 6" />
                                </svg>
                            </button>
                            {openIdx === idx && (
                                <div className="px-4 pb-4 text-[#3B3663] text-sm">
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