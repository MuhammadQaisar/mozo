import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"

const CTA = () => {
    return (
        <SectionWrapper id="cta" className="pb-0 mx-4 md:mx-4">
            <div className="py-8 px-4 md:px-12 rounded-2xl bg-[#000000] flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                    <h2 className="text-white text-xl md:text-xl font-extrabold font-[Montserrat] mb-4">
                        Reach Out and Let's Shape Your Vision into Reality!
                    </h2>
                    <p className="text-white text-lg font-[Montserrat]">
                        Kickstart Your Journey
                    </p>
                </div>
                <div className="flex-shrink-0 mt-6 md:mt-0">
                    <NavLink
                        href="/get-started"
                        className="block font-large text-sm text-white transition duration-200 md:inline tracking-widest px-8 py-4 rounded-lg shadow-md bg-[#F06A6A] hover:bg-white hover:text-black hover:border hover:border-[#F06A6A] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F06A6A] active:bg-[#F06A6A] active:shadow-lg"
                    >
                        Contact Us
                    </NavLink>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default CTA