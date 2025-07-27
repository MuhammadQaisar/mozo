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
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Get your digital solutions
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F06A6A] to-black mt-2">
              delivered seamlessly
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
            {/* Connection Line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gray-300 z-0"
                 style={{
                   left: 'calc(16.67% + 2rem)',
                   right: 'calc(16.67% + 2rem)',
                   width: 'calc(66.67% - 4rem)'
                 }}>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center relative"
                >
                  {/* Numbered Circle */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className={`w-16 h-16 mx-auto mb-8 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg border-4 border-white relative z-20 ${
                      index === 0
                        ? 'bg-black'
                        : index === 1
                        ? 'bg-black'
                        : 'bg-[#F06A6A]'
                    }`}
                  >
                    {step.number}
                  </motion.div>

                  {/* Step Content */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                    className="px-4"
                  >
                    <h3 className="text-2xl font-bold text-black mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
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
