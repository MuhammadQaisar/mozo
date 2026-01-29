import { useState } from "react";
import { motion } from "framer-motion";
import { urbanist, poppins } from "../font";
import Image from "next/image";

const ContactHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="text-center mb-16"
  >
    <h2
      className={`text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 ${urbanist.className}`}
    >
      Get In <span className="text-[#ffbb00]">Touch</span>
    </h2>
    <p className="text-medium text-gray-600 max-w-3xl mx-auto">
      Ready to transform your business? Let's discuss your project and create
      something amazing together.
    </p>
  </motion.div>
);

const ContactDetailItem = ({ icon, title, text }) => (
  <div className="flex items-start space-x-6">
    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[#F06A6A]/10 rounded-2xl">
      {icon}
    </div>
    <div>
      <h4 className="text-medium text-gray-900">{title}</h4>
      <p className="text-sm text-gray-500">{text}</p>
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
      <h3
        className={`text-3xl font-bold text-gray-900 mb-6 ${urbanist.className}`}
      >
        Let's Start a Conversation
      </h3>
      <p className="text-medium text-gray-600 leading-relaxed mb-8">
        We're here to help you achieve your digital goals. Whether you need a
        complete digital transformation or specific technical expertise, our
        team is ready to deliver exceptional results.
      </p>
    </div>

    {/* Contact Details */}
    <div className="space-y-8">
      <ContactDetailItem
        icon={
          <Image
            src="/address-svgrepo-com.svg"
            width={20}
            height={20}
            alt="Address Icon"
          />
        }
        title="Address"
        text="Sarai Kharbuza, Opposite to E-16, GT Road, Islamabad, Pakistan"
      />
      <ContactDetailItem
        icon={
          <Image
            src="/telephone-svgrepo-com.svg"
            width={20}
            height={20}
            alt="Phone Icon"
          />
        }
        title="Phone"
        text="+92 301 0153774"
      />
      <ContactDetailItem
        icon={
          <Image
            src="/email-9-svgrepo-com.svg"
            width={20}
            height={20}
            alt="Email Icon"
          />
        }
        title="Email"
        text="info@mozotechnologies.com"
      />
    </div>
  </motion.div>
);

const ContactForm = ({
  formData,
  handleChange,
  handleSubmit,
  isSubmitting,
  submitStatus,
  services,
}) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="bg-white rounded-2xl p-8 lg:p-12 border-2 border-gray-300"
  >
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Name and Email Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-900 mb-2"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-2.5 py-1.5 border border-gray-200 rounded-lg focus:border-transparent transition-all duration-200 text-gray-900 text-sm"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-900 mb-2"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-2.5 py-1.5 border border-gray-200 rounded-lg focus:border-transparent transition-all duration-200 text-gray-900 text-sm"
            placeholder="john@example.com"
          />
        </div>
      </div>

      {/* Company and Phone Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-semibold text-gray-900 mb-2"
          >
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-2.5 py-1.5 border border-gray-200 rounded-lg focus:border-transparent transition-all duration-200 text-gray-900 text-sm"
            placeholder="Your Company"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-gray-900 mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-2.5 py-1.5 border border-gray-200 rounded-lg focus:border-transparent transition-all duration-200 text-gray-900 text-sm"
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>

      {/* Service Selection */}
      <div>
        <label
          htmlFor="service"
          className="block text-sm font-semibold text-gray-900 mb-2"
        >
          Service Interested In
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-2.5 py-1.5 border border-gray-200 rounded-lg focus:border-transparent transition-all duration-200 text-gray-900 text-sm"
        >
          <option value="">Select a service</option>
          {services.map((service, index) => (
            <option key={index} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-gray-900 mb-2"
        >
          Project Details *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={3}
          className="w-full px-2.5 py-1.5 border border-gray-200 rounded-lg focus:border-transparent transition-all duration-200 text-gray-900 text-sm resize-none"
          placeholder="Tell us about your project, goals, and how we can help you..."
        />
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#05243D] text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-[#073458] transform hover:scale-105 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2 text-base"
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
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
          <svg
            className="w-6 h-6 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p className="text-green-700 font-medium">
            Message sent successfully! We'll get back to you soon.
          </p>
        </motion.div>
      )}

      {submitStatus === "error" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-3"
        >
          <svg
            className="w-6 h-6 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <p className="text-red-700 font-medium">
            Something went wrong. Please try again.
          </p>
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
    message: "",
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
    "Other",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null); // Reset status on new submission

    try {
      const response = await fetch("/api/submit-contact3-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000); // Clear status after 5 seconds
    }
  };

  return (
    <section
      id="contact"
      className={`py-20 lg:py-28 bg-gray-50 ${urbanist.className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactHeader />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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