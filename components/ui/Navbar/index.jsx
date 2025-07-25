import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Brand from '../Brand';
import NavLink from '../NavLink';

// Navigation data for the Navbar
const navigation = [
    { title: "About", path: "#about" },
    { title: "Services", path: "#features" },
    { title: "How it works", path: "#how-it-works" },
    { title: "FAQ's", path: "#faqs" },
];

const Navbar = () => {
    // State to manage the mobile navigation menu's open/close status
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // State to track if the page has been scrolled, used for changing navbar's background
    const [isScrolled, setIsScrolled] = useState(false);
    // State to keep track of the currently active navigation link based on scroll position
    const [activeNavLink, setActiveNavLink] = useState("");

    // useRouter hook to access Next.js router events and current path
    const { events, asPath } = useRouter();

    // Effect to close mobile menu and remove overflow-hidden class on route change
    useEffect(() => {
        const handleRouteChange = () => {
            document.body.classList.remove("overflow-hidden");
            setIsMobileMenuOpen(false);
        };

        events.on("routeChangeStart", handleRouteChange);
        events.on("hashChangeStart", handleRouteChange);

        return () => {
            events.off("routeChangeStart", handleRouteChange);
            events.off("hashChangeStart", handleRouteChange);
        };
    }, [events]);

    // Effect to handle navbar background change on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Effect to observe sections and set active navigation link
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveNavLink(`#${entry.target.id}`);
                    }
                });
            },
            {
                rootMargin: "-50% 0px -50% 0px", // Adjusts the viewport for intersection calculation
                threshold: 0,
            }
        );

        // Observe each section defined in the navigation data
        navigation.forEach((item) => {
            const section = document.querySelector(item.path);
            if (section) observer.observe(section);
        });

        // Cleanup observer on component unmount
        return () => {
            navigation.forEach((item) => {
                const section = document.querySelector(item.path);
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    // Handler for toggling the mobile navigation menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        document.body.classList.toggle("overflow-hidden");
    };

    return (
        <header>
            <nav
                className={`w-full fixed top-0 left-0 z-30 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-white shadow-sm' : 'bg-transparent'}`}
            >
                <div
                    className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-3 transition-all duration-300 ${isScrolled ? 'md:py-2' : 'md:py-4'}`}
                >
                    {/* Brand Logo */}
                    <div className="flex items-center">
                        <Brand />
                    </div>

                    {/* Desktop Navigation Links */}
                    <div
                        className={`hidden md:flex items-center space-x-8 transition-transform duration-300 ease-out ${isScrolled ? '-translate-y-1' : 'translate-y-0'}`}
                    >
                        <ul className="flex items-center space-x-6 text-black font-medium text-base">
                            {navigation.map((item, idx) => (
                                <li
                                    key={idx}
                                    className={`transition-colors duration-150 ${activeNavLink === item.path ? 'text-[#F06A6A] font-semibold' : 'hover:text-[#F06A6A]'}
                                        `}
                                >
                                    <Link href={asPath === '/get-started' ? `/${item.path}` : item.path} className="block focus:outline-none focus:ring-0" onClick={() => setActiveNavLink(item.path)}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        {/* Call to Action Button for Desktop */}
                        <NavLink
                            href="/get-started"
                            className="ml-8 px-6 py-2.5 rounded-md font-semibold text-white bg-gradient-to-r from-[#F06A6A] to-red-500 shadow-md hover:shadow-lg hover:from-[#e65c5c] hover:to-red-600 transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out text-center"
                        >
                            GET IN TOUCH
                        </NavLink>
                    </div>

                    {/* Mobile Hamburger Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            role="button"
                            aria-label="Open the menu"
                            className="text-gray-700 hover:text-[#F06A6A] focus:outline-none"
                            onClick={toggleMobileMenu}
                        >
                            {isMobileMenuOpen ? (
                                // Close icon (X)
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                // Hamburger icon
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white shadow-lg px-6 pb-6">
                        <ul className="flex flex-col space-y-4 text-black font-medium text-base mt-4">
                            {navigation.map((item, idx) => (
                                <li
                                    key={idx}
                                    className={`transition-colors duration-150 ${activeNavLink === item.path ? 'text-[#F06A6A] font-semibold' : 'hover:text-[#F06A6A]'}
                                        `}
                                >
                                    <Link href={asPath === '/get-started' ? `/${item.path}` : item.path} className="block focus:outline-none focus:ring-0" onClick={() => setActiveNavLink(item.path)}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                {/* Call to Action Button for Mobile */}
                                <NavLink
                                    href="/get-started"
                                    className="w-full block px-6 py-3 rounded-md font-semibold text-white bg-gradient-to-r from-[#F06A6A] to-red-500 shadow-md hover:shadow-lg hover:from-[#e65c5c] hover:to-red-600 transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out text-center"
                                >
                                    GET IN TOUCH
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;