import { motion } from "framer-motion";

const SectionWrapper = ({ children, ...props }) => (
    <motion.section {...props} className={`py-12 sm:py-16 md:py-20 ${props.className || ""}`}>
        {children}
    </motion.section>
)

export default SectionWrapper