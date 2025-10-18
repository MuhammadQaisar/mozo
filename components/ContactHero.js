'use client';

import React from 'react';
import { poppins, urbanist } from './ui/font';

const ContactHero = () => {
  return (
            <section className="relative py-5 md:py-8 mt-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className={`text-4xl md:text-5xl font-extrabold text-black ${urbanist.className}`}>
          Contact <span className="text-[#F06A6A]">Us</span>
        </h1>
        <p className="mt-6 text-lg md:text-md text-gray-600 max-w-3xl mx-auto">
          Have a question or a project in mind? We would love to hear from you.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;