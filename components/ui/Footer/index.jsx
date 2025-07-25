import Link from "next/link";
import Image from "next/image";

const Footer = () => (
    <footer className="mt-5 pt-md-0 pt-5" id="last-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Headline Section */}
            <div className="text-center mb-12">
                <Image className="img-fluid foter_text_img mx-auto" src="https://islootech.com/wp-content/themes/Islootech/css/img/Let’s Talk.png" alt="Let's Talk" width={400} height={100} />
                <h1 className="text-uppercase text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mt-4">
                    Create Something Amazing<br />Together
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t pt-8">
                {/* Column 1: Logo and Contact Info */}
                <div className="flex flex-col items-start">
                    <Link href="#" className="navbar-brand text-decoration-none pe-md-4 mb-4 focus:outline-none">
                        <Image className="img-fluid footer_logo" src="/Mozo-logo.svg" alt="Mozo Logo" width={150} height={50} />
                    </Link>
                    <Link href="#" className="main_p text-decoration-none d-inline-block mb-2 text-black font-[Inter] focus:outline-none">
                        Sarai Kharbuza, Opposite to E-16, GT<br />Road, Islamabad, Pakistan.
                    </Link>
                    <Link href="tel:+923095287562" className="main_p text-decoration-none d-inline-block mb-2 text-black font-[Inter]">+92 309 5287562</Link>
                    <Link href="mailto:support@mozotech.com" className="main_p text-decoration-none d-inline-block mb-2 text-black font-[Inter]">support@mozotech.com</Link>
                </div>

                {/* Column 2: Newsletter */}
                <div class="flex flex-col items-center">
                    <h3 class="text-black text-lg font-semibold mb-4">Join our newsletter</h3>
                    <div class="flex w-full mb-6">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            class="flex-grow p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                        />
                        <button class="p-3 bg-gray-200 rounded-r-md hover:bg-gray-300 transition-colors duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
                                <path d="M11.5 0C11.5 0.742 12.233 1.85 12.975 2.78C13.929 3.98 15.069 5.027 16.376 5.826C17.356 6.425 18.544 7 19.5 7M19.5 7C18.544 7 17.355 7.575 16.376 8.174C15.069 8.974 13.929 10.021 12.975 11.219C12.233 12.15 11.5 13.26 11.5 14M19.5 7L0 7" stroke="black" strokeWidth="2"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Column 3: Social Icons */}
                <div className="flex flex-col items-center sm:items-start lg:ml-40">
                    <h3 className="text-black text-lg font-semibold mb-4">Follow Us</h3>
                    <ul className="flex flex-col space-y-4">
                        <li>
                            <Link href="https://pk.linkedin.com/company/isloo-tech-it" target="_blank" className="text-decoration-none text-black flex items-center">
                                <div className="p-2 border border-red-500 rounded-full mr-3">
                                    <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
                                </div>
                                <span className="text-sm">Linkedin</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.facebook.com/islootech.it/" target="_blank" className="text-decoration-none text-black flex items-center">
                                <div className="p-2 border border-red-500 rounded-full mr-3">
                                    <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
                                </div>
                                <span className="text-sm">Facebook</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.instagram.com/islootech.it/" target="_blank" className="text-decoration-none text-black flex items-center">
                                <div className="p-2 border border-red-500 rounded-full mr-3">
                                    <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
                                </div>
                                <span className="text-sm">Instagram</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Get a Quote Button (centered below columns) */}
            <div className="flex justify-center items-center mt-20 mb-8">
                <Link href="#exampleModalToggleContact" data-bs-toggle="modal" role="button" className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[#F06A6A] flex flex-col items-center justify-center shadow-lg group text-center p-2">
                        <span className="text-white text-xs font-bold uppercase leading-tight">GET A QUOTE</span>
                        <svg className="mt-1 w-4 h-4 text-white transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </Link>
            </div>

            {/* Copyright */}
            <div className="col-md-12 border-t mt-md-4 py-4 text-center">
                <p className="main_p text-black m-0">Copyright © {new Date().getFullYear()} Mozo Technologies - All Rights Reserved</p>
            </div>
        </div>
    </footer>
);

export default Footer;