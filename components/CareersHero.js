'use client';

import React from 'react';
import { poppins } from './ui/font';
import Link from 'next/link';

const CareersHero = () => {
  return (
    <section className="relative py-10 md:py-16 mt-10">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className={`text-4xl md:text-5xl font-extrabold text-black ${poppins.className}`}>
          Join Our <span className="text-[#F06A6A]">Team</span>
        </h1>
        <p className="mt-6 text-lg md:text-md text-gray-600 max-w-3xl mx-auto">
          We are always looking for talented people to join our team. If you are passionate about technology and innovation, we would love to hear from you.
        </p>
      </div>
    </section>
  );
};

export default CareersHero;