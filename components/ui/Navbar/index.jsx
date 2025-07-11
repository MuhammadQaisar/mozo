import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Brand from '../Brand'
import NavLink from '../NavLink'

const Navbar = () => {
    const [state, setState] = useState(false)
    const { events } = useRouter();

    // Updated navigation to match screenshot order and items
    const navigation = [
        { title: "About", path: "#about" },
        { title: "Services", path: "#features" },
        { title: "How it works", path: "#howitworks" },
        { title: "FAQ's", path: "#faqs" },
    ]

    useEffect(() => {
        const handleState = () => {
            document.body.classList.remove("overflow-hidden")
            setState(false)
        }
        events.on("routeChangeStart", handleState);
        events.on("hashChangeStart", handleState);
        return () => {
            events.off("routeChangeStart", handleState);
            events.off("hashChangeStart", handleState);
        }
    }, [events])

    const handleNavMenu = () => {
        setState(!state)
        document.body.classList.toggle("overflow-hidden")
    }

    return (
        <header>
            <nav className={`bg-white w-full fixed top-0 left-0 z-30 shadow-sm`}>
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                    {/* Brand */}
                    <div className="flex items-center">
                        <Brand />
                    </div>
                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        <ul className="flex items-center space-x-6 text-black font-medium text-base">
                            {navigation.map((item, idx) => (
                                <li key={idx} className="hover:text-[#F06A6A] transition-colors duration-150">
                                    <Link href={item.path} className="block">
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <NavLink
                            href="/get-started"
                            className="ml-8 px-7 py-3 rounded bg-[#F06A6A] text-white font-bold shadow-md hover:bg-[#e65c5c] transition"
                            style={{ minWidth: 160, textAlign: "center" }}
                        >
                            GET IN TOUCH
                        </NavLink>
                    </div>
                    {/* Mobile Hamburger */}
                    <div className="md:hidden flex items-center">
                        <button
                            role="button"
                            aria-label="Open the menu"
                            className="text-gray-700 hover:text-[#F06A6A] focus:outline-none"
                            onClick={handleNavMenu}
                        >
                            {state ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                {/* Mobile Nav */}
                {state && (
                    <div className="md:hidden bg-white shadow-lg px-6 pb-6">
                        <ul className="flex flex-col space-y-4 text-black font-medium text-base mt-4">
                            {navigation.map((item, idx) => (
                                <li key={idx} className="hover:text-[#F06A6A] transition-colors duration-150">
                                    <Link href={item.path} className="block py-2">
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <NavLink
                                    href="/get-started"
                                    className="w-full block px-7 py-3 rounded bg-[#F06A6A] text-white font-bold shadow-md hover:bg-[#e65c5c] transition text-center"
                                >
                                    GET IN TOUCH
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Navbar