import { useState } from "react";
import Head from "next/head";
import Input from "../components/ui/Input";
import ContactHero from "../components/ContactHero";
import Button from "../components/ui/Button";
import Checkbox from "../components/ui/Checkbox";
import Link from "next/link";
import { FaComments, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaTwitter } from "react-icons/fa";
import { urbanist } from "../components/ui/font";

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
      const response = await fetch('/api/submit-contact2-form', {
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
      <ContactHero />
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
                    "telephone": "+923010153774",
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
      <div className={`min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 ${urbanist.className}`}>
        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="text-center mb-16">
            <h1 className={`text-4xl md:text-5xl font-extrabold text-[#1f2937] mb-4 ${urbanist.className}`}>
              Get in <span className="text-[#F06A6A]">Touch</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have a question or a project in mind? We'd love to hear from you. Reach out to us using the contact details below or fill out the form.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <FaEnvelope className="text-4xl text-[#F06A6A] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <a href="mailto:team@mozotechnologies.com" className="text-lg text-gray-600 hover:text-[#F06A6A]">team@mozotechnologies.com</a>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <FaPhoneAlt className="text-4xl text-[#F06A6A] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <a href="tel:+923010153774" className="text-lg text-gray-600 hover:text-[#F06A6A]">+92 301 0153774</a>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <FaMapMarkerAlt className="text-4xl text-[#F06A6A] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-lg text-gray-600">Sarai Kharbuza, Opposite to E-16, GT Road, Islamabad, Pakistan.</p>
            </div>
          </div>

          {/* Map */}
          <div className="mb-16">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.634833333333!2d72.982433315209!3d33.6923999807035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9542eaaaaaab%3A0x63a8a4a6e4db5c3b!2sSarai%20Kharbuza%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v16788863 Sarai Kharbuza, Opposite to E-16, GT Road, Islamabad, Pakistan00000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className={`space-y-6 ${urbanist.className}`}>
              <h2 className={`text-3xl font-extrabold mb-6 text-center text-[#18181e] ${urbanist.className}`}>
                Send Us a Message
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                  <Input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    aria-label="First name"
                    type="text"
                    required
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#F06A6A] focus:border-[#F06A6A] bg-white text-gray-800 ${urbanist.className}`}
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
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#F06A6A] focus:border-[#F06A6A] bg-white text-gray-800 ${urbanist.className}`}
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
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#F06A6A] focus:border-[#F06A6A] bg-white text-gray-800 ${urbanist.className}`}
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
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#F06A6A] focus:border-[#F06A6A] bg-white text-gray-800 ${urbanist.className}`}
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
                  className={`w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#F06A6A] focus:border-[#F06A6A] bg-white text-gray-800 resize-none ${urbanist.className}`}
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-800 mb-4">I'm interested in...</label>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {servicesItems.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <Checkbox
                        id={`service-${idx}`}
                        checked={formData.services.includes(item)}
                        onChange={e => handleServiceChange(item, e.target.checked)}
                      />
                      <label htmlFor={`service-${idx}`} className={`ml-3 text-gray-700 ${urbanist.className}`}>{item}</label>
                    </li>
                  ))}
                </ul>
              </div>
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center">
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}
              <Button
                type="submit"
                disabled={isSubmitting}
                className={`w-full mt-4 bg-[#1f2937] text-white font-bold rounded-lg py-4 text-lg shadow-lg hover:bg-[#F06A6A] transition-all duration-300 disabled:opacity-50 ${urbanist.className}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}