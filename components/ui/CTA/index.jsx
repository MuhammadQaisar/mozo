import SectionWrapper from "../../SectionWrapper";
import NavLink from "../NavLink";
import { motion } from "framer-motion";

/**
 * CTA (Call to Action) Component
 * A prominent section designed to encourage user engagement, typically leading to contact or further exploration.
 * Features a gradient background, a compelling headline, a descriptive paragraph, and a call-to-action button.
 * Uses Framer Motion for an entrance animation.
 */
const CTA = () => {
    return (
        <SectionWrapper id="cta" className="py-12">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative overflow-hidden p-12 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-6 bg-[#000000]/80"
            >
                {/* Background Noise and Texture */}
                {/* <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="1" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noise)" opacity="0.2"/></svg>')`,
                    }}
                ></div> */}
                {/* Accent Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#222222]/15 via-transparent to-transparent"></div>

                {/* Content Area: Contains headline and description */}
                <div className="relative z-10 flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <h2 className="text-gray-300 text-4xl sm:text-5xl lg:text-2xl font-bold leading-tight mb-2">
                        Ready to Transform Your Digital Presence?
                    </h2>
                    <p className="text-gray-300 text-2xl text-sm max-w-3xl mx-auto lg:mx-0">
                        Let's build something amazing together. Reach out today to
                        discuss your project and get a free consultation.
                    </p>
                </div>

                {/* CTA Button Area */}
                <div className="relative z-10 flex-shrink-0">
                    <NavLink
                        href="/get-started"
                        className="block w-full lg:w-auto px-10 py-3 font-semi-bold text-lg text-gray-300  rounded-lg shadow-lg bg-[#F06A6A] hover:text-[#FFFFFF] transition-all duration-300 group"
                    >
                        <span className="flex items-center justify-center whitespace-nowrap">
                            Contact Us
                            <svg className="ml-3 w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                    </NavLink>
                </div>
            </motion.div>
        </SectionWrapper>
    );
};

export default CTA;