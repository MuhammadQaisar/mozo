import { motion } from 'framer-motion';
import { Check, Briefcase, Code, LifeBuoy } from 'lucide-react';
import Link from 'next/link';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Briefcase size={32} style={{ color: '#F06A6A' }} />,
      title: 'Consultation',
      description: 'We start by understanding your business goals and challenges to ensure our solutions align with your vision.',
    },
    {
      icon: <Check size={32} style={{ color: '#F06A6A' }} />,
      title: 'Planning & Strategy',
      description: 'Our team develops a comprehensive plan and strategy to deliver a solution that meets your needs and budget.',
    },
    {
      icon: <Code size={32} style={{ color: '#F06A6A' }} />,
      title: 'Development & Deployment',
      description: 'We build and deploy your solution using the latest technologies and best practices, ensuring a seamless experience.',
    },
    {
      icon: <LifeBuoy size={32} style={{ color: '#F06A6A' }} />,
      title: 'Ongoing Support',
      description: 'Our commitment doesn’t end at deployment. We provide continuous support to ensure your solution runs smoothly.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-black">How It Works</h2>
          <p className="text-lg text-gray-600 mt-4">
            A simple, transparent process to get you from idea to execution.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 p-8 rounded-lg shadow-md text-center"
            >
              <div className="flex items-center justify-center h-16 w-16 mx-auto bg-white rounded-full shadow-lg mb-6">
                {step.icon}
              </div>
              <h3 className="text-2xl font-semibold text-black mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link 
              href="/get-started" 
              className="bg-[#F06A6A] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-opacity-90 transition-all duration-300"
          >
              Get Started
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
