"use client"; // Mark as a client component

import React from "react";
import { poppins, urbanist } from "./ui/font";

const AboutHero = () => {
  return (
    <section className="relative py-10 md:py-16 mt-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mb-16 p-8 bg-white shadow-lg rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div> {/* First column for title */}
            <p className="text-sm font-semibold text-gray-700 uppercase mb-2">About Us</p>
            <h2
              className={`text-3xl md:text-4xl font-extrabold text-[#1f2937] mb-8 ${urbanist.className}`}
            >
              The Right Partner for Your Digital Success
            </h2>
          </div>
          <div> {/* Second column for description */}
            <p className={`mt-28 text-base leading-8 text-gray-700 ${urbanist.className}`}>
              Mozo Technologies is a leading innovator in software development,
              dedicated to empowering businesses with cutting-edge technological
              solutions. We specialize in crafting bespoke software, leveraging
              advanced AI/ML, robust web development, intuitive UI/UX design, and
              scalable cloud operations to drive efficiency and foster growth for
              our clients worldwide. Our commitment to excellence and
              client-centric approach ensures that every project we undertake is
              delivered with precision, quality, and a deep understanding of our
              clients' unique challenges and aspirations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
