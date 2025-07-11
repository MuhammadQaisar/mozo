import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"

const CTA = () => {
    return (
        <SectionWrapper id="cta" className="pb-0 mx-2 md:mx-10">
            <div className="py-10 px-6 md:px-12 rounded-2xl bg-black flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Left: Text Content */}
                <div className="flex-1 flex flex-col items-start">
                    <h2 className="text-white text-lg md:text-xl font-bold font-[Montserrat] mb-4">
                        Reach Out and Let's Shape Your Vision into Reality!
                    </h2>
                    <p className="text-white text-base font-[Montserrat]">
                        Kickstart Your Journey
                    </p>
                </div>
                {/* Right: CTA Button */}
                <div className="flex-shrink-0 mt-6 md:mt-0">
                    <NavLink
                        href="/get-started"
                        className="block text-base font-semibold text-black bg-[#F06A6A] hover:bg-[#e65c5c] rounded-md px-10 py-4 shadow-md transition text-center"
                        style={{ minWidth: 260 }}
                    >
                        BOOK A FREE DEMO
                    </NavLink>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default CTA