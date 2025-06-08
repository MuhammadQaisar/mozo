import { useState } from "react";
import SectionWrapper from "../../SectionWrapper";

// Add benefits for each feature
const features = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </svg>
        ),
        title: "Web development",
        description: "We build scalable, secure and lightning-fast web solutions tailored to your business needs using the latest technologies.",
        benefits: [
            "Responsive & mobile-first design",
            "SEO optimized code",
            "Fast load times",
            "Custom integrations",
        ],
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-spline-pointer-icon lucide-spline-pointer size-6"><path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"/><path d="M5 17A12 12 0 0 1 17 5"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/></svg>
        ),
        title: "Graphics Design",
        description: "Creative and impactful design solutions for your brand, including logos, banners, and marketing collateral.",
        benefits: [
            "Unique brand identity",
            "High-quality vector assets",
            "Print & digital ready files",
            "Unlimited revisions",
        ],
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-figma-icon lucide-figma size-6"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg>
        ),
        title: "UI/UX",
        description: "User-centric interface and experience design to ensure your digital products are intuitive and delightful.",
        benefits: [
            "User journey mapping",
            "Wireframes & prototypes",
            "Modern, clean layouts",
            "Accessibility best practices",
        ],
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-database-zap-icon lucide-database-zap size-6"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 15 21.84"/><path d="M21 5V8"/><path d="M21 12L18 17H22L19 22"/><path d="M3 12A9 3 0 0 0 14.59 14.87"/></svg>
        ),
        title: "Data Science",
        description: "Transform your data into actionable insights with our advanced analytics and data science services.",
        benefits: [
            "Predictive analytics",
            "Data visualization dashboards",
            "ETL & data pipelines",
            "Business intelligence reporting",
        ],
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-infinity-icon lucide-infinity size-6"><path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"/></svg>
        ),
        title: "DevOps",
        description: "Automate, monitor, and optimize your development lifecycle for faster and more reliable deployments.",
        benefits: [
            "CI/CD automation",
            "Cloud infrastructure setup",
            "24/7 monitoring",
            "Disaster recovery planning",
        ],
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
            </svg>
        ),
        title: "Digital Marketing",
        description: "Grow your business with our comprehensive digital marketing strategies and solutions.",
        benefits: [
            "Targeted ad campaigns",
            "Social media management",
            "SEO & SEM optimization",
            "Analytics & reporting",
        ],
    }
];

const TickIcon = () => (
    <svg className="inline-block mr-2 text-green-500" width="18" height="18" viewBox="0 0 20 20" fill="none">
        <path d="M6 10.5L9 13.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const Features = () => {
    // Default to Web development card (index 0)
    const [activeIdx, setActiveIdx] = useState(0);

    // Split features into two rows
    const firstRow = features.slice(0, 3);
    const secondRow = features.slice(3, 6);

    return (
        <SectionWrapper>
            <style>
                {`
                .tilt-hover {
                    transition: transform 0.25s cubic-bezier(.4,2,.6,1), box-shadow 0.25s, color 0.25s;
                }
                .tilt-hover:hover {
                    transform: perspective(600px) rotateY(8deg) scale(1.04);
                    color: #F06A6A !important;
                    box-shadow: 0 8px 24px 0 rgba(240,106,106,0.10);
                }
                .tilt-hover:hover svg {
                    color: #F06A6A !important;
                    stroke: #F06A6A !important;
                }
                .active-card {
                    color: #F06A6A !important;
                    box-shadow: 0 4px 12px 0 rgba(240,106,106,0.15);
                }
                .active-card svg {
                    color: #F06A6A !important;
                    stroke: #F06A6A !important;
                }
                .active-card span {
                    color: #F06A6A !important;
                }
                `}
            </style>
            <div  className="custom-screen text-gray-600">
                <div className="w-full flex flex-col lg:flex-row items-start justify-center gap-8">
                    {/* Left side: Title and description */}
                    <div className="flex-1 w-full max-w-xl mx-auto space-y-6 sm:text-left mb-8 lg:mb-0">
                        <h2 id="features" className="scroll-mt-24 text-gray-800 text-2xl font-semibold sm:text-3xl font-[Montserrat]">
  Services
</h2>
                        <p className="font-[Montserrat] text-sm sm:text-base">
                            Mozo Technologies provides a wide range of scalable solutions to various sectors and is making a mark in the ever-evolving digital landscape.
                        </p>
                        {/* Features grid */}
                        <div>
                            {/* First row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-lg gap-3">
                                {firstRow.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className={`flex flex-col items-center justify-center w-25 h-40 py-2 px-1 tilt-hover group cursor-pointer ${
                                            activeIdx === idx ? 'active-card' : ''
                                        }`}
                                        onClick={() => setActiveIdx(idx)}
                                    >
                                        <span className={`mb-1 transition duration-300 ${
                                            activeIdx === idx 
                                                ? 'grayscale-0 opacity-100' 
                                                : 'grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100'
                                        }`}>
                                            {item.icon}
                                        </span>
                                        <span className={`mt-1 text-xs font-medium text-center leading-tight ${
                                            activeIdx === idx ? 'text-[#F06A6A]' : 'text-gray-700'
                                        }`}>
                                            {item.title}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            {/* Second row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-lg gap-3 mt-3">
                                {secondRow.map((item, idx) => (
                                    <div
                                        key={idx + 3}
                                        className={`flex flex-col items-center justify-center w-25 h-40 py-2 px-1 tilt-hover group cursor-pointer ${
                                            activeIdx === idx + 3 ? 'active-card' : ''
                                        }`}
                                        onClick={() => setActiveIdx(idx + 3)}
                                    >
                                        <span className={`mb-1 transition duration-300 ${
                                            activeIdx === idx + 3 
                                                ? 'grayscale-0 opacity-100' 
                                                : 'grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100'
                                        }`}>
                                            {item.icon}
                                        </span>
                                        <span className={`mt-1 text-xs font-medium text-center leading-tight ${
                                            activeIdx === idx + 3 ? 'text-[#F06A6A]' : 'text-gray-700'
                                        }`}>
                                            {item.title}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Right side: Title & Description - removed background and styling */}
                    <div className="lg:mt-40 flex-1 w-full max-w-md mx-auto space-y-6">
                        <h3 className="text-xl font-semibold mb-4 text-gray-800 font-[Montserrat]">
                            {features[activeIdx].title}
                        </h3>
                        <p className="font-[Montserrat] text-base text-gray-600 mb-4">
                            {features[activeIdx].description}
                        </p>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2 font-[Montserrat]">Primary Benefits</h4>
                        <ul className="space-y-2">
                            {features[activeIdx].benefits && features[activeIdx].benefits.map((benefit, i) => (
                                <li key={i} className="flex items-start text-gray-700 text-base font-[Montserrat]">
                                    <TickIcon />
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Features;