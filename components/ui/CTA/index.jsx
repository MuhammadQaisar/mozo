import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"
import Image from "next/image"
import { motion } from "framer-motion"

const CTA = () => {
    return (
        <SectionWrapper id="cta" className="py-12 px-4 md:px-4">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-[#F06A6A] to-red-500 p-6 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-20">
                    {/* <Image
                        // src="/cta-image.jpg"
                        // alt="Background"
                        fill
                        style={{objectFit: "cover"}}
                        quality={100}
                    /> */}
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <h2 className="text-white text-2xl sm:text-2xl md:text-4xl font-extrabold leading-tight mb-4">
                        Ready to Transform Your Digital Presence?
                    </h2>
                    <p className="text-white text-base sm:text-lg opacity-90 max-w-2xl mx-auto lg:mx-0">
                        Let's build something amazing together. Reach out today to discuss your project and get a free consultation.
                    </p>
                </div>

                {/* CTA Button */}
                <div className="relative z-10 flex-shrink-0 mt-8 lg:mt-0">
                    <NavLink
                        href="/get-started"
                        className="block w-full lg:w-auto px-5 py-2 rounded-full font-bold text-lg text-[#FFFFFF] bg-black shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
                    >
                        BOOK A FREE DEMO
                    </NavLink>
                </div>
            </motion.div>
        </SectionWrapper>
    )
}

export default CTA