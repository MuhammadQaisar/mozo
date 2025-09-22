import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { montserrat } from "../font";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Enhanced navigation links with descriptions
    const navigationLinks = [
        { title: "Home", path: "#hero" },
        { title: "About", path: "#about" },
        { title: "Services", path: "#features" },
        { title: "Process", path: "#how-it-works" },
        { title: "FAQ", path: "#faqs" },
        { title: "Contact", path: "#contact" }
    ];

    // Social media links
    const socialLinks = [
        {
            name: "LinkedIn",
            href: "https://pk.linkedin.com/company/mozo-tech",
            icon: "/linkedin.svg",
        },
        {
            name: "Facebook",
            href: "https://www.facebook.com/mozotech",
            icon: "/icons/facebook.svg",
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/mozotech",
            icon: "/icons/instagram.svg",
        },
        {
            name: "Twitter",
            href: "https://twitter.com/mozotech",
            icon: "/x.svg",
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
        <footer className={`bg-[#0D0D0D] text-white ${montserrat.className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20"
                >
                    {/* Company Info */}
                    <motion.div variants={itemVariants} className="lg:col-span-1 text-center md:text-left">
                        <Image
                            src="/footer-logo.svg"
                            alt="Mozo Technologies"
                            width={180}
                            height={100}
                            className="mt-16 mx-auto md:mx-0"
                        />
                        {/* <p>
                           <span className="font-extrabold text-gray-500">Mozo Technologies</span><span className="text-gray-400 text-md"> is a young, full-service software development company focusing on Generative AI, Web, and Mobile solutions.</span>
                        </p> */}
                    </motion.div>

                    {/* Services */}
                    <motion.div variants={itemVariants} className="text-center md:text-left">
                        <h3 className="text-base sm:text-lg font-semibold mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            {services.map((service) => (
                                <li key={service}>
                                    <Link href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Newsletter & Social */}
                    <motion.div variants={itemVariants} className="text-center md:text-left">
                        {/* <h3 className="text-lg font-semibold mb-4">Stay Connected</h3> */}
                        {/* <p className="text-gray-400 text-sm mb-4">
                            Subscribe to our newsletter for the latest updates.
                        </p> */}
                        <div className="flex mb-20">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 mr-2 rounded-md bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#F06A6A] text-white placeholder-gray-500"
                            />
                            <button className="px-4 py-2 bg-[#F06A6A] rounded-md hover:bg-red-500 transition-colors">
                                Subscribe
                            </button>
                        </div>
                        {/* <h4 className="text-sm sm:text-md font-semibold mb-4">Follow Us</h4> */}
                        <div className="flex space-x-8 justify-center md:justify-end">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    <Image
                                        src={social.icon}
                                        alt={social.name}
                                        width={35}
                                        height={35}
                                    />
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
                >
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        &copy; {currentYear} Mozo Technologies. All rights reserved.
                    </p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link href="/privacy-policy" className="text-gray-500 hover:text-white text-sm transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms-of-service" className="text-gray-500 hover:text-white text-sm transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
