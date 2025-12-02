"use client";

import React from "react";
import { poppins, urbanist } from "./ui/font";

const ServiceHero = () => {
  return (
    <section className="relative pt-16 md:pt-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-semibold text-gray-700 uppercase mb-2">
          Our Services
        </p>
        <h1
          className={`text-4xl md:text-5xl font-extrabold text-[#1f2937] mb-6 leading-tight ${urbanist.className}`}
        >
          Innovative Solutions for Your Digital Success
        </h1>
        <p
          className={`text-lg leading-relaxed text-gray-800 max-w-3xl mx-auto ${urbanist.className}`}
        >
          We offer a comprehensive suite of services to help you achieve your
          digital goals. From web development to AI-powered solutions, we have
          the expertise to bring your vision to life.
        </p>
      </div>
    </section>
  );
};

export default ServiceHero;
