import React from "react";

const features = [
    {
        title: "Innovative Solutions",
        desc: "From groundbreaking strategies to cutting-edge technologies, our innovative solutions redefine possibilities and drive your success in the digital landscape.",
        icon: (
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F3F0FF]">
                {/* Speaker icon */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 6C20.5 7.5 21 10 21 12C21 14 20.5 16.5 19 18M16 8.99998C16.5 9.49998 17 10.5 17 12C17 13.5 16.5 14.5 16 15M3 10.5V13.5C3 14.6046 3.5 15.5 5.5 16C7.5 16.5 9 21 12 21C14 21 14 3 12 3C9 3 7.5 7.5 5.5 8C3.5 8.5 3 9.39543 3 10.5Z" stroke="#F06A6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
            </span>
        ),
    },
    {
        title: "Progressive Strategies",
        desc: "Embrace the future with our forward-thinking approach, where progressive strategies pave the way for your sustained growth and competitiveness in an ever-evolving digital world.",
        icon: (
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F3F0FF]">
                {/* Chart icon */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 22H21" stroke="#F06A6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 17C3 17.9428 3 18.4142 3.29289 18.7071C3.58579 19 4.05719 19 5 19C5.94281 19 6.41421 19 6.70711 18.7071C7 18.4142 7 17.9428 7 17V11C7 10.0572 7 9.58579 6.70711 9.29289C6.41421 9 5.94281 9 5 9C4.05719 9 3.58579 9 3.29289 9.29289C3 9.58579 3 10.0572 3 11V13" stroke="#F06A6A" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M10 7C10 6.05719 10 5.58579 10.2929 5.29289C10.5858 5 11.0572 5 12 5C12.9428 5 13.4142 5 13.7071 5.29289C14 5.58579 14 6.05719 14 7V17C14 17.9428 14 18.4142 13.7071 18.7071C13.4142 19 12.9428 19 12 19C11.0572 19 10.5858 19 10.2929 18.7071C10 18.4142 10 17.9428 10 17V7Z" stroke="#F06A6A" strokeWidth="1.5"/>
<path d="M21 11V17C21 17.9428 21 18.4142 20.7071 18.7071C20.4142 19 19.9428 19 19 19C18.0572 19 17.5858 19 17.2929 18.7071C17 18.4142 17 17.9428 17 17V4C17 3.05719 17 2.58579 17.2929 2.29289C17.5858 2 18.0572 2 19 2C19.9428 2 20.4142 2 20.7071 2.29289C21 2.58579 21 3.05719 21 4V7" stroke="#F06A6A" strokeWidth="1.5" strokeLinecap="round"/>
</svg>
            </span>
        ),
    },
    {
        title: "Better Outcomes",
        desc: "Unlock unparalleled results with our tailored solutions, where innovation and expertise converge to drive superior outcomes and propel your business towards unprecedented success.",
        icon: (
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F3F0FF]">
                {/* Dollar icon */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 9C14.5 9 13.7609 8 11.9999 8C8.49998 8 8.49998 12 11.9999 12C15.4999 12 15.5 16 12 16C10.5 16 9.5 15 9.5 15" stroke="#F06A6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7V17" stroke="#F06A6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
            </span>
        ),
    },
];

const About = () => (
	<section className="relative w-full min-h-[600px] flex flex-col items-center justify-center overflow-hidden px-4 py-20 md:py-32 bg-white">
		{/* Gradient background removed */}
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
					<div className="uppercase text-xs font-bold tracking-widest mb-4 font-[Montserrat]">
						What we do
					</div>
					<h2 className="text-3xl md:text-5xl font-extrabold text-black mb-6 font-[Montserrat] leading-tight">
						We solve digital
						<br className="hidden md:block" />
						challenges
					</h2>
				</div>
				<div className="flex-1 flex flex-col justify-between">
					<p className="text-black text-base md:text-lg mb-6 md:mb-0 font-[Montserrat]">
						Together, we help our clients achieve tangible, measurable results.
						Focused on business outcomes — we bring a unique set of expertise and
						skills to the party.
					</p>
					<a
						href="#about"
						className="self-start mt-2 text-xs font-semibold tracking-wide uppercase border-b-2 border-black hover:border-[#F06A6A] transition-colors font-[Montserrat]"
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
							<div className="text-2xl md:text-3xl font-extrabold font-[Montserrat] text-black">
								{f.title}
							</div>
							{f.icon}
						</div>
						<div className="text-gray-700 text-base font-[Montserrat]">
							{f.desc}
						</div>
					</div>
				))}
			</div>
		</div>
	</section>
);

export default About;