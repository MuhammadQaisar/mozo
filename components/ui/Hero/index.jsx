import NavLink from "../NavLink"

const Hero = () => (
    <section className="relative w-full min-h-[480px] flex flex-col items-center justify-center bg-white overflow-hidden px-4 py-20 md:py-32">
        {/* Full hero section grid lines - increased size and spread */}
        <svg
            className="absolute left-1/2 -translate-x-1/2 w-[250vw] h-[180vh] z-0 pointer-events-none"
            width="400"
            height="1800"
            viewBox="0 0 4000 1800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Vertical grid lines */}
            {[...Array(Math.ceil(4000 / 50) + 1)].map((_, i) => (
                <line
                    key={`v-${i}`}
                    x1={i * 80}
                    y1="0"
                    x2={i * 80}
                    y2="1800"
                    stroke="#D1D5DB"
                    strokeWidth="2"
                    strokeOpacity="0.2" // Increased from 0.45 to 0.7
                />
            ))}
            {/* Horizontal grid lines */}
            {[...Array(Math.ceil(1800 / 50) + 1)].map((_, i) => (
                <line
                    key={`h-${i}`}
                    x1="0"
                    y1={i * 80}
                    x2="4000"
                    y2={i * 80}
                    stroke="#D1D5DB"
                    strokeWidth="2"
                    strokeOpacity="0.2" // Increased from 0.45 to 0.7
                />
            ))}
        </svg>
    
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full">
            {/* White blurred stroke (outline) around the content */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[98%] max-w-3xl h-full pointer-events-none z-[-1]">
                <div className="w-full h-full rounded-3xl border-4 border-white blur-md"></div>
            </div>
            <div className="relative flex flex-col items-center justify-center w-full">
                <h1 className="text-4xl md:text-7xl font-extrabold text-black mb-6 text-center font-[Newkansas,serif] leading-tight drop-shadow-[0_4px_32px_rgba(255,255,255,1)]">
                    Strategic AI that shows<br className="hidden md:block" />
                    what you’ve been missing
                </h1>
                <p className="text-black text-lg md:text-2xl max-w-2xl mx-auto mb-10 text-center font-[Montserrat] drop-shadow-[0_2px_24px_rgba(255,255,255,0.95)]">
                    Turn your sales playbook and unstructured data into complete pipeline visibility, risk insights, and winning behaviors.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                    <NavLink
                        href="/get-started"
                        className="w-auto block font-medium text-medium text-white transition duration-200 md:inline rounded-full px-12 py-3 text-lg shadow-md"
                        style={{ backgroundColor: '#F06A6A' }}
                    >
                        Get a demo
                    </NavLink>
                </div>
            </div>
        </div>
       
       
        {/* Add a custom SVG strip below the last grid line */}
        
    </section>
)

export default Hero