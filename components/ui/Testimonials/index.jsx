import SectionWrapper from "../../SectionWrapper"
import { useState } from "react"

const Testimonials = () => {
    const testimonials = [
        {
            avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            name: "Pontus Jakobsson",
            title: "Co-Founder & CPO, Locka Vision",
            company: "Locka Vision",
            summary: "Since beginning their engagement with CodeNinja, the client has seen dramatic improvements in UI and increases in overall efficiency. The team is committed to providing excellent customer service and is highly attentive. The client looks forward to their continued partnership with CodeNinja.",
            reviewLink: "#"
        },
        {
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            name: "Karim Ahmed",
            title: "DevOps Engineer",
            company: "Tech Solutions",
            summary: "The team at CodeNinja delivered beyond expectations. Their expertise and dedication helped us streamline our processes and improve our product quality.",
            reviewLink: "#"
        },
        {
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
            name: "Lysa Stian",
            title: "System Manager",
            company: "InnovateX",
            summary: "Working with CodeNinja was a game changer for us. Their solutions are innovative and their support is top-notch.",
            reviewLink: "#"
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Angela Stian",
            title: "Product Designer",
            company: "Designify",
            summary: "The professionalism and creativity of the CodeNinja team helped us launch our product successfully.",
            reviewLink: "#"
        },
        {
            avatar: "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
            name: "Jurica Koletic",
            title: "Founder",
            company: "Let’s Code",
            summary: "CodeNinja's commitment and expertise made a significant impact on our business growth.",
            reviewLink: "#"
        }
    ]

    const [current, setCurrent] = useState(0)
    const canPrev = current > 0
    const canNext = current < testimonials.length - 1

    const handlePrev = () => {
        if (canPrev) setCurrent(current - 1)
    }

    const handleNext = () => {
        if (canNext) setCurrent(current + 1)
    }

    return (
        <SectionWrapper className="pb-0">
            <div id="testimonials" className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
                    {/* Left: Testimonial Content */}
                    <div className="flex-1">
                        <h2 className="text-gray-800 text-3xl font-semibold mb-8">
                            {testimonials[current].company}
                        </h2>
                        <div className="mb-4 font-bold text-lg text-gray-700">FEEDBACK SUMMARY</div>
                        <blockquote className="text-gray-700 text-lg mb-8 max-w-2xl">
                            "{testimonials[current].summary}"
                        </blockquote>
                        <div className="mb-6">
                            <div className="font-bold text-gray-800">{testimonials[current].name}</div>
                            <div className="font-bold text-gray-700">{testimonials[current].title}{testimonials[current].company ? `, ${testimonials[current].company}` : ""}</div>
                        </div>
                        <a
                            href={testimonials[current].reviewLink}
                            className="flex items-center gap-2 text-gray-900 font-semibold text-lg hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <circle cx="14" cy="14" r="14" fill="none"/>
                                <circle cx="14" cy="14" r="12" stroke="#F06A6A" strokeWidth="2"/>
                                <circle cx="14" cy="14" r="6" fill="#F06A6A"/>
                            </svg>
                            Read Full Review
                        </a>
                    </div>
                    {/* Right: Avatar */}
                    <div className="flex-shrink-0">
                        <img
                            src={testimonials[current].avatar}
                            alt={testimonials[current].name}
                            className="w-48 h-48 object-cover rounded-2xl"
                        />
                    </div>
                </div>
                {/* Navigation */}
                <div className="flex items-center justify-start gap-6 mt-12">
                    <button
                        onClick={handlePrev}
                        disabled={!canPrev}
                        className="p-2 rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 transition disabled:opacity-30"
                        aria-label="Previous"
                    >
                        <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 24l-8-8 8-8" />
                        </svg>
                    </button>
                    {/* Avatars as navigation */}
                    <div className="flex items-center gap-6">
                        {testimonials.map((item, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrent(idx)}
                                className={`rounded-full border-2 transition-all duration-200
                                    ${current === idx ? "border-[#F06A6A]" : "border-transparent opacity-60"}
                                    p-1`}
                                aria-label={`Go to testimonial ${idx + 1}`}
                            >
                                <img
                                    src={item.avatar}
                                    alt={item.name}
                                    className={`w-12 h-12 object-cover rounded-full ${current === idx ? "" : "opacity-60 grayscale"}`}
                                />
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={handleNext}
                        disabled={!canNext}
                        className="p-2 rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 transition disabled:opacity-30"
                        aria-label="Next"
                    >
                        <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 8l8 8-8 8" />
                        </svg>
                    </button>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Testimonials