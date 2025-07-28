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
    <section className="relative min-h-screen flex items-center justify-center bg-white w-full px-4 sm:px-6 lg:px-8">
      {/* Animated Gradient Background for the Hero section */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-50 to-gray-100"></div>
        
        {/* Futuristic Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-grid-pattern animate-grid-move"></div>
        </div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large floating circles */}
          <div className="absolute top-20 left-10 w-32 h-32 border border-[#F06A6A]/20 rounded-full animate-float-slow"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-black/10 rounded-full animate-float-reverse"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 border border-[#F06A6A]/15 rounded-full animate-float-slow-delay"></div>
          
          {/* Hexagonal shapes */}
          <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-black/15 rotate-45 animate-rotate-slow"></div>
          <div className="absolute bottom-1/4 right-10 w-12 h-12 border border-[#F06A6A]/25 rotate-12 animate-rotate-reverse"></div>
          
          {/* Animated lines/connections */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F06A6A" stopOpacity="0.1"/>
                <stop offset="50%" stopColor="#000000" stopOpacity="0.05"/>
                <stop offset="100%" stopColor="#F06A6A" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
            <path className="animate-draw-line" d="M100,200 Q300,100 500,300 T900,200" stroke="url(#lineGradient)" strokeWidth="2" fill="none" strokeDasharray="10,5"/>
            <path className="animate-draw-line-delay" d="M200,400 Q400,300 600,500 T1000,400" stroke="url(#lineGradient)" strokeWidth="1.5" fill="none" strokeDasharray="8,4"/>
          </svg>
        </div>
        
        {/* Subtle pulsing orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-[#F06A6A]/40 rounded-full animate-pulse-orb"></div>
          <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-black/20 rounded-full animate-pulse-orb-delay"></div>
          <div className="absolute bottom-1/3 left-1/2 w-2.5 h-2.5 bg-[#F06A6A]/30 rounded-full animate-pulse-orb-slow"></div>
        </div>
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
        className="relative z-10 text-center py-12 sm:py-16 md:py-20 max-w-6xl mx-auto"
      >
        {/* Main Headline */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight px-2 sm:px-0"
        >
          Empowering Your
          {/* Gradient Text for "Digital Excellence" */}
          <span
            ref={gradientSpanRef}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F06A6A] to-black mt-1 sm:mt-2"
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
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4 sm:px-6 md:px-4 lg:px-0 break-words hyphens-auto"
        >
          Transform your business with cutting-edge digital solutions. From innovative web development to intelligent automation, we deliver services that drive growth and innovation.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-6 sm:px-4 max-w-md sm:max-w-none mx-auto"
        >
          {/* Get Started Button */}
          <Link
            href="/get-started"
            className="w-full sm:w-auto bg-gradient-to-r from-[#F06A6A] to-red-600 text-white font-semibold rounded-lg px-4 py-3 text-sm sm:px-6 sm:py-3 sm:text-base md:px-8 md:py-4 md:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out animate-pulse-button min-h-[48px] flex items-center justify-center max-w-xs sm:max-w-none"
          >
            Get Started
          </Link>
          {/* Explore Services Button */}
          <Link
            href="#features"
            className="w-full sm:w-auto bg-gradient-to-r from-gray-50 to-gray-200 text-black font-semibold rounded-lg px-4 py-3 text-sm sm:px-6 sm:py-3 sm:text-base md:px-8 md:py-4 md:text-lg shadow-lg border border-gray-300 hover:from-gray-100 hover:to-gray-300 transform hover:scale-105 transition-all duration-300 ease-in-out min-h-[48px] flex items-center justify-center max-w-xs sm:max-w-none"
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
          className="w-full max-w-4xl mx-auto px-4 sm:px-0"
        >
          <p className="text-xs sm:text-sm text-gray-500 font-medium mb-4 sm:mb-6 text-center">
            Accredited & Trusted By
          </p>
          {/* Logo Carousel/Slider */}
          <div className="relative overflow-hidden py-2 sm:py-4 [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            <div className="flex animate-slide space-x-6 sm:space-x-8 md:space-x-12">
              {/* Duplicate logos to create a continuous scroll effect */}
              {[...trustedByLogos, ...trustedByLogos].map((logo, index) => (
                <div key={index} className="flex-shrink-0 flex items-center justify-center h-5 w-20 sm:h-6 sm:w-24 md:h-8 md:w-28">
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

        /* Futuristic Grid Pattern */
        .bg-grid-pattern {
          background-image:
            linear-gradient(rgba(240, 106, 106, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        .animate-grid-move {
          animation: grid-move 20s linear infinite;
        }

        /* Floating Geometric Animations */
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(15px) rotate(-180deg); }
        }
        .animate-float-reverse {
          animation: float-reverse 6s ease-in-out infinite;
        }

        @keyframes float-slow-delay {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-25px) scale(1.1); }
        }
        .animate-float-slow-delay {
          animation: float-slow-delay 10s ease-in-out infinite 2s;
        }

        /* Rotating Shapes */
        @keyframes rotate-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-rotate-slow {
          animation: rotate-slow 15s linear infinite;
        }

        @keyframes rotate-reverse {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        .animate-rotate-reverse {
          animation: rotate-reverse 12s linear infinite;
        }

        /* Animated Lines */
        @keyframes draw-line {
          0% { stroke-dashoffset: 100; opacity: 0; }
          50% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0.3; }
        }
        .animate-draw-line {
          animation: draw-line 8s ease-in-out infinite;
        }

        .animate-draw-line-delay {
          animation: draw-line 10s ease-in-out infinite 3s;
        }

        /* Pulsing Orbs */
        @keyframes pulse-orb {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.5); }
        }
        .animate-pulse-orb {
          animation: pulse-orb 4s ease-in-out infinite;
        }

        .animate-pulse-orb-delay {
          animation: pulse-orb 5s ease-in-out infinite 1.5s;
        }

        .animate-pulse-orb-slow {
          animation: pulse-orb 6s ease-in-out infinite 3s;
        }
      `}</style>
    </section>
  );
};

export default Hero;