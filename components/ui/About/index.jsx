
import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const About = () => {
  const aboutContent = [
    {
      title: 'Our Founding Story',
      description:
        'Founded in 2023 by a team of experienced engineers, Mozo Technologies was born from a shared vision: to make robust and secure IT solutions accessible to startups and businesses of all sizes. We noticed a critical gap in the market – while large corporations had the resources for comprehensive IT security, smaller companies were often left vulnerable.',
    },
    {
      title: 'Our Mission',
      description:
        'Our mission is to bridge that gap. We believe that every business, regardless of its size or industry, deserves the peace of mind that comes with a secure and reliable IT infrastructure. We specialize in creating tailored IT solutions that are not only secure but also scalable and easy to manage.',
    },
    {
      title: 'Our Clients',
      description:
        'Today, we are proud to serve a diverse range of clients across the fintech, healthcare, and e-commerce sectors. Our commitment to excellence and our passion for technology have made us a trusted partner for businesses looking to navigate the complexities of the digital world.',
    },
  ];

  return (
    <section id="about" className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-900">
            About Mozo Technologies
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Simplifying Secure IT for a Complex World
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:mt-20 md:grid-cols-3">
          {aboutContent.map((item, i) => (
            <motion.div
              key={i}
              className="overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <div className="p-8 px-4 sm:px-8">
                <h3 className="text-xl font-semibold text-gray-900 text-center">{item.title}</h3>
                <p className="mt-4 text-base text-gray-700 leading-relaxed text-center">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
