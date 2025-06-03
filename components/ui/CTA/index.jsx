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
                        className="block font-medium text-sm text-white transition duration-200 md:inline tracking-widest uppercase px-6 py-3 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F06A6A] active:bg-[#F06A6A] active:shadow-lg"
    style={{ backgroundColor: '#F06A6A' }}
                    >
                        CONTACT US
                        {/* <span className="ml-4 flex items-center justify-left bg-white text-black rounded-xl w-10 h-10">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
                        </span> */}
                    </NavLink>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default CTA