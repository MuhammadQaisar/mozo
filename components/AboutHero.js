"use client";
import React from "react";
import { urbanist } from "./ui/font";
import GradientWrapper from "./GradientWrapper";

const AboutHero = () => {
  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-semibold text-gray-700 uppercase mb-2">
          About Us
        </p>
        <h1
          className={`text-4xl md:text-6xl font-extrabold text-[#1f2937] mb-6 leading-tight ${urbanist.className}`}
        >
          The Right Partner for Your Digital Success
        </h1>
        <p
          className={`text-lg leading-relaxed text-gray-800 max-w-3xl mx-auto ${urbanist.className}`}
        >
          Mozo Technologies is a leading innovator in software development,
          dedicated to empowering businesses with cutting-edge technological
          solutions. We specialize in crafting bespoke software, leveraging
          advanced AI/ML, robust web development, intuitive UI/UX design, and
          scalable cloud operations to drive efficiency and foster growth for
          our clients worldwide.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
