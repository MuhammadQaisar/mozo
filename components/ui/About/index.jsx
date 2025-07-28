
import React from 'react';
import { motion } from 'framer-motion';

// Variants for Framer Motion animations on the About cards.
// Defines the initial (hidden) and animated (visible) states for the cards,
// including a staggered delay for each card's appearance.
const cardVariants = {
  hidden: { opacity: 0, y: 50 }, // Card is initially invisible and slightly below its final position.
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3, // Staggered delay based on the card's index.
      duration: 0.6, // Duration of the animation.
      ease: 'easeOut', // Easing function for a smooth animation.
    },
  }),
};

/**
 * About Component
 * Displays information about the company, including its founding story, mission, and client base.
 * Features a responsive grid layout for content cards and uses Framer Motion for entrance animations.
 */
const About = () => {
  // Content for the About section, structured as an array of objects.
  // Each object represents a card with a title and a detailed description.
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
    <section id="about" className="py-12 bg-gray-50 sm:py-16 lg:py-20"> {/* Section container with ID for navigation and responsive padding/background */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> {/* Centered content container with responsive horizontal padding */}
        {/* Section Header: Title and Subtitle */}
        <div className="text-center"> {/* Center-aligns the text within this div */}
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-900"> {/* Responsive font sizes for the main title */}
             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F06A6A] to-black mt-2">
              About Mozo Technologies
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600"> {/* Responsive font sizes for the subtitle */}
            Simplifying Secure IT for a Complex World
          </p>
        </div>

        {/* Content Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-12 sm:mt-20 md:grid-cols-3"> {/* Responsive grid layout for the cards with spacing */}
          {aboutContent.map((item, i) => (
            <motion.div
              key={i} // Unique key for each card, important for React list rendering
              className="overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2" // Styling for each card, including hover effects
              custom={i} // Passes the index as a custom prop to the Framer Motion variants
              initial="hidden" // Sets the initial animation state for the card
              whileInView="visible" // Triggers the "visible" animation when the card enters the viewport
              viewport={{ once: true, amount: 0.5 }} // Configures viewport detection: animates once when 50% of the card is visible
              variants={cardVariants} // Applies the defined animation variants
            >
              <div className="p-8 px-4 sm:px-8"> {/* Inner padding for card content */}
                <h3 className="text-xl font-semibold text-gray-900 text-center">{item.title}</h3> {/* Card title */}
                <p className="mt-4 text-base text-gray-700 leading-relaxed text-center">{item.description}</p> {/* Card description */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
