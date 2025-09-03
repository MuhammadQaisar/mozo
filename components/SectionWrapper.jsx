const SectionWrapper = ({ children, ...props }) => (
    <section {...props} className={`py-8 sm:py-12 md:py-16 ${props.className || ""}`}>
        {children}
    </section>
)

export default SectionWrapper