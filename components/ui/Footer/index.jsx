import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { montserrat } from "../font";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Enhanced navigation links with descriptions
    const navigationLinks = [
        { title: "Home", path: "#hero" },
        { title: "About", path: "#about"},
        { title: "Services", path: "#features"},
        { title: "Process", path: "#how-it-works"},
        { title: "FAQ", path: "#faqs"},
        { title: "Contact", path: "#contact"}
    ];

    // Social media links
    const socialLinks = [
        {
            name: "LinkedIn",
            href: "https://pk.linkedin.com/company/mozo-tech",
            icon: "/linkedin.svg",
            color: "hover:text-blue-600"
        },
        {
            name: "Facebook",
            href: "https://www.facebook.com/mozotech",
            icon: "/icons/facebook.svg",
            color: "hover:text-blue-500"
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/mozotech",
            icon: "/icons/instagram.svg",
            color: "hover:text-pink-500"
        },
        {
            name: "Twitter",
            href: "https://twitter.com/mozotech",
            icon: "/x.svg",
            color: "hover:text-gray-900"
        }
    ];

    // Services for quick access
    const services = [
        "AI/ML Development",
        "Web Development",
        "UI/UX Design",
        "CloudOps",
        "Digital Marketing",
        "DevOps"
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <footer className={`relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden ${montserrat.className}`}>
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#F06A6A]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F06A6A]/5 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            </div>

            <div className="relative z-10">
                {/* Main Footer Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
                        {/* Company Info */}
                        <motion.div variants={itemVariants} className="lg:col-span-1">
                            <div className="mb-8 flex flex-col items-center text-center">
                                {/* Modern Logo Box */}
                                <div className="bg-[#05202C] rounded-2xl p-4 mb-4 shadow-lg flex flex-col items-center">
                                    <Image
                                        src="/footer-logo.svg"
                                        alt="Mozo Technologies"
                                        width={150}
                                        height={150}
                                        className="mb-2"
                                    />
                                    
                                </div>
                                {/* Tagline */}
                                <p className="text-[#F06A6A] text-lg font-light italic mb-2">
                                    Empowering Growth<br />With Digital Excellence
                                </p>
                                {/* Divider */}
                                <hr className="border-[#F06A6A] w-16 my-4 mx-auto" />
                            </div>
                        </motion.div>

                        {/* Services */}
                        <motion.div variants={itemVariants} className="lg:col-span-1">
                            <h3 className="text-lg font-semibold text-white mb-6">Our Services</h3>
                            <ul className="space-y-1">
                                {services.map((service, index) => (
                                    <li key={index}>
                                        <Link
                                            href="#features"
                                            className="text-white font-sans text-[17px] leading-relaxed font-light"
                                        >
                                            {service}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div variants={itemVariants} className="lg:col-span-1">
                            <h3 className="text-lg font-bold text-white mb-6 leading-relaxed">Quick Links</h3>
                            <ul className="space-y-1">
                                {navigationLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.path}
                                            className="text-white font-sans text-[17px] leading-relaxed font-light"
                                        >
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Newsletter & Social */}
                        <motion.div variants={itemVariants} className="lg:col-span-1">
                            {/* <h3 className="text-lg font-semibold text-white mb-6">Stay Connected</h3> */}
                            
                            {/* Newsletter */}
                            <div className="mb-8">
                                <p className="text-gray-300 text-sm mb-4">
                                    Subscribe to our newsletter for the latest updates and insights.
                                </p>
                                <div className="flex">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-[#F06A6A] focus:border-transparent text-white placeholder-gray-400 text-sm"
                                    />
                                    <button className="px-6 py-3 bg-gradient-to-r from-[#F06A6A] to-red-500 rounded-r-xl hover:from-red-500 hover:to-[#F06A6A] transition-all duration-300 group">
                                        <svg className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div>
                                <h4 className="text-sm font-semibold text-white mb-4">Follow Us</h4>
                                <div className="flex space-x-4">
                                    {socialLinks.map((social, index) => (
                                        <Link
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            // className={`group w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center hover:bg-[#F06A6A] hover:border-[#F06A6A] transition-all duration-300 ${social.color}`}
                                        >
                                            <Image
                                                src={social.icon}
                                                alt={social.name}
                                                width={32}
                                                height={32}
                                                className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                                            />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="border-t border-white/10"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <div className="text-center md:text-left">
                                <p className="text-gray-400 text-sm">
                                    © {currentYear} Mozo Technologies. All rights reserved.
                                </p>
                              
                            </div>
                            
                           
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Enhanced Custom Styles */}
            <style jsx>{`
                .bg-grid-pattern {
                    background-image: 
                        linear-gradient(rgba(240, 106, 106, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(240, 106, 106, 0.1) 1px, transparent 1px);
                    background-size: 50px 50px;
                }
            `}</style>
        </footer>
    );
};

export default Footer;