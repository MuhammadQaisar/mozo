import React from "react";
import SectionWrapper from "./SectionWrapper";
import { poppins, urbanist } from "./ui/font";

const AboutUsStatements = () => {
  return (
    <SectionWrapper className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 grid grid-cols-1 gap-12">
     


        {/* Second Column: Vision and Mission Cards */}
        <div>
          <div className="grid grid-cols-2 gap-4">
            {/* Card 1: Vision Content */}
            <div className="border-gray-300 pl-8">
              <h2
                className={`text-2xl font-bold text-[#1f2937] mb-4 ${urbanist.className}`}
              >
                Our Vision
              </h2>
              <p className={`text-xs leading-8 ${urbanist.className}`}>
                To be a global leader in technological innovation, transforming
                industries and enriching lives by creating intelligent,
                user-friendly, and sustainable software solutions. We envision a
                future where technology seamlessly integrates with human
                potential, unlocking new opportunities.
              </p>
            </div>

            {/* Card 2: Vision Icon */}
            <div className="flex items-center justify-center">
              <img
                src="/eye-2-svgrepo-com.svg"
                alt="Vision Icon"
                width="80"
                height="80"
              />
            </div>

            {/* Card 3: Mission Icon */}
            <div className="flex items-center justify-center">
              <img
                src="/dart-mission-goal-success-svgrepo-com.svg"
                alt="Mission Icon"
                width="80"
                height="80"
              />
            </div>

            {/* Card 4: Mission Content */}
            <div className="border-gray-300 pl-8">
              <h2
                className={`text-2xl font-bold text-[#1f2937] mb-4 ${urbanist.className}`}
              >
                Our Mission
              </h2>
              <p className={`text-xs leading-8 ${urbanist.className}`}>
                To deliver unparalleled software engineering services that
                empower businesses to achieve their strategic objectives. We
                build long-lasting partnerships based on trust and transparency,
                providing innovative and scalable solutions that exceed
                expectations and drive measurable value for our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutUsStatements;
