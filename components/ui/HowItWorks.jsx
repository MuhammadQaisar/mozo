import { motion } from 'framer-motion';
import Link from 'next/link';
import { montserrat } from './font';
import React from "react";

/**
 * Enhanced HowItWorks Component
 * Modern, clean design with improved visual hierarchy and interactive elements.
 * Features glassmorphism effects, better animations, and consistent brand colors.
 */
const HowItWorks = () => {
  // Enhanced steps with icons and additional details
  const steps = [
    {
      number: 1,
      icon: "🔍",
      title: 'Discovery & Strategy',
      subtitle: 'Understanding Your Vision',
      description: 'We begin with a comprehensive discovery session to understand your business goals, target audience, and project requirements. Our team conducts thorough research and creates a strategic roadmap tailored to your specific needs.',
      duration: '1-2 weeks',
      deliverables: ['Project Brief', 'Technical Specification', 'Timeline & Milestones']
    },
    {
      number: 2,
      icon: "⚡",
      title: 'Design & Development',
      subtitle: 'Bringing Ideas to Life',
      description: 'Our expert team designs and develops your solution using cutting-edge technologies and industry best practices. We maintain constant communication and provide regular updates throughout the development process.',
      duration: '2-6 weeks',
      deliverables: ['UI/UX Design', 'Development', 'Quality Assurance']
    },
    {
      number: 3,
      icon: "🚀",
      title: 'Launch & Optimize',
      subtitle: 'Going Live Successfully',
      description: 'We deploy your project with thorough testing and provide comprehensive training. Our team offers ongoing support, monitoring, and optimization to ensure peak performance and continued success.',
      duration: '1 week',
      deliverables: ['Deployment', 'Training', 'Ongoing Support']
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const competencies = [
    {
      number: "01",
      title: "AI Driven Software Development",
      points: [
        "Data-driven AI solutions and enterprise application development",
        "AI model development and customization for tailored experiences",
        "AI & ML implementations led by in-house engineering experts",
        "AI & ML strategic consulting to help drive business transform",
      ],
      gradient: "bg-gradient-to-br from-[#2d2327] via-[#3a2c2f] to-[#363636]",
      arrow: true,
    },
    {
      number: "02",
      title: "Offshore & Nearshore Development",
      points: [
        "On-premises managed staff to ensure collaborative success and innovation",
        "Dedicated core capability centers and development hubs in MENSA and LATAM",
        "Domain tuned situational intelligence and deep business expertise to drive success",
      ],
      gradient: "bg-[#363636]",
      arrow: false,
    },
    {
      number: "03",
      title: "Global Capability Center as a Service",
      points: [
        "Access top-tier talent and expertise to drive meaningful outcomes across business verticals",
        "Leverage AI-powered infrastructure with seamless integration to foster efficiency and innovation",
        "Build high-performing, scalable, specialized teams through Centers of Excellence (CoEs)",
        "Empower growth across functions with our proprietary Diamond Team Structure (DTS)",
      ],
      gradient: "bg-[#363636]",
      arrow: false,
    },
  ];

  return (
    <section id="how-it-works" className={`py-20 lg:py-28 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden ${montserrat.className}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#F06A6A]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-black/3 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-[#F06A6A]/10 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#F06A6A] rounded-full mr-3 animate-pulse"></span>
            <span className="text-sm font-medium text-[#F06A6A] uppercase tracking-wider">Our Process</span>
          </div>
 <h2 className="text-center text-4xl md:text-5xl font-semi-bold mb-10 text-[#18181e] leading-tight">
			 How we  <br className="md:hidden" /> works together      
		</h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Our proven 3-step process ensures your project is delivered on time, within budget, and exceeds your expectations.
          </p>

         
        </motion.div>

        {/* Enhanced Steps Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Connection Lines for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F06A6A]/20 via-[#F06A6A]/40 to-[#F06A6A]/20 transform -translate-y-1/2 z-0"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={stepVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                {/* Step Card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-[#F06A6A]/30 transition-all duration-500 h-full flex flex-col relative overflow-hidden">
                  {/* Card Accent */}
                  <div className="absolute top-0 left-0 w-full h-1"></div>
                  
                  {/* Hover Effect Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F06A6A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    {/* Step Number and Icon */}
                   

                    {/* Step Content */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#F06A6A] transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-[#F06A6A] font-medium mb-4">{step.subtitle}</p>
                      <p className="text-gray-600 leading-relaxed text-base">
                        {step.description}
                      </p>
                    </div>

                    {/* Deliverables */}
                    <div className="mt-auto">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">Key Deliverables:</h4>
                      <div className="space-y-2">
                        {step.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 text-[#F06A6A] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.06l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                            </svg>
                            {deliverable}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Progress Indicator */}
                    <div className="mt-6 w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-[#F06A6A] to-red-500 h-2 rounded-full transition-all duration-1000 group-hover:w-full"
                        style={{ width: `${((index + 1) / steps.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Step Connector for Mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-8 mb-8">
                    <div className="w-0.5 h-12 bg-gradient-to-b from-[#F06A6A] to-red-500"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
              Let's discuss your project and create a customized plan that fits your timeline and budget.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/get-started"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#F06A6A] to-red-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Your Project
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-[#F06A6A] font-semibold rounded-2xl border-2 border-[#F06A6A] hover:bg-[#F06A6A] hover:text-white transition-all duration-300"
                >
                  Schedule a Call
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Core Competencies Section */}
        
      </div>

      {/* Enhanced Custom Styles */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(240, 106, 106, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(240, 106, 106, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
