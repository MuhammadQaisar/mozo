import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"
import Image from "next/image"

const CTA = () => {
    return (
        <SectionWrapper id="cta" className="py-16 px-4 md:px-8">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-[#F06A6A] to-red-500 p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/cta-image.jpg"
                        alt="Background"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    />
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <h2 className="text-white text-3xl md:text-4xl font-extrabold leading-tight mb-4">
                        Ready to Transform Your Digital Presence?
                    </h2>
                    <p className="text-white text-lg opacity-90 max-w-2xl">
                        Let's build something amazing together. Reach out today to discuss your project and get a free consultation.
                    </p>
                </div>

                {/* CTA Button */}
                <div className="relative z-10 flex-shrink-0 mt-8 lg:mt-0">
                    <NavLink
                        href="/get-started"
                        className="block w-full lg:w-auto px-10 py-4 rounded-full font-bold text-lg text-[#F06A6A] bg-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
                    >
                        BOOK A FREE DEMO
                    </NavLink>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default CTA