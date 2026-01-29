"use client";
import React from "react";
import Image from "next/image";
import { urbanist } from "./ui/font";
import GradientWrapper from "./GradientWrapper";
import SectionWrapper from "./SectionWrapper";

const AboutHero = () => {
  return (
    <SectionWrapper>
      <GradientWrapper>
        <div className="max-w-6xl mx-auto  text-left px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-center gap-6">
            <p className="inline-block text-xl font-normal border border-gray-500 px-4 py-2 rounded-full text-gray-500 ">
              About Us
            </p>
            <h1
              className={`text-4xl md:text-6xl ml-18 font-extrabold text-gray-900 text-center animate-fade-in-up ${urbanist.className}`}
              style={{ animationDelay: "0.2s" }}
            >
              Transform Your Visionary
              <br />
               Ideas Into Digital Realities
            </h1>
          </div>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex justify-center">
              <div
                className="rounded-lg overflow-hidden shadow-lg animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                <Image
                  src="/about-image.png"
                  width={800}
                  height={800}
                  alt="About Mozo"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <p
                className={`text-base md:text-lg leading-relaxed text-gray-600 max-w-2xl ${urbanist.className}`}
                style={{ animationDelay: "0.4s" }}
              >
                Mozo Technologies is a leading innovator in software
                development, dedicated to empowering businesses with
                cutting-edge technological solutions. We specialize in crafting
                bespoke software, leveraging advanced AI/ML, robust web
                development, intuitive UI/UX design, and scalable cloud
                operations to drive efficiency and foster growth for our clients
                worldwide.
              </p>
              <div className="mt-8 flex gap-8 bg-gray-100 p-9 rounded-2xl justify-between animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                <div>
                  <h3 className="text-4xl font-bold text-gray-700">50+</h3>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-gray-700">99%</h3>
                  <p className="text-gray-600">Client Satisfaction</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-gray-700">10+</h3>
                  <p className="text-gray-600">Years of Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </GradientWrapper>
    </SectionWrapper>
  );
};

export default AboutHero;
