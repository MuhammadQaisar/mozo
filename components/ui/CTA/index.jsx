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
                className="relative overflow-hidden rounded-3xl shadow-2xl p-6 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-0"
                style={{
                    background:
                        "linear-gradient(135deg, #F06A6A 0%, #f7cac9 60%, #000000 100%)",
                }}
            >
                {/* Content Area: Contains headline and description */}
                <div className="relative z-10 flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-2">
                        Ready to Transform Your Digital Presence?
                    </h2>
                    <p className="text-white text-base sm:text-lg opacity-90 max-w-2xl mx-auto lg:mx-0 mb-0">
                        Let's build something amazing together. Reach out today to
                        discuss your project and get a free consultation.
                    </p>
                </div>

                {/* CTA Button Area */}
                <div className="relative z-10 flex-shrink-0 -mt-2 lg:mt-0">
                    <NavLink
                        href="/get-started"
                        className="block w-full lg:w-auto px-5 py-2 rounded-full font-bold text-base text-[#FFFFFF] bg-[#F06A6A] shadow-lg hover:bg-[#000000] hover:text-[#F06A6A] transition-all duration-300"
                    >
                        BOOK A FREE DEMO
                    </NavLink>
                </div>
            </motion.div>
        </SectionWrapper>
    );
};

export default CTA;