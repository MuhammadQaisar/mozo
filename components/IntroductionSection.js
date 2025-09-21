import React from 'react';
import Image from 'next/image';
import { poppins } from './ui/font';

const IntroductionSection = () => (
  <section className="max-w-6xl mx-auto px-4 py-16">
    <h1 className={`text-4xl md:text-4xl font-extrabold text-center text-[#1f2937] mb-12 mt-20 ${poppins.className}`}>
      Empowering Your <span className="text-[#F06A6A]">Digital Dreams</span>
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Main Card */}
      <div className="md:col-span-2 flex flex-col justify-center rounded-3xl bg-gradient-to-r from-[#1f2937] to-[#F06A6A] p-8 text-white shadow-lg border border-[#F06A6A]">
        <div className="flex items-center mb-4">
          <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center mr-4">
            <Image src="/Mozo-favicon.svg" alt="Mozo Logo" width={35} height={35} />
          </div>
          <h2 className="text-xl font-bold">Discover Excellence Through Us!</h2>
        </div>
        <p className="text-gray-300">
          Mozo Technologies stands as the trusted companion for global enterprises, small and medium-sized businesses, as well as tech pioneers, all aiming to amplify their business worth.
        </p>
      </div>
      {/* Side Cards */}
      <div className="flex flex-col gap-8">
        <div className="rounded-3xl bg-white p-6 text-[#1f2937] shadow-lg border border-gray-200">
          <div className="flex items-center mb-2">
            <div className="h-8 w-8 rounded-full bg-[#F06A6A] flex items-center justify-center mr-3">
              <span ><Image src="/about-white-logo.svg" alt="Mozo Logo" width={25} height={25} /></span>
            </div>
            <span className="font-semibold">Founded </span>
          </div>
          <p className="text-sm text-gray-600">September 2016</p>

        </div>
        <div className="rounded-3xl bg-white p-6 text-[#1f2937] shadow-lg border-gray-200">
          <div className="flex items-center mb-2">
            <div className="h-8 w-8 rounded-full bg-[#F06A6A] flex items-center justify-center mr-3">
              <span> <Image src="/about-white-logo.svg" alt="Mozo Logo" width={25} height={25} /></span>
            </div>
            <span className="font-semibold">Over 500+</span>
          </div>
          <p className="text-sm text-gray-600">Successful projects</p>
        </div>
      </div>
    </div>
    {/* Bottom Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
      <div className="rounded-3xl bg-white p-6 shadow-lg border border-gray-200 text-[#1f2937]">
        <div className="flex items-center mb-2">
          <div className="h-8 w-10 rounded-full bg-[#F06A6A] flex items-center justify-center mr-3">
            <span> <Image src="/about-white-logo.svg" alt="Mozo Logo" width={25} height={25} /></span>
          </div>
          <span className="font-semibold">Supercharge Your Digital Transformation</span>
        </div>
        <p className="text-sm text-gray-600">
          Experience the power of rapid digital evolution with our expertise in agile and groundbreaking technologies, perfectly sculpted to fit your unique requirements.
        </p>
      </div>
      <div className="rounded-3xl bg-white p-6 shadow-lg border border-gray-200 text-[#1f2937]">
        <div className="flex items-center mb-2">
          <div className="h-8 w-8 rounded-full bg-[#F06A6A] flex items-center justify-center mr-3">
            <span> <Image src="/about-white-logo.svg" alt="Mozo Logo" width={25} height={25} /></span>
          </div>
          <span className="font-semibold">Crafting Your Dream Team</span>
        </div>
        <p className="text-sm text-gray-600">
          Partner with our 500+ software maestros to curate services that align flawlessly with your business objectives, creating a tailored solution just for you.
        </p>
      </div>
      <div className="rounded-3xl bg-white p-6 shadow-lg border border-gray-200 text-[#1f2937]">
        <div className="flex items-center mb-2">
          <div className="h-8 w-8 rounded-full bg-[#F06A6A] flex items-center justify-center mr-3">
            <span > <Image src="/about-white-logo.svg" alt="Mozo Logo" width={25} height={25} /></span>
          </div>
          <span className="font-semibold">Elevate Your Digital Landscape</span>
        </div>
        <p className="text-sm text-gray-600">
          Step into an era of optimized digital synergy as we seamlessly enhance and harmonize your digital world, fostering continuous expansion and unwavering scalability.
        </p>
      </div>
    </div>
  </section>
);

export default IntroductionSection;