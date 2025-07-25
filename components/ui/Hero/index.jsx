import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

/**
 * Hero Component
 * A modern, clean, and professional Hero section designed to be visually appealing and highly functional.
 * Features:
 * - Utilizes brand colors: #000000 (black) and #F06A6A (coral/salmon).
 * - Incorporates a subtle animated gradient background for a sophisticated aesthetic.
 * - Employs clear and impactful typography to convey the main message effectively.
 * - Includes prominent call-to-action (CTA) buttons to guide user interaction.
 * - Displays client logos as social proof to build trust and credibility.
 */
const Hero = () => {
  // Ref for the span element that applies the gradient animation to the headline.
  const gradientSpanRef = useRef(null);

  // useEffect hook to handle scroll-based gradient animation on the main headline.
  // This effect dynamically adjusts the background position of the gradient based on scroll depth,
  // creating a subtle animation as the user scrolls down the page.
  useEffect(() => {
    const handleScroll = () => {
      if (gradientSpanRef.current) {
        const scrollY = window.scrollY; // Current vertical scroll position.
        const windowHeight = window.innerHeight; // Height of the browser window.
        // Calculate scroll percentage over the first 80% of the viewport height.
        // This ensures the animation completes before the user scrolls too far down.
        const scrollPercent = Math.min(scrollY / (windowHeight * 0.8), 1);
        // Update background position to animate the gradient.
        gradientSpanRef.current.style.backgroundPosition = `${scrollPercent * 100}% 50%`;
      }
    };

    // Add scroll event listener with passive: true for performance optimization.
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Cleanup function to remove the event listener when the component unmounts.
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array ensures this effect runs only once after initial render.

  // Array of logos for the "Trusted by" section.
  // Each object contains the source path for the image and an alt text for accessibility.
  const trustedByLogos = [
    { src: "/icons/aws.svg", alt: "AWS" },
    { src: "/icons/meta.svg", alt: "Meta" },
    { src: "/icons/azure.svg", alt: "Microsoft Azure" },
    { src: "/icons/shopify.svg", alt: "Shopify" },
    { src: "/icons/google.svg", alt: "Google" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white w-full">
      {/* Animated Gradient Background for the Hero section */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-50 to-gray-100"></div>
      </div>

      {/* Particle Animation: Creates a subtle, floating particle effect in the background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-[#F06A6A]/20 rounded-full animate-float-up"
            style={{
              width: `${Math.random() * 3 + 1}px`, // Random width for variety
              height: `${Math.random() * 3 + 1}px`, // Random height for variety
              left: `${Math.random() * 100}%`, // Random horizontal position
              animationDuration: `${Math.random() * 10 + 10}s`, // Random animation duration
              animationDelay: `${Math.random() * 10}s`, // Random animation delay
            }}
          />
        ))}
      </div>

      {/* Main Content Area: Contains the headline, description, CTA buttons, and trusted logos */}
      <motion.div
        initial="hidden" // Initial animation state (hidden)
        animate="visible" // Animation state to transition to (visible)
        variants={{
          hidden: { opacity: 0, y: 50 }, // Styles when hidden
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delayChildren: 0.2, // Delay before child animations start
              staggerChildren: 0.1, // Stagger delay for child animations
            },
          },
        }}
        className="relative z-10 text-center py-20"
      >
        {/* Main Headline */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-black text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
        >
          Empowering Your
          {/* Gradient Text for "Digital Excellence" */}
          <span
            ref={gradientSpanRef}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F06A6A] to-black mt-2"
            style={{
              backgroundSize: "200% auto", // Ensures the gradient covers the text area
              transition: "background-position 0.2s ease-out", // Smooth transition for gradient movement
            }}
          >
            Digital Excellence
          </span>
        </motion.h1>

        {/* Sub-headline/Description */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Transform your business with cutting-edge digital solutions. From innovative web development to intelligent automation, we deliver services that drive growth and innovation.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex justify-center items-center gap-4 mb-16"
        >
          {/* Get Started Button */}
          <Link
            href="/get-started"
            className="bg-gradient-to-r from-[#F06A6A] to-red-600 text-white font-semibold rounded-lg px-6 py-3 text-base md:px-8 md:py-4 md:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out animate-pulse-button"
          >
            Get Started
          </Link>
          {/* Explore Services Button */}
          <Link
            href="#features"
            className="bg-gradient-to-r from-gray-50 to-gray-200 text-black font-semibold rounded-lg px-6 py-3 text-base md:px-8 md:py-4 md:text-lg shadow-lg border border-gray-300 hover:from-gray-100 hover:to-gray-300 transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Explore Services
          </Link>
        </motion.div>

        {/* Trusted By Section: Displays logos of companies that trust the service */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <p className="text-sm text-gray-500 font-medium mb-6 text-center">
            TRUSTED BY THE WORLD'S BEST COMPANIES
          </p>
          {/* Logo Carousel/Slider */}
          <div className="relative overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            <div className="flex animate-slide space-x-8 md:space-x-12">
              {/* Duplicate logos to create a continuous scroll effect */}
              {[...trustedByLogos, ...trustedByLogos].map((logo, index) => (
                <div key={index} className="flex-shrink-0 flex items-center justify-center h-6 w-24 md:h-8 md:w-28">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={40}
                  className="object-contain h-full w-auto grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Custom CSS for animations specific to this component */}
      <style jsx>{`
        /* Animation for fading in elements from the top */
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
        }

        /* Animation for fading in elements from the bottom */
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        /* Animation for floating particles */
        @keyframes float-up {
          0% {
            transform: translateY(100vh); /* Start from below viewport */
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-10vh); /* End above viewport */
            opacity: 0;
          }
        }
        .animate-float-up {
          animation: float-up linear infinite;
        }

        /* Animation for continuous horizontal sliding (logo carousel) */
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%); /* Slides to the left by half its width */
          }
        }
        .animate-slide {
          animation: slide 30s linear infinite; /* Continuous linear animation */
        }
        .animate-slide:hover {
          animation-play-state: paused; /* Pause animation on hover */
        }

        /* Animation for a subtle pulsing effect on buttons */
        @keyframes pulse-button {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.03); /* Slightly scales up at 50% mark */
          }
        }
        .animate-pulse-button {
          animation: pulse-button 2.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;