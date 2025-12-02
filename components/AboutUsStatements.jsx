import React from "react";
import SectionWrapper from "./SectionWrapper";
import { urbanist } from "./ui/font";
import Image from "next/image";

const AboutUsStatements = () => {
  return (
    <SectionWrapper className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Vision Card */}
          <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2">
            <div className="flex justify-center mb-6">
              <div className="">
                <Image
                  src="/bulb-light-on-svgrepo-com.svg"
                  alt="Vision Icon"
                  width="90"
                  height="90"
                  className="text-blue-600"
                />
              </div>
            </div>
            <h2
              className={`text-3xl font-extrabold text-gray-900 mb-4 text-center ${urbanist.className}`}
            >
              Our Vision
            </h2>
            <p className={`text-lg leading-relaxed text-gray-600 text-center ${urbanist.className}`}>
              To be a global leader in technological innovation, transforming
              industries and enriching lives by creating intelligent,
              user-friendly, and sustainable software solutions. We envision a
              future where technology seamlessly integrates with human
              potential, unlocking new opportunities.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2">
            <div className="flex justify-center mb-6">
              <div className="">
                <Image
                  src="/dart-mission-goal-success-svgrepo-com.svg"
                  alt="Mission Icon"
                  width="70"
                  height="70"
                  className="text-green-600"
                />
              </div>
            </div>
            <h2
              className={`text-3xl font-extrabold text-gray-900 mb-4 text-center ${urbanist.className}`}
            >
              Our Mission
            </h2>
            <p className={`text-lg leading-relaxed text-gray-600 text-center ${urbanist.className}`}>
              To deliver unparalleled software engineering services that
              empower businesses to achieve their strategic objectives. We
              build long-lasting partnerships based on trust and transparency,
              providing innovative and scalable solutions that exceed
              expectations and drive measurable value for our clients.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutUsStatements;
