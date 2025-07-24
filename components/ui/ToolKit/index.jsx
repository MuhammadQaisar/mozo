import SectionWrapper from "../../SectionWrapper";

const steps = [
    {
        title: "Fill out the form",
        body: "Let us know your needs and goals. Our simple form takes just a minute to complete.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
        )
    },
    {
        title: "Respond to our Email",
        body: "We’ll reach out quickly with a tailored plan and next steps for your project.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        title: "Sit back and relax",
        body: "Our team gets to work while you focus on your business. We’ll keep you updated every step.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    }
];

const ToolKit = () => {
    return (
        <SectionWrapper id="howitworks" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl font-montserrat">
                        How It Works
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        A simple, streamlined process to get you from idea to execution.
                    </p>
                </div>

                <div className="relative">
                    {/* The vertical line */}
                    <div className="hidden md:block absolute w-0.5 h-full bg-gray-200 left-1/2 transform -translate-x-1/2"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="md:flex items-center w-full mb-8">
                            {/* Left or Right side content */}
                            <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:text-right'}`}>
                                <div className="p-6 bg-gray-50 rounded-xl shadow-lg border border-gray-100">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                    <p className="text-gray-700">{step.body}</p>
                                </div>
                            </div>

                            {/* The circle and icon on the timeline */}
                            <div className="hidden md:flex md:w-12 h-12 bg-white rounded-full items-center justify-center text-[#F06A6A] shadow-md absolute left-1/2 transform -translate-x-1/2">
                                {step.icon}
                            </div>
                            
                            {/* Spacer for the other side */}
                            <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}></div>
                        </div>
                    ))}
                </div>
                
                <div className="text-center mt-16">
                     <a
                        href="#contact"
                        className="inline-block bg-[#F06A6A] hover:bg-red-700 text-white font-bold rounded-lg px-10 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                    >
                        GET IN TOUCH
                    </a>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default ToolKit;
