"use client";

import React from "react";
import { poppins, urbanist } from "./ui/font";

const ServiceHero = () => {
  return (
    <section className="relative py-10 md:py-16 mt-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            {" "}
            {/* First column for 'Our Offerings' text and title */}
            <p className="text-sm font-semibold text-gray-500 uppercase mb-2">
              Services
            </p>
            <h1
              className={`text-3xl md:text-4xl font-extrabold text-[#1f2937] mb-6 ${urbanist.className}`}
            >
              <span className="text-[#F06A6A]">
                We offers wide range of services to help you achieve your
                digital goals.
              </span>
            </h1>
          </div>
          <div>
            {" "}
            {/* Second column for description */}
            <p className={`mt-4 text-sm leading-8 ${urbanist.className}`}>
              We offer a wide range of services to help you achieve your digital
              goals. From web development to AI solutions, we've got you
              covered.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
