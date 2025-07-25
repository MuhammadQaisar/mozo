import { motion } from 'framer-motion';
import { Check, Briefcase, Code, LifeBuoy } from 'lucide-react';
import Link from 'next/link';

/**
 * HowItWorks Component
 * Displays a step-by-step guide on how the service works, featuring an icon, title, and description for each step.
 * It uses Framer Motion for subtle entrance animations for the section title, description, and individual steps.
 */
const HowItWorks = () => {
  // Defines the steps for the "How It Works" section.
  // Each step includes an icon, a title, and a descriptive text.
  const steps = [
    {
      icon: <Briefcase size={32} style={{ color: '#F06A6A' }} />, // Icon for Consultation step
      title: 'Consultation',
      description: 'We start by understanding your business goals and challenges to ensure our solutions align with your vision.',
    },
    {
      icon: <Check size={32} style={{ color: '#F06A6A' }} />, // Icon for Planning & Strategy step
      title: 'Planning & Strategy',
      description: 'Our team develops a comprehensive plan and strategy to deliver a solution that meets your needs and budget.',
    },
    {
      icon: <Code size={32} style={{ color: '#F06A6A' }} />, // Icon for Development & Deployment step
      title: 'Development & Deployment',
      description: 'We build and deploy your solution using the latest technologies and best practices, ensuring a seamless experience.',
    },
    {
      icon: <LifeBuoy size={32} style={{ color: '#F06A6A' }} />, // Icon for Ongoing Support step
      title: 'Ongoing Support',
      description: 'Our commitment doesn’t end at deployment. We provide continuous support to ensure your solution runs smoothly.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white"> {/* Section container with ID for navigation and styling */}
      <div className="container mx-auto px-4"> {/* Centered container for content with horizontal padding */}
        {/* Section Title and Description */}
        <motion.div
          initial={{ opacity: 0, y: -50 }} // Initial animation state: hidden and slightly above final position
          animate={{ opacity: 1, y: 0 }} // Animate to: fully visible at final position
          transition={{ duration: 0.5 }} // Animation duration
          className="text-center mb-12" // Center-align text and add bottom margin
        >
          <h2 className="text-4xl font-bold text-black">How It Works</h2> {/* Main title */}
          <p className="text-lg text-gray-600 mt-4"> {/* Sub-title/description */}
            A simple, transparent process to get you from idea to execution.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Responsive grid for steps */}
          {steps.map((step, index) => (
            <motion.div
              key={index} // Unique key for each mapped item
              initial={{ opacity: 0, y: 50 }} // Initial animation state for each step
              animate={{ opacity: 1, y: 0 }} // Animate to: fully visible at final position
              transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered animation delay for each step
              className="bg-gray-50 p-8 rounded-lg shadow-md text-center" // Styling for each step card
            >
              {/* Icon Container */}
              <div className="flex items-center justify-center h-16 w-16 mx-auto bg-white rounded-full shadow-lg mb-6"> {/* Icon styling */}
                {step.icon} {/* Renders the icon for the current step */}
              </div>
              <h3 className="text-2xl font-semibold text-black mb-4">{step.title}</h3> {/* Step title */}
              <p className="text-gray-600">{step.description}</p> {/* Step description */}
            </motion.div>
          ))}
        </div>

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Initial animation state for the CTA button
          animate={{ opacity: 1, y: 0 }} // Animate to: fully visible at final position
          transition={{ duration: 0.5, delay: 0.8 }} // Animation delay for the CTA button
          className="text-center mt-12" // Center-align text and add top margin
        >
          <Link 
              href="/get-started" 
              className="bg-[#F06A6A] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-opacity-90 transition-all duration-300" // Styling for the CTA button
          >
              Get Started
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
