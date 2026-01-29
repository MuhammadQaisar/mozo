"use client";

import React from "react";
import { poppins, urbanist } from "./ui/font";

const ServiceHero = () => {
  return (
    <section className="relative mt-12 pt-16 md:pt-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start md:justify-evenly text-center md:text-left gap-8 md:gap-0">
        <p className="text-xl font-normal border border-gray-500 px-4 py-2 mt-2 rounded-full text-gray-500 whitespace-nowrap">
          Our Services
        </p>
        <h1
          className={`text-4xl ml-18 md:text-6xl font-extrabold text-[#1f2937] leading-tight max-w-md ${urbanist.className}`}
        >
          Solutions that Drive _digital Success
        </h1>
        <p
          className={`text-xl font-md leading-relaxed text-gray-600 max-w-md ${urbanist.className}`}
        >
          We offer a comprehensive suite of services to help you achieve your
          digital goals from web development to AI-powered solutions.
        </p>
      </div>
    </section>
  );
};

export default ServiceHero;
