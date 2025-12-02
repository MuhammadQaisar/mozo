import React from "react";
import { urbanist } from "./ui/font";

const IntroductionSection = () => {
  return (
    <section className="pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            className={`text-3xl md:text-4xl font-extrabold text-[#1f2937] mb-4 ${urbanist.className}`}
          >
            Who We Are
          </h2>
          <p
            className={`mt-4 max-w-2xl mx-auto text-lg text-gray-800 ${urbanist.className}`}
          >
            Mozo Technologies is a team of passionate and experienced software
            engineers, designers, and project managers dedicated to helping
            businesses succeed in the digital world. We are committed to
            delivering high-quality, innovative, and scalable solutions that
            drive growth and create value for our clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
