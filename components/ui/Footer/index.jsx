import Link from "next/link";
import Image from "next/image";
import { montserrat } from "../font";

const Footer = () => (
    <footer className="mt-5 pt-md-0 pt-5" id="last-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Headline Section */}
            {/* <div className="text-center mb-8">
                <Image className="img-fluid foter_text_img mx-auto" src="https://islootech.com/wp-content/themes/Islootech/css/img/Let’s Talk.png" alt="Let's Talk" width={400} height={100} />
                <h1 className="text-uppercase text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mt-4">
                    Create Something Amazing<br />Together
                </h1>
            </div> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 border-t border-gray-200 pt-12 mb-8">
                
                 {/* Column 1: Social Icons */}
                <div className="flex flex-col items-center sm:items-start px-4 lg:px-6">
                    <h3 className="text-black text-lg font-normal mb-4">Follow Us</h3>
                    <ul className="flex flex-row justify-center space-x-4 sm:flex-col sm:space-x-0 sm:space-y-4">
                        <li>
                            <Link href="https://pk.linkedin.com/company/isloo-tech-it" target="_blank" className="text-decoration-none text-black flex items-center">
                                <div className="p-3 sm:p-2 border border-red-500 rounded-full mr-3">
                                    <Image src="/linkedin.svg" alt="LinkedIn" width={40} height={40} className="w-10 h-10 sm:w-8 sm:h-8" />
                                </div>
                                <span className="text-sm sm:inline hidden">Linkedin</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.facebook.com/islootech.it/" target="_blank" className="text-decoration-none text-black flex items-center">
                                <div className="p-3 sm:p-2 border border-red-500 rounded-full mr-3">
                                    <Image src="/icons/facebook.svg" alt="Facebook" width={40} height={40} className="w-10 h-10 sm:w-8 sm:h-8" />
                                </div>
                                <span className="text-sm sm:inline hidden">Facebook</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.instagram.com/islootech.it/" target="_blank" className="text-decoration-none text-black flex items-center">
                                <div className="p-3 sm:p-2 border border-red-500 rounded-full mr-3">
                                    <Image src="/icons/instagram.svg" alt="Instagram" width={40} height={40} className="w-10 h-10 sm:w-8 sm:h-8" />
                                </div>
                                <span className="text-sm sm:inline hidden">Instagram</span>
                            </Link>
                        </li>
                    </ul>
                </div>
               

                {/* Column 2: Newsletter */}
                <div className="flex flex-col items-center lg:items-start px-4 lg:px-8">
                    <h3 className="text-black text-lg font-normal mb-6 text-center lg:text-left">Join our newsletter</h3>
                    <div className="flex w-full max-w-sm mb-4 mx-auto lg:mx-0">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-grow p-3 border border-gray-300 rounded-l-md focus:outline-none text-black text-sm"
                        />
                        <button className="p-3 bg-gray-200 rounded-r-md hover:bg-gray-300 transition-colors duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 20 14" fill="none">
                                <path d="M11.5 0C11.5 0.742 12.233 1.85 12.975 2.78C13.929 3.98 15.069 5.027 16.376 5.826C17.356 6.425 18.544 7 19.5 7M19.5 7C18.544 7 17.355 7.575 16.376 8.174C15.069 8.974 13.929 10.021 12.975 11.219C12.233 12.15 11.5 13.26 11.5 14M19.5 7L0 7" stroke="black" strokeWidth="2"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Column 3: Navigation Links */}
                <div className={`flex flex-col items-center px-4 lg:px-8 ${montserrat.className}`}>
                    <h3 className="text-black text-lg font-normal mb-6">Quick Links</h3>
                    <ul className="space-y-4 text-left">
                        <li>
                            <a href="#hero" className="text-gray-700 hover:text-[#F06A6A] transition-colors duration-200 text-sm cursor-pointer block">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="text-gray-700 hover:text-[#F06A6A] transition-colors duration-200 text-sm cursor-pointer block">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#features" className="text-gray-700 hover:text-[#F06A6A] transition-colors duration-200 text-sm cursor-pointer block">
                                Services
                            </a>
                        </li>
                        {/* <li>
                            <a href="#testimonials" className="text-gray-700 hover:text-[#F06A6A] transition-colors duration-200 text-sm cursor-pointer block">
                                Testimonials
                            </a>
                        </li> */}
                        <li>
                            <a href="#how-it-works" className="text-gray-700 hover:text-[#F06A6A] transition-colors duration-200 text-sm cursor-pointer block">
                                How It Works
                            </a>
                        </li>
                        <li>
                            <a href="#faqs" className="text-gray-700 hover:text-[#F06A6A] transition-colors duration-200 text-sm cursor-pointer block">
                                FAQ's
                            </a>
                        </li>
                    </ul>
                </div>

               {/* Column 4: Logo and Contact Info */}
                 <div className={`flex flex-col items-center lg:items-start px-4 lg:px-8 ${montserrat.className}`}>
                     <Link href="#" className="navbar-brand text-decoration-none mb-6 focus:outline-none mx-auto lg:mx-0">
                         <Image className="img-fluid footer_logo" src="/Mozo-logo.svg" alt="Mozo Logo" width={150} height={50} />
                     </Link>
                     <div className="space-y-3 text-center lg:text-left">
                         <div className="text-gray-700 text-sm leading-relaxed">
                             Sarai Kharbuza, Opposite to E-16, GT Road, Islamabad, Pakistan.
                         </div>
                         <Link href="tel:+923095287562" className="text-gray-700 hover:text-[#F06A6A] transition-colors duration-200 text-sm block">
                             +92 301 0153774
                         </Link>
                         <Link href="mailto:support@mozotech.com" className="text-gray-700 hover:text-[#F06A6A] transition-colors duration-200 text-sm block">
                             support@mozotech.com
                         </Link>
                     </div>
                 </div>
            </div>

            {/* Get a Quote Button (centered below columns)
            <div className="flex justify-center items-center mt-12 mb-6">
                <Link href="#exampleModalToggleContact" data-bs-toggle="modal" role="button" className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[#F06A6A] flex flex-col items-center justify-center shadow-lg group text-center p-2">
                        <span className="text-white text-xs font-bold uppercase leading-tight">GET A QUOTE</span>
                        <svg className="mt-1 w-4 h-4 text-white transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </Link>
            </div> */}

            {/* Copyright */}
            <div className="col-md-12 border-t border-gray-200 mt-md-4 py-4 text-center">
                <p className="main_p text-black m-0">Copyright © {new Date().getFullYear()} Mozo Technologies - All Rights Reserved</p>
            </div>
        </div>
    </footer>
);

export default Footer;