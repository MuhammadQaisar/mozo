import Link from "next/link";

const socialInfo = [
    {
        icon: (
            <svg className="w-6 h-6 hover:text-[#F06A6A] duration-150" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.59-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.39-.58 2.19 0 1.51.77 2.85 1.94 3.63a4.28 4.28 0 0 1-1.94-.54v.05c0 2.11 1.5 3.87 3.5 4.27-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.11 2.94 3.97 2.97A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.7 8.7 0 0 0 24 4.59a8.5 8.5 0 0 1-2.54.7z"/>
            </svg>
        ),
        href: "#"
    },
    {
        icon: (
            <svg className="w-6 h-6 hover:text-[#F06A6A] duration-150" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.6 8.06 8.19 8.93v-6.32h-2.47v-2.61h2.47v-2c0-2.44 1.46-3.78 3.7-3.78 1.07 0 2.19.19 2.19.19v2.41h-1.23c-1.21 0-1.59.75-1.59 1.52v1.66h2.71l-.43 2.61h-2.28v6.32c4.59-.87 8.19-4.52 8.19-8.93 0-5.5-4.46-9.96-9.96-9.96z"/>
            </svg>
        ),
        href: "#"
    },
    {
        icon: (
            <svg className="w-6 h-6 hover:text-[#F06A6A] duration-150" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.5 3h-15A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3zm-9.75 15H6.25V10.5h3.5V18zm-1.75-8.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm12.25 8.25h-3.5v-4.25c0-1.01-.02-2.31-1.41-2.31-1.41 0-1.63 1.1-1.63 2.23V18h-3.5V10.5h3.36v1.03h.05c.47-.89 1.62-1.83 3.34-1.83 3.57 0 4.23 2.35 4.23 5.41V18z"/>
            </svg>
        ),
        href: "#"
    },
    {
        icon: (
            <svg className="w-6 h-6 hover:text-[#F06A6A] duration-150" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.998 3H3.002A2.003 2.003 0 0 0 1 5.002v13.996A2.003 2.003 0 0 0 3.002 21h16.996A2.003 2.003 0 0 0 22 18.998V5.002A2.003 2.003 0 0 0 19.998 3zm-8.998 14.5v-7l6 3.5-6 3.5z"/>
            </svg>
        ),
        href: "#"
    }
];

const navLinks = [
    { title: "About", path: "#about" },
    { title: "Services", path: "#features" },
    { title: "How it works", path: "#howitworks" },
    { title: "FAQ's", path: "#faqs" },
];

const Footer = () => (
    <footer className="bg-black text-white pt-0">
        <div className="max-w-7xl mx-auto px-6 pb-2">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 pt-24">
                {/* Logo and Brand */}
                <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-center mb-2">
                        <img src="/logos/mozo.svg" alt="Mozo Logo" className="h-12 mr-3" />
                        <div>
                            <span className="text-3xl font-bold tracking-tight text-white">MOZO</span>
                            <div className="text-xs tracking-widest text-[#F06A6A] font-semibold">TECHNOLOGIES</div>
                        </div>
                    </div>
                </div>
                {/* Navigation */}
                <div className="flex flex-col items-center md:items-start gap-2">
                    {navLinks.map((item, idx) => (
                        <Link key={idx} href={item.path} className="text-white hover:text-[#F06A6A] text-sm font-normal transition">
                            {item.title}
                        </Link>
                    ))}
                </div>
                {/* CTA Button */}
                <div className="flex flex-col items-center md:items-end w-full md:w-auto">
                    <Link
                        href="/get-started"
                        className="bg-[#F06A6A] hover:bg-[#e65c5c] text-white font-semibold rounded-md px-8 py-4 text-base shadow-md transition mb-2"
                    >
                        BOOK A FREE DEMO
                    </Link>
                </div>
            </div>
            <hr className="border-gray-700 my-8" />
            <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-xs mb-4 md:mb-0">© 2025 Mozo Technologies. All rights reserved.</p>
                <div className="flex items-center gap-x-6">
                    {socialInfo.map((item, idx) => (
                        <a key={idx} href={item.href} aria-label="social media" target="_blank" rel="noreferrer">
                            {item.icon}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;