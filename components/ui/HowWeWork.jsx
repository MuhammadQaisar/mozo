import { motion } from 'framer-motion';
import { montserrat } from './font';
import React from "react";

const HowWeWork = () => {
  const steps = [
    {
      number: 1,
      icon: "🔍",
      subtitle: 'UNDERSTANDING YOUR VISION',
      description: 'We begin with a comprehensive discovery session to understand your business goals, target audience, and project requirements.',
      deliverables: ['Project Brief', 'Technical Specification', 'Timeline & Milestones']
    },
    {
      number: 2,
      icon: "⚡",
      subtitle: 'BRINGING IDEAS TO LIFE',
      description: 'Our expert team designs and develops your solution using cutting-edge technologies and industry best practices.',
      deliverables: ['UI/UX Design', 'Development', 'Quality Assurance']
    },
    {
      number: 3,
      icon: "🚀",
      subtitle: 'TIME TO MARKET',
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
    <div className={`py-16 lg:py-20 ${montserrat.className}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-3 py-1.5 bg-[#1f2937] rounded-full mb-6">
            <span className="w-2 h-2 bg-[#F06A6A] rounded-full mr-2.5 animate-pulse"></span>
            <span className="text-xs font-medium text-white uppercase tracking-wider">Our Process</span>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
            A Straightforward, <span className="text-[#F06A6A]">Results-Driven </span>Process
          </h2> 
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our proven three-step process ensures your project is delivered on time and exceeds expectations.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gray-200 transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative"
              >
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 h-full flex flex-col">
                  <div className="relative z-10">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#1f2937] transition-colors duration-300">
                        {step.subtitle}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>

                    <div className="mt-auto">
                      <h4 className="text-sm font-bold text-gray-800 mb-2 uppercase tracking-wider">Key Deliverables:</h4>
                      <div className="space-y-1.5">
                        {step.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-center text-medium text-gray-600">
                            <svg className="w-3.5 h-3.5 text-[#F06A6A] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
