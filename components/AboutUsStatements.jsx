import React from 'react';
import Image from 'next/image';
import SectionWrapper from './SectionWrapper';
import { poppins } from './ui/font';

const AboutUsStatements = () => {
  return (
    <SectionWrapper className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700">
        {/* First Row: About Us Description */}
        <div className="mb-8"> {/* Added mb-8 for spacing below this row */}
          <div className="">
            <h2 className={`text-3xl md:text-2xl font-extrabold text-[#1f2937] mb-6 ${poppins.className}`}>
              Right Partner for your Digital Success
            </h2>
            <p className="text-medium leading-relaxed">
              Mozo Technologies is a leading innovator in software development, dedicated to empowering businesses with cutting-edge technological solutions. We specialize in crafting bespoke software, leveraging advanced AI/ML, robust web development, intuitive UI/UX design, and scalable cloud operations to drive efficiency and foster growth for our clients worldwide. Our commitment to excellence and client-centric approach ensures that every project we undertake is delivered with precision, quality, and a deep understanding of our clients' unique challenges and aspirations.
            </p>
          </div>
        </div>

        {/* Second Row: Vision and Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Grid for side-by-side Vision and Mission */}
          {/* Our Vision Card */}
          <div className="">
            <h2 className={`text-3xl md:text-xl font-extrabold text-[#1f2937] mb-6 flex items-center gap-3 ${poppins.className}`}>
              <Image src="/eye-2-svgrepo-com.svg" alt="Vision Icon" width={40} height={40} className="flex-shrink-0" />
              Our Vision
            </h2>
            <p className="text-medium leading-relaxed">
              To be a global leader in technological innovation, transforming industries and enriching lives by creating intelligent, user-friendly, and sustainable software solutions. We envision a future where technology seamlessly integrates with human potential, unlocking new opportunities.
            </p>
          </div>

          {/* Our Mission Card */}
          <div className="">
            <h2 className={`text-3xl md:text-xl font-extrabold text-[#1f2937] mb-6 flex items-center gap-3 ${poppins.className}`}>
              <Image src="/dart-mission-goal-success-svgrepo-com.svg" alt="Mission Icon" width={40} height={40} className="flex-shrink-0" />
              Our Mission
            </h2>
            <p className="text-medium leading-relaxed">
              To deliver unparalleled software engineering services that empower businesses to achieve their strategic objectives. We build long-lasting partnerships based on trust and transparency, providing innovative and scalable solutions that exceed expectations and drive measurable value for our clients.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutUsStatements;
