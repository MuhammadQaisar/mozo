import { motion } from 'framer-motion';
import Link from 'next/link';

/**
 * HowItWorks Component
 * Displays a step-by-step guide on how the service works with a modern timeline design.
 * Features numbered circles connected by lines, similar to the provided screenshot design.
 * Uses brand colors and Framer Motion for smooth animations.
 */
const HowItWorks = () => {
  // Defines the steps for the "How It Works" section.
  // Each step includes a step number, title, and descriptive text.
  const steps = [
    {
      number: 1,
      title: 'Discovery & Planning',
      description: 'We start by understanding your business goals, target audience, and project requirements to create a comprehensive strategy tailored to your needs.',
    },
    {
      number: 2,
      title: 'Design & Development',
      description: 'Our expert team designs and develops your solution using cutting-edge technologies and best practices, ensuring optimal performance and user experience.',
    },
    {
      number: 3,
      title: 'Launch & Support',
      description: 'We deploy your project with thorough testing and provide ongoing support to ensure everything runs smoothly and continues to meet your evolving needs.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Title and Description */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-4xl font-bold text-black mb-6">
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F06A6A] to-black mt-2">
              How It Works
            </span>
          </h2>
          <p className="text-lg text-[#F06A6A] font-medium">
            • Quick delivery in 2-4 weeks
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Steps Container */}
          <div className="relative">

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative h-full"
                >
                  {/* Card Container */}
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-gray-200 relative overflow-hidden group h-full flex flex-col">
                    {/* Background Gradient Accent */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F06A6A] to-red-600"></div>
                    
                    {/* Large Prominent Number */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                      className="text-center mb-6 pt-4"
                    >
                      <div className="w-14 h-14 mx-auto bg-gradient-to-br from-[#F06A6A] to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl border-3 border-white">
                        {step.number}
                      </div>
                    </motion.div>

                    {/* Step Content */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                      className="text-center flex-grow flex flex-col"
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-4 whitespace-nowrap">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-6 font-normal flex-grow">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <Link
            href="/get-started"
            className="inline-block bg-gradient-to-r from-[#F06A6A] to-red-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Get Started Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
