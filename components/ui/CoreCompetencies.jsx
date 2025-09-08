import { motion } from 'framer-motion';
import { montserrat } from './font';
import React from "react";

const CoreCompetencies = () => {
    const competencies = [
        {
          number: "01",
          title: "AI Driven Software Development",
          points: [
            "Data-driven AI solutions and enterprise application development",
            "AI model development and customization for tailored experiences",
            "AI & ML implementations led by in-house engineering experts",
          ],
        },
        {
          number: "02",
          title: "Offshore & Nearshore Development",
          points: [
            "On-premises managed staff to ensure collaborative success",
            "Dedicated core capability centers in MENSA and LATAM",
            "Domain tuned situational intelligence and deep business expertise",
          ],
        },
        {
          number: "03",
          title: "Global Capability Center as a Service",
          points: [
            "Access top-tier talent to drive meaningful outcomes",
            "Leverage AI-powered infrastructure with seamless integration",
            "Build high-performing, scalable, specialized teams (CoEs)",
          ],
        },
      ];

      const cardVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.98 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      };

    return (
        <div className={`py-16 lg:py-20 ${montserrat.className}`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
                    Core <span className="text-[#F06A6A]">Competencies</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Our expertise spans across a wide range of modern technologies and methodologies.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {competencies.map((item, idx) => (
                    <motion.div 
                        key={idx} 
                        className={`p-6 rounded-xl text-white bg-[#212121] shadow-lg flex flex-col relative overflow-hidden`}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div
                            className="absolute inset-0 w-full h-full"
                            style={{
                                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="1" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noise)" opacity="0.1"/></svg>')`,
                            }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#F06A6A]/10 via-transparent to-transparent"></div>

                        <div className="relative z-10">
                            <div className="flex items-start justify-between mb-3">
                                <span className="text-5xl font-bold opacity-40">{item.number}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <ul className="space-y-2 text-gray-300 flex-1 text-lg">
                                {item.points.map((point, pIdx) => (
                                    <li key={pIdx} className="flex items-start">
                                        <span className="mr-2.5 mt-1">-</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CoreCompetencies;
