import { useState } from "react";
import { motion } from "framer-motion";
import { montserrat } from "../font";

const ContactHeader = () => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-12"
    >
        <h2 className="text-4xl md:text-4xl font-bold text-gray-800 mb-4">
            <span className="block text-gray-500">
                Get In touch
            </span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your business? Let's discuss your project and create something amazing together.
        </p>
    </motion.div>
);

const ContactDetailItem = ({ icon, title, text }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-200 rounded-lg">
            {icon}
        </div>
        <div>
            <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
            <p className="text-gray-400">{text}</p>
        </div>
    </div>
);

const ContactInfo = () => (
    <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-8"
    >
        <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Start a Conversation</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We're here to help you achieve your digital goals. Whether you need a complete digital transformation or specific technical expertise, our team is ready to deliver exceptional results.
            </p>
        </div>

        {/* Contact Details */}
        <div className="space-y-6">
            <ContactDetailItem
                icon={<svg className="w-6 h-6 text-[#F06A6A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                title="Address"
                text="Sarai Kharbuza, Opposite to E-16, GT Road, Islamabad, Pakistan"
            />
            <ContactDetailItem
                icon={<svg className="w-6 h-6 text-[#F06A6A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                title="Phone"
                text="+92 301 0153774"
            />
            <ContactDetailItem
                icon={<svg className="w-6 h-6 text-[#F06A6A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                title="Email"
                text="support@mozotech.com"
            />
        </div>

        {/* Response Time */}
        {/* <div className="bg-gray-100 rounded-lg p-6 border border-gray-200">
            <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-[#1f2937] to-black rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div>
                    <h4 className="font-semibold text-gray-900">Quick Response</h4>
                    <p className="text-sm text-gray-600">We typically respond within 24 hours</p>
                </div>
            </div>
        </div> */}
    </motion.div>
);

const ContactForm = ({ formData, handleChange, handleSubmit, isSubmitting, submitStatus, services }) => (
    <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
    >
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F06A6A] focus:border-transparent transition-all duration-200 text-gray-900"
                        placeholder="John Doe"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                        Email Address *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F06A6A] focus:border-transparent transition-all duration-200 text-gray-900"
                        placeholder="john@example.com"
                    />
                </div>
            </div>

            {/* Company and Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                        Company
                    </label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F06A6A] focus:border-transparent transition-all duration-200 text-gray-900"
                        placeholder="Your Company"
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F06A6A] focus:border-transparent transition-all duration-200 text-gray-900"
                        placeholder="+1 (555) 000-0000"
                    />
                </div>
            </div>

            {/* Service Selection */}
            <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
                    Service Interested In
                </label>
                <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F06A6A] focus:border-transparent transition-all duration-200 text-gray-900"
                >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                    ))}
                </select>
            </div>

            {/* Message */}
            <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Project Details *
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F06A6A] focus:border-transparent transition-all duration-200 text-gray-900 resize-none"
                    placeholder="Tell us about your project, goals, and how we can help you..."
                />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#F06A6A] text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                    {isSubmitting ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Sending Message...</span>
                        </>
                    ) : (
                        <>
                            <span>Send Message</span>
                            
                        </>
                    )}
                </button>
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3"
                >
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-green-700 font-medium">Message sent successfully! We'll get back to you soon.</p>
                </motion.div>
            )}

            {submitStatus === "error" && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-3"
                >
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <p className="text-red-700 font-medium">Something went wrong. Please try again.</p>
                </motion.div>
            )}
        </form>
    </motion.div>
);


const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const services = [
        "AI/ML Solutions",
        "Web Development",
        "UI/UX Design",
        "CloudOps",
        "Digital Marketing",
        "DevOps",
        "Other"
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            setSubmitStatus("success");
            setFormData({
                name: "",
                email: "",
                company: "",
                phone: "",
                service: "",
                message: ""
            });
        } catch (error) {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus(null), 5000);
        }
    };

    return (
        <section id="contact" className={`py-12 px-4 md:px-8 bg-gray-100 rounded-xl ${montserrat.className}`}>
            <div className="max-w-7xl mx-auto">
                <ContactHeader />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <ContactInfo />
                    <ContactForm
                        formData={formData}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        isSubmitting={isSubmitting}
                        submitStatus={submitStatus}
                        services={services}
                    />
                </div>
            </div>
        </section>
    );
};

export default Contact;
