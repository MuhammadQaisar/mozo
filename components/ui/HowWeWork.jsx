import { motion } from "framer-motion";
import { urbanist } from "./font";
import React from "react";

const HowWeWork = () => {
  const steps = [
    {
      number: "01",
      title: "Ideate",
      description:
        "We start by understanding your business goals and exploring the best AI-driven ideas to solve your challenges.",
    },
    {
      number: "02",
      title: "Design",
      description:
        "We design user-friendly workflows and smart system architecture tailored to your needs.",
    },
    {
      number: "03",
      title: "Develop",
      description:
        "Our team builds the solution using the right technologies, focusing on quality and speed.",
    },
    {
      number: "04",
      title: "Test",
      description:
        "We test everything thoroughly to ensure it works well, is secure, and performs reliably.",
    },
    {
      number: "05",
      title: "Launch",
      description:
        "Once ready, we deploy the solution and make sure it integrates smoothly into your existing systems.",
    },
    {
      number: "06",
      title: "Support",
      description:
        "After launch, we provide ongoing support, monitor performance, and improve the solution as your needs evolve.",
    },
  ];

  return (
    <div className={`w-full py-20 lg:py-28 bg-[#05243D] ${urbanist.className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            How <br />
            we work
          </h2>
          <p className="text-gray-400">
            Take a moment to get familiar with our approach.
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-8 items-start group"
            >
              <div className="flex-shrink-0 w-24">
                <span className="text-5xl font-bold text-white opacity-80">
                  {step.number}
                </span>
              </div>
              <div>
                <h3 className="text-[#ffbb00] text-xl font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-white text-lg opacity-90 max-w-2xl">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
