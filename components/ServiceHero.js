"use client";

import React from "react";
import { poppins, urbanist } from "./ui/font";

const ServiceHero = () => {
  return (
    <section className="relative py-20 md:py-20 mt-10">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className={`text-4xl md:text-5xl font-extrabold text-black ${urbanist.className}`}
        >
          Our <span className="text-[#F06A6A]">Services</span>
        </h1>
        <p className="mt-6 text-lg md:text-md text-gray-600 max-w-3xl mx-auto">
          We offer a wide range of services to help you achieve your digital
          goals. From web development to AI solutions, we've got you covered.
        </p>
      </div>
    </section>
  );
};

export default ServiceHero;
