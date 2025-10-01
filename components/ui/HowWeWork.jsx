import { motion } from 'framer-motion';
import { montserrat, poppins } from './font';
import React from "react";
import Image from 'next/image';

const HowWeWork = () => {
  const steps = [
    {
      number: 1,
      icon: <Image src="/spark-svgrepo-com.svg" width={40} height={40} alt="Spark Icon" />,
      subtitle: 'Discover Your Vision',
      description: 'We begin with a comprehensive discovery session to understand your business goals, target audience, and project requirements.',
      deliverables: ['Project Brief', 'Technical Specification', 'Timeline & Milestones']
    },
    {
      number: 2,
      icon: <Image src="/plug-outlet-1-svgrepo-com.svg" width={40} height={40} alt="Plug Icon" />,
      subtitle: 'Bringing Ideas To Life',
      description: 'Our expert team designs and develops your solution using cutting-edge technologies and industry best practices.',
      deliverables: ['UI/UX Design', 'Development', 'Quality Assurance']
    },
    {
      number: 3,
      icon: <Image src="/market-svgrepo-com.svg" width={40} height={40} alt="Market Icon" />,
      subtitle: 'Time To Market',
      description: 'We deploy your project with thorough testing and provide comprehensive training and ongoing support.',
      deliverables: ['Deployment', 'Training', 'Ongoing Support']
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div className={`py-20 lg:py-28 ${montserrat.className}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          {/* <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full mb-8">
            <p className="text-sm text-gray-500 font-medium tracking-widest uppercase mb-3">
              How We Work
    </p>
          </div> */}
          <h2 className={`text-3xl sm:text-4xl md:text-4xl font-extrabold text-gray-800 mb-6 ${montserrat.className}`}>
            How We <span className="text-[#F06A6A]">Work </span>Together
          </h2> 
          <p className=":text-xl text-md text-gray-600 max-w-xl mx-auto leading-relaxed">
            Our proven three-step process ensures your project is delivered on time and exceeds expectations.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative max-w-9xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-100 transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-5 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative group"
              >
                <div className="bg-[#F0F0F0] backdrop-blur-sm rounded-lg p-8 shadow-lg border border-gray-300 transition-all duration-300 h-full flex flex-col group-hover:border-gray-200">
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                        <div className="text-4xl mr-4">{step.icon}</div>
                        <div className={`text-gray-400 font-normal text-lg ${montserrat.className}`}>
                            Step {step.number}
                            <h3 className="text-lg font-bold text-gray-900 mb-1 transition-colors duration-300">
                        {step.subtitle}
                      </h3>
                        </div>
                    </div>
                    <div className="mb-6">
                      
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </div>

                    <div className="mt-auto">
                      <h4 className="text-sm font-bold text-gray-800 mb-4 tracking-wider">Key Deliverables:</h4>
                      <div className="space-y-2">
                        {step.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 text-[#1f2937] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.06l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                            </svg>
                            {deliverable}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
    </div>
  );
};

export default HowWeWork;
