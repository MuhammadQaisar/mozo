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
        <SectionWrapper id="cta" className="py-12 px-4 md:px-4"> {/* Section wrapper for consistent padding and ID for navigation */}
            <motion.div
                initial={{ opacity: 0, y: 50 }} // Initial animation state: hidden and slightly below final position
                whileInView={{ opacity: 1, y: 0 }} // Animate to: fully visible at final position when in view
                viewport={{ once: true, amount: 0.3 }} // Animation triggers once when 30% of the element is visible
                transition={{ duration: 0.6, ease: "easeOut" }} // Animation duration and easing
                className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-[#F06A6A] to-red-500 p-6 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-12" // Styling for the CTA card
            >
                {/* Content Area: Contains headline and description */}
                <div className="relative z-10 flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"> {/* Flex container for text content */}
                    <h2 className="text-white text-2xl sm:text-m md:text-l font-extrabold leading-tight mb-4"> {/* Responsive headline styling */}
                        Ready to Transform Your Digital Presence?
                    </h2>
                    <p className="text-white text-base sm:text-m opacity-90 max-w-2xl mx-auto lg:mx-0"> {/* Responsive paragraph styling */}
                        Let's build something amazing together. Reach out today to discuss your project and get a free consultation.
                    </p>
                </div>

                {/* CTA Button Area */}
                <div className="relative z-10 flex-shrink-0 mt-8 lg:mt-0"> {/* Container for the call-to-action button */}
                    <NavLink
                        href="/get-started" // Link destination for the button
                        className="block w-full lg:w-auto px-5 py-2 rounded-full font-bold text-m text-[#FFFFFF] bg-black shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out" // Styling for the button
                    >
                        BOOK A FREE DEMO
                    </NavLink>
                </div>
            </motion.div>
        </SectionWrapper>
    );
};

export default CTA;