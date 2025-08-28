import SectionWrapper from "../../SectionWrapper";
import { useState } from "react";
import { montserrat } from "../font";

const testimonials = [
     {
        logo: "/logos/taus.jpg",
        company: "Taus Enterprises",
        summary: "The team at Mozo Technologies delivered a robust, scalable solution that perfectly aligned with our business goals. Their attention to detail and commitment to quality is unmatched.",
        avatar: "/tahir-sir.jpg",
        name: "Tahir Mehmood",
        title: "CEO & Founder",
        rating: 5,
        project: "Enterprise Web App"
    },
    {
        logo: "/logos/alkassib.png",
        company: "ALKASSIB",
        summary: "Working with Mozo was a game-changer for our business. Their expertise in AI and automation helped us streamline operations and reduce costs by 40% while improving customer satisfaction.",
        avatar: "/Alhawar.jpg",
        name: "Alhawar",
        title: "Operations Director",
        rating: 5,
        project: "AI Automation System"
    },
   
    {
        logo: "/logos/muxilite.jpg",
        company: "MUXILITE",
        summary: "Mozo Technologies transformed our digital presence with their innovative approach. Their team delivered exceptional results that exceeded our expectations, boosting our conversion rates by 300%.",
        avatar: "/rashida.png",
        name: "Rashida",
        title: "Founder & CEO",
        rating: 5,
        project: "E-commerce Platform"
    }
    
];

const Testimonials = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const handleNext = () => {
        setActiveTestimonial((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <SectionWrapper className={`py-20 ${montserrat.className}`}>
            <div className="max-w-3xl mx-auto flex flex-col items-center justify-center">
                {/* Logo */}
                <img
                    src={testimonials[activeTestimonial].logo}
                    alt={testimonials[activeTestimonial].company}
                    className="h-14 mb-14 object-contain"
                />
                {/* Testimonial */}
                <blockquote className="text-center text-2xl md:text-xl font-semi-bold text-[#18181e] mb-8 leading-relaxed">
                    “{testimonials[activeTestimonial].summary}”
                </blockquote>
                {/* Author */}
                <div className="flex flex-col items-center mb-8">
                    <img
                        src={testimonials[activeTestimonial].avatar}
                        alt={testimonials[activeTestimonial].name}
                        className="w-16 h-16 rounded-full object-cover mb-2"
                    />
                    <div className="text-[#18181e] font-semi-bold text-base">
                        {testimonials[activeTestimonial].name} . {testimonials[activeTestimonial].title}
                    </div>
                </div>
                {/* Next Button */}
                <button
                    onClick={handleNext}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-[#F06A6A]/10 hover:bg-[#F06A6A]/20 transition-colors shadow"
                    aria-label="Next testimonial"
                >
                    <svg
                        className="w-6 h-6 text-[#18181e]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </SectionWrapper>
    );
};

export default Testimonials;
