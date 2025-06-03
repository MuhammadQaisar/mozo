import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"

const FooterCTA = () => (
    <SectionWrapper>
        <div className="custom-screen my-8 mx-40 " >
            <div className="max-w-2xl mx-auto text-center py-12 ">
                <h2 className="text-black text-3xl font-semibold sm:text-4xl">
                    Get started with us today
                </h2>
                <p className="mt-3 text-black/80">
                    Hire experts to create your next idea, follow best practices, remove roadblocks, and delivery on schedule.
                </p>
                <NavLink
                    href="/get-started"
                    className="mt-4 inline-block font-medium text-sm text-white bg-[#F06A6A]"
                >
                    Start building
                </NavLink>
            </div>
        </div>
    </SectionWrapper>
)

export default FooterCTA