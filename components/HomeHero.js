'use client';

import React from 'react';
import { poppins, montserrat } from './ui/font';
import Link from 'next/link';
import Image from 'next/image';

const HomeHero = () => {
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
        style.top = '0%';
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
    <section className="bg-white py-20 md:py-32">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Headline + copy */}
          <div className="text-center md:text-left">
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#0b0b0b] to-[#4a4a4a] tracking-wide ${poppins.className}`}>
              Transforming Ideas into
              <br/>
              <span className='inline-block mb-4'>High-Performance</span>  <span className="text-[#F06A6A]">Software Solutions</span>
              <br/>
             
            </h1>

            <p className={`mt-6 max-w-2xl text-gray-700 text-lg sm:text-xl leading-relaxed ${montserrat.className}`}>
              From concept to launch, we deliver complete software solutions that drive your business forward with cutting-edge technology and lightning-fast performance.
            </p>

            <div className="mt-12">
              <Link
                href="/get-started"
                className="inline-block bg-[#F06A6A] hover:bg-[#212121] text-white font-bold rounded-lg px-8 py-4 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Contact us
              </Link>
            </div>
          </div>

          {/* Right: tech badges + subtle network background */}
          <div className="relative w-full h-auto sm:h-80 md:h-96 hidden sm:block">
            {/* faint network lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 600" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#bfbfbf" strokeWidth="1" fill="none">
                <polyline points="40,520 200,320 380,480 540,240 760,520" />
                <polyline points="20,160 160,260 300,120 520,220 760,80" />
                <polyline points="80,360 240,200 420,340 600,160" />
              </g>
            </svg>

            {/* floating tech cards */}
            <div className="relative hidden sm:flex flex-wrap justify-center items-center gap-4 sm:absolute sm:inset-0">
              {technologies.map((tech, index) => (
                <div
                  key={tech.name}
                  className="relative w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-lg shadow-lg flex items-center justify-center p-4 sm:absolute"
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
