import { useState } from "react";
import Head from "next/head";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Checkbox from "../components/ui/Checkbox";
import Link from "next/link";
import { FaComments, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaTwitter } from "react-icons/fa";

/**
 * GetStarted component renders a contact form for service requests.
 * 
 * Manages form state for user inputs including full name, email, message, 
 * and selected services. Handles form submission with async API call,
 * including loading and error states.
 * 
 * @returns {JSX.Element} A fully interactive contact form with service selection
 */
export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    services: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const servicesItems = [
    "Website design",
    "UX design",
    "User research",
    "Content creation",
    "Strategy & consulting",
    "Other",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (service, checked) => {
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, service]
        : prev.services.filter(s => s !== service)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          services: [],
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us - Mozo Technologies</title>
        <meta name="description" content="Contact Mozo Technologies for any inquiries or to discuss your project. We are here to help you with our expertise in Data & AI, Web Development, UI/UX, CloudOps, Digital Marketing, and DevOps solutions." />
        <meta name="keywords" content="contact Mozo Technologies, IT consultation, get started, business transformation, technology consultation, IT services quote, project consultation" />
        <meta name='robots' content='index, follow' />
        
        {/* Open Graph for Contact Page */}
        <meta property="og:title" content="Contact Us - Mozo Technologies" />
        <meta property="og:description" content="Contact Mozo Technologies for any inquiries or to discuss your project. We are here to help you with our expertise in Data & AI, Web Development, UI/UX, CloudOps, Digital Marketing, and DevOps solutions." />
        <meta property="og:url" content="https://mozotechnologies.com/contact-us" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card for Contact Page */}
        <meta name="twitter:title" content="Contact Us - Mozo Technologies" />
        <meta name="twitter:description" content="Contact Mozo Technologies for any inquiries or to discuss your project. We are here to help you with our expertise in Data & AI, Web Development, UI/UX, CloudOps, Digital Marketing, and DevOps solutions." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://mozotechnologies.com/contact-us" />
        
        {/* Structured Data for Contact Page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact Mozo Technologies",
              "description": "Ready to transform your business? Contact Mozo Technologies for expert IT services consultation.",
              "url": "https://mozotechnologies.com/contact-us",
              "mainEntity": {
                "@type": "Organization",
                "name": "Mozo Technologies",
                "contactPoint": [
                  {
                    "@type": "ContactPoint",
                    "telephone": "+1-555-000-0000",
                    "contactType": "customer service",
                    "email": "team@mozotechnologies.com",
                    "availableLanguage": "English",
                    "hoursAvailable": {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                      "opens": "08:00",
                      "closes": "17:00"
                    }
                  }
                ],
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Sarai Kharbuza, Opposite to E-16, GT Road",
                  "addressLocality": "Islamabad",
                  "addressCountry": "Pakistan"
                }
              },
              "potentialAction": {
                "@type": "CommunicateAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://mozotechnologies.com/contact-us",
                  "inLanguage": "en-US",
                  "actionPlatform": [
                    "http://schema.org/DesktopWebPlatform",
                    "http://schema.org/MobileWebPlatform"
                  ]
                }
              }
            })
          }}
        />
      </Head>
      <div className="min-h-screen bg-white py-8 px-2 sm:px-4 font-[Montserrat] pt-20">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-4 sm:p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Form */}
          <form onSubmit={handleSubmit} className="space-y-6 font-[Montserrat]">
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 font-montserrat tracking-tight text-[#18181e]">
              <span className="block text-[#F06A6A] text-base font-semibold mb-1 uppercase tracking-widest">
                Get in Touch
              </span>
              Contact Our Team
            </h1>
            <p className="text-gray-600 mb-6 text-base leading-relaxed">
              Got any questions about the product or scaling on our platform? We’re here to help.<br />
              Chat to our friendly team 24/7 and get onboard in less than 5 minutes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                <Input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  aria-label="First name"
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#F06A6A] focus:border-[#F06A6A] bg-white text-gray-800 font-[Montserrat]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                <Input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  aria-label="Last name"
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#F06A6A] focus:border-[#F06A6A] bg-white text-gray-800 font-[Montserrat]"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <Input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                aria-label="Email"
                type="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#F06A6A] focus:border-[#F06A6A] bg-white text-gray-800 font-[Montserrat]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                aria-label="Phone number"
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#F06A6A] focus:border-[#F06A6A] bg-white text-gray-800 font-[Montserrat]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                aria-label="Message"
                required
                className="w-full h-28 px-3 py-2 border border-gray-300 rounded-md focus:ring-[#F06A6A] focus:border-[#F06A6A] bg-white text-gray-800 resize-none font-[Montserrat]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Services</label>
              <ul className="flex flex-wrap gap-x-8 gap-y-3 mt-2">
                {servicesItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Checkbox
                      id={`service-${idx}`}
                      checked={formData.services.includes(item)}
                      onChange={e => handleServiceChange(item, e.target.checked)}
                    />
                    <label htmlFor={`service-${idx}`} className="text-sm text-gray-700 font-[Montserrat]">{item}</label>
                  </li>
                ))}
              </ul>
            </div>
            {submitStatus === 'success' && (
              <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded text-sm">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded text-sm">
                Sorry, there was an error sending your message. Please try again.
              </div>
            )}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 bg-gradient-to-r from-[#F06A6A] to-[#e65c5c] text-white font-semibold rounded-md py-3 text-base shadow-md hover:from-[#e65c5c] hover:to-[#F06A6A] transition-all duration-200 disabled:opacity-60 font-[Montserrat]"
            >
              {isSubmitting ? 'Sending...' : 'Send message'}
            </Button>
          </form>
          {/* Right: Contact Info */}
          <div className="flex flex-col gap-8 justify-center md:pl-8 font-[Montserrat]">
            <div>
              <h3 className="text-lg font-extrabold text-[#F06A6A] mb-2 tracking-wide flex items-center gap-2">
                <FaComments className="text-[#F06A6A] text-xl" />
                Chat with us
              </h3>
              <p className="text-gray-700 text-base mb-2 font-medium">Speak to our friendly team via live chat.</p>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="flex items-center gap-2 text-[#F06A6A] hover:underline font-semibold text-base">
                    <FaComments className="text-[#F06A6A]" />
                    Start a live chat
                  </a>
                </li>
                <li>
                  <a href="mailto:team@mozotechnologies.com" className="flex items-center gap-2 text-[#F06A6A] hover:underline font-semibold text-base">
                    <FaEnvelope className="text-[#F06A6A]" />
                    Shoot us an email
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 text-[#F06A6A] hover:underline font-semibold text-base">
                    <FaTwitter className="text-[#F06A6A]" />
                    Message us on X
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-[#F06A6A] mb-2 tracking-wide flex items-center gap-2">
                <FaPhoneAlt className="text-[#F06A6A] text-xl" />
                Call us
              </h3>
              <p className="text-gray-700 text-base mb-2 font-medium">Call our team Mon-Fri from 8am to 5pm.</p>
              <a href="tel:+15550000000" className="flex items-center gap-2 text-[#F06A6A] hover:underline font-semibold text-base">
                <FaPhoneAlt className="text-[#F06A6A]" />
                +1 (555) 000-0000
              </a>
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-[#F06A6A] mb-2 tracking-wide flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#F06A6A] text-xl" />
                Visit us
              </h3>
              <p className="text-gray-700 text-base mb-2 font-medium">Chat to us in person at our Islamabad HQ.</p>
              <a href="#" className="flex items-center gap-2 text-[#F06A6A] hover:underline font-semibold text-base">
                <FaMapMarkerAlt className="text-[#F06A6A]" />
                Sarai Kharbuza, Opposite to E-16, GT Road, Islamabad, Pakistan.
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
/**
 * Renders the Get Started page with a form for submitting service requests.
 * Allows users to input their details, select services, and submit a form.
 * Handles form submission state with success and error messaging.
 * 
 * @returns {JSX.Element} A fully interactive form component for service requests
 */