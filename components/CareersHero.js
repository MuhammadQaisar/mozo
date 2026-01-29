'use client';

import React from 'react';
import { poppins, urbanist } from './ui/font';
import Link from 'next/link';

const CareersHero = () => {
  return (
    <section className="relative py-10 md:py-16 mt-10">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center text-center md:text-left justify-between">
        <div className='flex-1'>
            <p className="inline-block text-xl font-normal border border-gray-500 px-4 py-2 rounded-full text-gray-500 ">
                Careers
            </p>
            <h1 className={`text-4xl md:text-5xl font-extrabold mt-10 text-black ${urbanist.className}`}>
           Working at Mozo Technologies <span className="text-[#F06A6A]"></span>
            </h1>
        </div>
        <p className="mt-6 md:mt-20 text-lg md:text-md text-gray-600 max-w-xl flex-1">
          We are always looking for talented people to join our team. If you are passionate about technology and innovation, we would love to hear from you.
        </p>
      </div>
    </section>
  );
};

export default CareersHero;