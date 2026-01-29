import React from "react";
import { urbanist } from "./ui/font";

const IntroductionSection = () => {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <div className="flex flex-col md:flex-row md:justify-between items-start gap-6 mb-4">
            <div className="w-full md:w-1/2">
              <p className="inline-block text-xl font-normal border border-gray-500 px-4 py-2 rounded-full text-gray-500">
                Overview
              </p>
              <h2
            className={`text-3xl md:text-3xl mt-2 font-normal text-[#1f2937] mb-4 ${urbanist.className}`}
          >
            Who We <br /> Are
          </h2>
          <p
            className={`max-w-md mx-2 text-lg text-gray-800 ${urbanist.className}`}
          >
            We are a team of engineers <br /> to helping businesses in the{" "}
            <br /> digital world.
          </p>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="inline-block text-xl font-normal border border-gray-500 px-4 py-2 rounded-full text-gray-500">
                Our Story
              </h3>
              <p className="text-left text-3xl text-gray-900 mt-2">
                Founded in 2022
              </p>
              <p className={`mt-4 text-left text-lg text-gray-700 ${urbanist.className}`}>
                Mozo Technologies emerged from a vision to revolutionize how businesses interact with the digital landscape. Starting with a small, dedicated team, we quickly grew, driven by innovation and a commitment to delivering cutting-edge solutions.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
