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
        <SectionWrapper id="cta" className="py-12 px-8 md:px-16">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative overflow-hidden rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 bg-[#374151]"
            >
                {/* Content Area: Contains headline and description */}
                <div className="relative z-10 flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <h2 className="text-white text-3xl sm:text-4xl md:text-2xl font-extrabold leading-tight mb-3">
                        Ready to Transform Your Digital Presence?
                    </h2>
                    <p className="text-white text-lg sm:text-xl opacity-90 max-w-2xl mx-auto lg:mx-0">
                        Let's build something amazing together. Reach out today to
                        discuss your project and get a free consultation.
                    </p>
                </div>

                {/* CTA Button Area */}
                <div className="relative z-10 flex-shrink-0">
                    <NavLink
                        href="/get-started"
                        className="relative block w-full lg:w-auto px-8 py-4 font-semi-bold text-medium text-[#FFFFFF] bg-[#F06A6A] rounded-lg shadow-lg overflow-hidden group"
                    >
                        <span className="relative z-10 flex items-center justify-center whitespace-nowrap">
                            Contact US
                            <svg className="ml-6 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="absolute inset-0 bg-white transform translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"></span>
                    </NavLink>
                </div>
            </motion.div>
        </SectionWrapper>
    );
};

export default CTA;