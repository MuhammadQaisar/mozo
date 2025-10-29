"use client";

import React from "react";
import { urbanist } from "./ui/font";
import Link from "next/link";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

const HomeHero = () => {
  // Array of technology names and their logos
  const technologies = [
    { name: "AWS", logo: "/icons/aws.svg" },
    { name: "React", logo: "/icons/reactjs.svg" },
    { name: "Nodejs", logo: "/icons/nodejs.svg" },
    { name: "CI/CD", logo: "/icons/gitlab.svg" },
    { name: "Django", logo: "/icons/python.svg" },
    { name: "Shopify", logo: "/icons/shopify.svg" },
    { name: "Laravel", logo: "/icons/wordpress.svg" },
  ];

  return (
    <SectionWrapper>
      <div className="relative max-w-7xl mt-18 mx-auto px-6 lg:px-8 text-center">
        {/* Headline */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#05243D] to-[#68A063] tracking-wide animate-fade-in-down ${urbanist.className}`}
        >
          <span className="block mb-2">Transforming Ideas into</span>
          <span className="text-[#F06A6A] block">High Performance Software</span>
          
        </h1>

        {/* Sub-headline */}
        <p
          className={`mt-6 max-w-3xl mx-auto text-gray-600 text-lg md:text-xl leading-relaxed animate-fade-in-up ${urbanist.className}`}
        >
          From concept to launch, we deliver complete software solutions that
          drive your business forward with cutting-edge technology and
          lightning-fast performance.
        </p>

        {/* Call to Action Button */}
        <div className="mt-10 animate-fade-in-up">
          <Link
            href="/get-started"
            className="inline-block border-2 border[#05243D] hover:bg-opacity-90 text-[#05243D] font-bold rounded-lg px-10 py-4 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Started With Us
          </Link>
        </div>

        {/* Technology Logos */}
        <div className="mt-20">
          <p
            className={`text-sm font-semibold text-gray-500 uppercase tracking-wider ${urbanist.className}`}
          >
            Enabling Technologies
          </p>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="group flex items-center justify-center p-2"
              >
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={60}
                  height={60}
                  className="grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out transform group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HomeHero;
