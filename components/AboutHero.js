'use client'; // Mark as a client component

import React from 'react';
import { poppins } from './ui/font';

const AboutHero = () => {
  return (
    <section className="relative py-10 md:py-16 mt-10">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className={`text-4xl md:text-5xl font-extrabold text-black ${poppins.className}`}>
          About <span className="text-[#F06A6A]">Us</span>
        </h1>
        <p className="mt-6 text-lg md:text-md text-gray-600 max-w-3xl mx-auto">
          We are a team of passionate innovators, dedicated to crafting cutting-edge digital solutions that empower businesses and drive success in a rapidly evolving technological landscape.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;