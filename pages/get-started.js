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
      <div className='pt-28 pb-12'>
        <div className='custom-screen text-gray-600'>
          <div className='max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none'>
            <div className='max-w-lg sm:text-center lg:text-left'>
              <h1 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                Talk to a Blinder expert
              </h1>
              <p className='mt-3'>
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
            <div className='flex-1 mt-12 sm:max-w-lg lg:max-w-md lg:mt-0'>
              <form onSubmit={handleSubmit} className='space-y-5 font-medium'>
                <div>
                  <label>Full name</label>
                  <Input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    aria-label='Full name'
                    type='text'
                    required
                    className='mt-2 focus:border-indigo-600'
                  />
                </div>
                <div>
                  <label>Email</label>
                  <Input
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    aria-label='Email'
                    type='email'
                    required
                    className='mt-2 focus:border-indigo-600'
                  />
                </div>
                <div>
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    aria-label='Message'
                    required
                    className='w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'
                  />
                </div>
                <div>
                  <label>Service</label>
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
                    className='w-full text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 ring-offset-2 ring-indigo-600 focus:ring disabled:opacity-50'
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