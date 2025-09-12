import { motion } from 'framer-motion';
import { montserrat } from './font';
import React from "react";
import HowWeWork from './HowWeWork';
import CoreCompetencies from './CoreCompetencies';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className={`bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden ${montserrat.className}`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#F06A6A]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-black/3 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <HowWeWork />
        {/* <CoreCompetencies /> */}
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
