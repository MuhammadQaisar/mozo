import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { montserrat } from "../font";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Enhanced navigation links with descriptions
    const navigationLinks = [
        { title: "Home", path: "#hero", description: "Back to top" },
        { title: "About", path: "#about", description: "Our story" },
        { title: "Services", path: "#features", description: "What we offer" },
        { title: "Process", path: "#how-it-works", description: "How we work" },
        { title: "FAQ", path: "#faqs", description: "Common questions" },
        { title: "Contact", path: "#contact", description: "Get in touch" }
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
                            <div className="mb-8">
                                <Link href="#" className="inline-block mb-6">
                                    <Image 
                                        src="/Mozo-favicon.svg" 
                                        alt="Mozo Technologies" 
                                        width={180} 
                                        height={60}
                                        className="h-12 w-auto"
                                    />
                                </Link>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    Transforming businesses through innovative technology solutions. 
                                    We're your trusted partner in digital transformation.
                                </p>
                                
                                {/* Contact Info */}
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="w-6 h-6 rounded-full bg-[#F06A6A]/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                            <svg className="w-3 h-3 text-[#F06A6A]" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-gray-300 text-sm leading-relaxed">
                                                Sarai Kharbuza, Opposite to E-16,
                                                GT Road, Islamabad, Pakistan
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center">
                                        <div className="w-6 h-6 rounded-full bg-[#F06A6A]/20 flex items-center justify-center mr-3 flex-shrink-0">
                                            <svg className="w-3 h-3 text-[#F06A6A]" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                            </svg>
                                        </div>
                                        <Link 
                                            href="tel:+923010153774" 
                                            className="text-gray-300 hover:text-[#F06A6A] transition-colors duration-300 text-sm"
                                        >
                                            +92 301 0153774
                                        </Link>
                                    </div>
                                    
                                    <div className="flex items-center">
                                        <div className="w-6 h-6 rounded-full bg-[#F06A6A]/20 flex items-center justify-center mr-3 flex-shrink-0">
                                            <svg className="w-3 h-3 text-[#F06A6A]" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                            </svg>
                                        </div>
                                        <Link 
                                            href="mailto:support@mozotech.com" 
                                            className="text-gray-300 hover:text-[#F06A6A] transition-colors duration-300 text-sm"
                                        >
                                            support@mozotech.com
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div variants={itemVariants} className="lg:col-span-1">
                            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
                            <ul className="space-y-3">
                                {navigationLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.path}
                                            className="group flex items-center text-gray-300 hover:text-[#F06A6A] transition-colors duration-300"
                                        >
                                            <svg className="w-4 h-4 mr-3 text-[#F06A6A]/50 group-hover:text-[#F06A6A] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                            </svg>
                                            <div>
                                                <div className="font-medium">{link.title}</div>
                                                <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                                    {link.description}
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Services */}
                        <motion.div variants={itemVariants} className="lg:col-span-1">
                            <h3 className="text-lg font-semibold text-white mb-6">Our Services</h3>
                            <ul className="space-y-3">
                                {services.map((service, index) => (
                                    <li key={index}>
                                        <Link
                                            href="#features"
                                            className="group flex items-center text-gray-300 hover:text-[#F06A6A] transition-colors duration-300"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-[#F06A6A]/50 group-hover:bg-[#F06A6A] transition-colors duration-300 mr-3 flex-shrink-0"></div>
                                            <span className="text-sm">{service}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Newsletter & Social */}
                        <motion.div variants={itemVariants} className="lg:col-span-1">
                            <h3 className="text-lg font-semibold text-white mb-6">Stay Connected</h3>
                            
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
                                            className={`group w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center hover:bg-[#F06A6A] hover:border-[#F06A6A] transition-all duration-300 ${social.color}`}
                                        >
                                            <Image
                                                src={social.icon}
                                                alt={social.name}
                                                width={20}
                                                height={20}
                                                className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
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
                                <p className="text-gray-500 text-xs mt-1">
                                    Crafted with ❤️ in Pakistan
                                </p>
                            </div>
                            
                            <div className="flex items-center space-x-6 text-sm">
                                <Link href="/privacy" className="text-gray-400 hover:text-[#F06A6A] transition-colors duration-300">
                                    Privacy Policy
                                </Link>
                                <Link href="/terms" className="text-gray-400 hover:text-[#F06A6A] transition-colors duration-300">
                                    Terms of Service
                                </Link>
                                <div className="flex items-center text-gray-400">
                                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
                                    <span className="text-xs">All systems operational</span>
                                </div>
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