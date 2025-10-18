import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { urbanist } from "../font";
import { useState, useEffect } from "react";

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(null);

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    const navigationLinks = [
        { title: "Home", path: "#hero" },
        { title: "About Us", path: "#about" },
        { title: "Services", path: "#features" },
        { title: "Our Process", path: "#how-it-works" },
        { title: "FAQs", path: "#faqs" },
        { title: "Contact Us", path: "#contact" }
    ];

    const socialLinks = [
        { name: "LinkedIn", href: "https://pk.linkedin.com/company/mozo-tech", icon: "/linkedin.svg" },
        { name: "Facebook", href: "https://www.facebook.com/mozotech", icon: "/icons/facebook.svg" },
        { name: "Instagram", href: "https://www.instagram.com/mozotech", icon: "/icons/instagram.svg" },
        { name: "Twitter", href: "https://twitter.com/mozotech", icon: "/x.svg" },
    ];

    const services = [
        { title: "AI/ML Development", path: "#features" },
        { title: "Web Development", path: "#features" },
        { title: "UI/UX Design", path: "#features" },
        { title: "CloudOps", path: "#features" },
        { title: "Digital Marketing", path: "#features" },
        { title: "DevOps", path: "#features" },
    ];

    const contactInfo = {
        address: "123 Tech Street, Silicon Valley, CA 94105",
        phone: "+1 (123) 456-7890",
        email: "hello@mozotech.com",
    };

    return (
        <footer className={`bg-gray-900 text-gray-300 ${urbanist.className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                            <Link href="/">
                                <Image src="/footer-logo.svg" alt="Mozo Technologies" width={160} height={40} />
                            </Link>
                            <p className="mt-6 text-sm leading-relaxed">
                                Empowering businesses with innovative software solutions, we turn ideas into reality through cutting-edge technology and expert development.
                            </p>
                            <div className="mt-8 flex space-x-4">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-gray-800 rounded-full hover:bg-[#F06A6A] transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Image src={social.icon} alt={social.name} width={20} height={20} />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {navigationLinks.map((link) => (
                                <li key={link.title}>
                                    <Link href={link.path} className="text-sm hover:text-white transition-colors pb-1 border-b-2 border-transparent hover:border-[#F06A6A]">
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Our Services</h3>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service.title}>
                                    <Link href={service.path} className="text-sm hover:text-white transition-colors">
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Get in Touch</h3>
                        <div className="space-y-4 text-sm">
                            <p className="flex items-start">
                                <span className="w-5 h-5 mr-3 mt-1 flex-shrink-0"><Image src="/icons/address.svg" width={20} height={20} alt="address"/></span>
                                {contactInfo.address}
                            </p>
                            <p className="flex items-center">
                                <span className="w-5 h-5 mr-3 flex-shrink-0"><Image src="/icons/phone.svg" width={20} height={20} alt="phone"/></span>
                                {contactInfo.phone}
                            </p>
                            <p className="flex items-center">
                                <span className="w-5 h-5 mr-3 flex-shrink-0"><Image src="/icons/email.svg" width={20} height={20} alt="email"/></span>
                                {contactInfo.email}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-sm text-gray-500 text-center sm:text-left">
                        &copy; {currentYear || new Date().getFullYear()} Mozo Technologies. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 sm:mt-0">
                        <Link href="/privacy-policy" className="text-sm text-gray-500 hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms-of-service" className="text-sm text-gray-500 hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
