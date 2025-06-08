import React from "react";

const features = [
    {
        title: "Innovative Solutions",
        desc: "From groundbreaking strategies to cutting-edge technologies, our innovative solutions redefine possibilities and drive your success in the digital landscape.",
        icon: (
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FFFFFF]">
                {/* Speaker icon */}
               <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 3.7446C13 3.27314 12.8728 2.50021 12.1657 2.14424C11.4151 1.76635 10.7163 2.19354 10.3623 2.51158L4.94661 7.43717H3C1.89543 7.43717 1 8.3326 1 9.43717L1.00001 14.6248C1.00001 15.7293 1.89544 16.6248 3.00001 16.6248H4.95001L10.3623 21.4891C10.7175 21.8081 11.416 22.2331 12.1656 21.8554C12.8717 21.4998 13 20.7286 13 20.2561V3.7446Z" fill="#000000"/>
<path d="M17.336 3.79605L17.0952 3.72886C16.5633 3.58042 16.0117 3.89132 15.8632 4.42329L15.7289 4.90489C15.5804 5.43685 15.8913 5.98843 16.4233 6.13687L16.6641 6.20406C18.9551 6.84336 20.7501 9.14615 20.7501 12.0001C20.7501 14.854 18.9551 17.1568 16.6641 17.7961L16.4233 17.8632C15.8913 18.0117 15.5804 18.5633 15.7289 19.0952L15.8632 19.5768C16.0117 20.1088 16.5633 20.4197 17.0952 20.2713L17.336 20.2041C20.7957 19.2387 23.2501 15.8818 23.2501 12.0001C23.2501 8.11832 20.7957 4.76146 17.336 3.79605Z" fill="#000000"/>
<path d="M16.3581 7.80239L16.1185 7.73078C15.5894 7.57258 15.0322 7.87329 14.874 8.40243L14.7308 8.88148C14.5726 9.41062 14.8733 9.96782 15.4024 10.126L15.642 10.1976C16.1752 10.3571 16.75 11.012 16.75 12C16.75 12.9881 16.1752 13.643 15.642 13.8024L15.4024 13.874C14.8733 14.0322 14.5726 14.5894 14.7308 15.1185L14.874 15.5976C15.0322 16.1267 15.5894 16.4274 16.1185 16.2692L16.3581 16.1976C18.1251 15.6693 19.25 13.8987 19.25 12C19.25 10.1014 18.1251 8.33068 16.3581 7.80239Z" fill="#000000"/>
</svg>
            </span>
        ),
    },
    {
        title: "Progressive Strategies",
        desc: "Embrace the future with our forward-thinking approach, where progressive strategies pave the way for your sustained growth and competitiveness in an ever-evolving digital world.",
        icon: (
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FFFFFF]">
                {/* Chart icon */}
              <svg width="800px" height="800px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 1H12V15H16V1Z" fill="#000000"/>
<path d="M6 5H10V15H6V5Z" fill="#000000"/>
<path d="M0 9H4V15H0V9Z" fill="#000000"/>
</svg>
            </span>
        ),
    },
    {
        title: "Better Outcomes",
        desc: "Unlock unparalleled results with our tailored solutions, where innovation and expertise converge to drive superior outcomes and propel your business towards unprecedented success.",
        icon: (
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FFFFFF]">
                {/* Dollar icon */}
<svg fill="#000000" width="800px" height="800px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M541.7 768v-45.3c46.3-2.4 81.5-15 108.7-37.8 27.2-22.8 40.8-53.1 40.8-88.2 0-37.8-11-65.7-35.3-83.4-24.6-20.1-59.8-35.4-111.6-45.3h-2.6V351.8c35.3 5.1 65.3 15 95.1 35.4l43.6-55.5c-43.6-27.9-89.9-42.9-138.8-45.3V256h-40.8v30.3c-40.8 2.4-76.3 15-103.5 37.8-27.2 22.8-40.8 53.1-40.8 88.2s11 63 35.3 80.7c21.7 17.7 59.8 32.7 108.7 42.9v118.5c-38.2-5.1-76.3-22.8-114.2-53.1l-48.9 53.1c48.9 40.5 103.5 63 163.3 68.1V768h41zm2.6-219.6c27.2 7.5 43.6 15 54.4 22.8 8.1 10.2 13.6 20.1 13.6 35.4s-5.5 25.2-19.1 35.4c-13.6 10.2-30.1 15-48.9 17.7V548.4zM449.2 440c-8.1-7.5-13.6-20.1-13.6-32.7 0-15 5.5-25.2 16.2-35.4 13.6-10.2 27.2-15 48.9-17.7v108.6c-27.2-7.8-43.4-15.3-51.5-22.8z"/></svg>
            </span>
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
                        className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm flex flex-col h-full transition hover:shadow-lg"
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