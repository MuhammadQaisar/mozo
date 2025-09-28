'use client';

import React, { useState } from 'react';
import { poppins, montserrat } from './ui/font';
import Link from 'next/link';
import Image from 'next/image';

const HomeHero = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Array of technology names and their logos
  const technologies = [
    { name: 'AWS', logo: '/icons/aws.svg' },
    { name: 'React', logo: '/icons/reactjs.svg' },
    { name: 'Nodejs', logo: '/icons/nodejs.svg' },
    { name: 'CI/CD', logo: '/icons/gitlab.svg' },
    { name: 'Django', logo: '/icons/python.svg' },
    { name: 'Shopify', logo: '/icons/shopify.svg' },
    { name: 'Laravel', logo: '/icons/wordpress.svg' },
  ];

  // Function to generate random positions and animation delays
  const getCardStyle = (index) => {
    const style = {};
    switch (index) {
      case 0: // AWS
        style.top = '5%';
        style.left = '75%';
        break;
      case 1: // React
        style.top = '25%';
        style.left = '10%';
        break;
      case 2: // Nodejs
        style.top = '-10%';
        style.left = '30%';
        break;
      case 3: // CI/CD
        style.top = '55%';
        style.left = '85%';
        break;
      case 4: // Django
        style.top = '75%';
        style.left = '20%';
        break;
      case 5: // Shopify
        style.top = '40%';
        style.left = '50%';
        break;
      case 6: // Laravel
        style.top = '85%';
        style.left = '65%';
        break;
      default:
        break;
    }
    
    return style;
  };

  return (
        <section
          className="pb-0 pt-10 md:py-20 mt-20"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Left: Headline + copy */}
          <div className="text-center sm:text-left">
            <h1 className={`text-4xl sm:text-5xl md:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-[#1f2937] tracking-wide ${montserrat.className}`}>
              Transforming Ideas into
              <br/>
              <span className="text-[#F06A6A] capitalized">High-Performance software</span>
              <br/>
             
            </h1>

           

            <p className={`mt-6 max-w-2xl text-gray-700 :text-xl text-md leading-relaxed ${montserrat.className}`}>
              From concept to launch, we deliver complete software solutions that drive your business forward with cutting-edge technology and lightning-fast performance.
            </p>

            <div className="mt-6">
              <Link
                href="/get-started"
                className="inline-block border-2 border-[#F06A6A] hover:bg-[#F06A6A] hover:text-white hover:border-[#F06A6A] text-[#F06A6A] 1f2937] font-bold rounded-lg px-8 py-4 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Getting Started With Us
              </Link>
            </div>
          </div>

          {/* Right: tech badges + subtle network background */}
          <div className="relative w-full h-80 md:h-96 hidden md:block overflow-visible">
            {/* faint network lines (SVG) */}
           

            {/* floating tech cards */}
            <div className="relative hidden sm:flex flex-wrap justify-center items-center gap-4 sm:absolute sm:inset-0">
              {technologies.map((tech, index) => (
                <div
                  key={tech.name}
                  className="relative w-20 h-20 sm:w-20 sm:h-20 bg-white rounded-lg flex items-center justify-center p-4 sm:absolute border-2 border-gray-200 shadow-lg"
                  style={getCardStyle(index)}
                >
                  <Image src={tech.logo} alt={tech.name} width={100} height={100} className="grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;