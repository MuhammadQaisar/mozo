import Link from "next/link";

const NavLink = ({ children, href, ...props }) => (
    <Link href={href} {...props} className={`py-2.5 px-4 text-center rounded-lg duration-150 focus:outline-none focus:ring-0 ${props?.className || ""}`}>
        {children}
    </Link>
)

export default NavLink