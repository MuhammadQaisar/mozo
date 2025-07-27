import { useState } from "react";
import Head from "next/head";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Checkbox from "../components/ui/Checkbox";
import Link from "next/link";

/**
 * GetStarted component renders a contact form for service requests.
 * 
 * Manages form state for user inputs including full name, email, message, 
 * and selected services. Handles form submission with async API call,
 * including loading and error states.
 * 
 * @returns {JSX.Element} A fully interactive contact form with service selection
 */
export default function GetStarted() {
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
        <title>Contact our team - Mozo Technologies</title>
      </Head>
      <div className="min-h-screen bg-white py-8 px-2 sm:px-4 font-[Montserrat] pt-20">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-4 sm:p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Form */}
          <form onSubmit={handleSubmit} className="space-y-6 font-[Montserrat]">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#18181e] mb-2 font-[Montserrat] tracking-tight">
              Contact our team
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
              <h3 className="text-lg font-bold text-[#18181e] mb-2">Chat with us</h3>
              <p className="text-gray-600 text-sm mb-2">Speak to our friendly team via live chat.</p>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="flex items-center gap-2 text-[#F06A6A] hover:underline font-medium text-sm">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M12 22c5.523 0 10-4.03 10-9s-4.477-9-10-9S2 3.03 2 8s4.477 9 10 9c.34 0 .677-.015 1.01-.045l3.99 2.045-1.01-3.045z" stroke="#F06A6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Start a live chat
                  </Link>
                </li>
                <li>
                  <Link href="mailto:team@mozotechnologies.com" className="flex items-center gap-2 text-[#F06A6A] hover:underline font-medium text-sm">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M4 4h16v16H4V4zm0 0l8 8 8-8" stroke="#F06A6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Shoot us an email
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center gap-2 text-[#F06A6A] hover:underline font-medium text-sm">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.39-.58 2.19 0 1.51.77 2.85 1.94 3.63a4.28 4.28 0 0 1-1.94-.54v.05c0 2.11 1.5 3.87 3.5 4.27-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.11 2.94 3.97 2.97A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.7 8.7 0 0 0 24 4.59a8.5 8.5 0 0 1-2.54.7z" stroke="#F06A6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Message us on X
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#18181e] mb-2">Call us</h3>
              <p className="text-gray-600 text-sm mb-2">Call our team Mon-Fri from 8am to 5pm.</p>
              <Link href="tel:+15550000000" className="flex items-center gap-2 text-[#F06A6A] hover:underline font-medium text-sm">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.34a2 2 0 0 1-.45 2.11L9.1 10.91a16 16 0 0 0 6 6l2.74-2.74a2 2 0 0 1 2.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0 1 22 16.92z" stroke="#F06A6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                +1 (555) 000-0000
              </Link>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#18181e] mb-2">Visit us</h3>
              <p className="text-gray-600 text-sm mb-2">Chat to us in person at our Islamabad HQ.</p>
              <Link href="#" className="flex items-center gap-2 text-[#F06A6A] hover:underline font-medium text-sm">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M12 21c-4.97 0-9-4.03-9-9 0-4.97 4.03-9 9-9s9 4.03 9 9c0 4.97-4.03 9-9 9zm0-13a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" stroke="#F06A6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Sarai Kharbuza, Opposite to E-16, GT Road, Islamabad, Pakistan.
              </Link>
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