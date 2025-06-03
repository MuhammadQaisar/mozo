import React from "react"

const caseStudies = [
    {
        title: "E-Commerce Platform Revamp",
        desc: "Redesigned and optimized an e-commerce platform, resulting in a 40% increase in conversion rate and improved user experience.",
        image: "/muxi.jpg",
        client: "MuXilite",
        link: "#"
    },
    {
        title: "Healthcare App Modernization",
        desc: "Migrated a legacy healthcare app to a modern stack, enhancing security and reducing load times by 60%.",
        image: "valleyclinic.jpg",
        client: "Valley Clinic",
        link: "#"
    },
    {
        title: "AI Chatbot Integration",
        desc: "Integrated an AI-powered chatbot for a banking client, automating 70% of customer queries.",
        image: "/blinder.svg",
        client: "FinBank",
        link: "#"
    }
]

const CaseStudies = () => (
    <section id="casestudies" className="custom-screen py-16 font-[Montserrat]">
        <div  className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 tracking-wide">Case Studies</h2>
            <div className="grid md:grid-cols-3 gap-12">
                {caseStudies.map((study, idx) => (
                    <div key={idx} className="bg-white border rounded-2xl shadow p-6 flex flex-col">
                      
<img
    src={study.image}
    alt={study.title}
    className="rounded-xl w-full h-44 object-cover mb-5 shadow-lg shadow-indigo-200"
/>

                        <h3 className="text-xl font-semibold text-gray-800 tracking-wide">{study.title}</h3>
                        <p className="text-gray-600 mt-3 mb-5 tracking-wide">{study.desc}</p>
                        <div className="mt-auto flex items-center justify-between">
                            <span className="text-sm text-indigo-600 font-semibold tracking-wide">{study.client}</span>
                            <a
                                href={study.link}
                                className="inline-flex items-center gap-1 text-indigo-600 hover:underline text-sm tracking-wide"
                            >
                                View Details
                                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h8M12 5l6 6-6 6" />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
)

export default CaseStudies