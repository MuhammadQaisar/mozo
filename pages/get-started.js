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
    fullName: "",
    email: "",
    message: "",
    services: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const servicesItems = [
    "Mobile development",
    "UI/UX Design",
    "web development",
    "SEO",
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
    console.log('Form submit started');
    console.log('Form data:', formData);
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      console.log('Making fetch request...');
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => {
        console.log('Request timed out');
        controller.abort();
      }, 10000);
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      console.log('Fetch completed, status:', response.status);
      console.log('Response headers:', response.headers);
      
      // Add this to see the actual response
      const responseText = await response.text();
      console.log('Response body:', responseText);
      
      if (response.ok) {
        console.log('Response OK - setting success status');
        setSubmitStatus('success');
        setFormData({
          fullName: "",
          email: "",
          message: "",
          services: []
        });
      } else {
        console.log('Response not OK - setting error status');
        setSubmitStatus('error');
      }
      
    } catch (error) {
      console.error('Fetch error details:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
      setSubmitStatus('error');
    } finally {
      console.log('Setting isSubmitting false');
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact us - Mozo Technologies</title>
      </Head>
      <div className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4 text-gray-700'>
          <div className='max-w-6xl mx-auto lg:flex lg:gap-16 items-start'>
            <div className='lg:w-1/2 sm:text-center lg:text-left mb-12 lg:mb-0'>
              <h1 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                Talk to a Blinder expert
              </h1>
              <p className='mt-3 text-lg leading-relaxed'>
                We are here to help. Get in touch with sales our press team and
                let us know how we can help, or shoot us an email on{" "}
                <Link
                  href='mailto:team@mozotechnologies.com'
                  target='_blank'
                  rel='noreferrer'
                  className='text-indigo-600 hover:text-indigo-400 font-medium duration-150'>
                  team@mozotechnologies.com.
                </Link>
              </p>
            </div>
            <div className='flex-1 bg-white p-8 rounded-lg shadow-lg'>
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full name</label>
                  <Input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    aria-label='Full name'
                    type='text'
                    required
                    className='mt-1 block w-full px-3 py-2 text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <Input
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    aria-label='Email'
                    type='email'
                    required
                    className='mt-1 block w-full px-3 py-2 text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    aria-label='Message'
                    required
                    className='mt-1 block w-full h-36 px-3 py-2 resize-none appearance-none bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-500'
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Service</label>
                  <ul className='mt-3 flex flex-wrap gap-x-8 gap-y-3 font-normal max-w-md sm:gap-x-16'>
                    {servicesItems.map((item, idx) => (
                      <li key={idx} className='flex gap-x-2 items-center'>
                        <Checkbox 
                          id={`service-${idx}`}
                          checked={formData.services.includes(item)}
                          onChange={(e) => handleServiceChange(item, e.target.checked)}
                        />
                        <label htmlFor={`service-${idx}`} className='text-sm'>
                          {item}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                    Sorry, there was an error sending your message. Please try again.
                  </div>
                )}

                <div className='pt-1'>
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed'
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </Button>
                </div>
              </form>
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