import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

/**
 * A modern, clean, and professional Hero section.
 * - Brand colors: #000000 (black) and #F06A6A (coral/salmon)
 * - Subtle animated gradient background for a sophisticated feel.
 * - Clear and impactful typography.
 * - A prominent call-to-action.
 * - Social proof with client logos.
 */
const Hero = () => {
  const gradientSpanRef = useRef(null);

  // Effect for scroll-based gradient animation on the main headline
  useEffect(() => {
    const handleScroll = () => {
      if (gradientSpanRef.current) {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        // Animate the gradient over the first 80% of the viewport height
        const scrollPercent = Math.min(scrollY / (windowHeight * 0.8), 1);
        gradientSpanRef.current.style.backgroundPosition = `${scrollPercent * 100}% 50%`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Logos for the "Trusted by" section.
  const trustedByLogos = [
    { src: "/icons/aws.svg", alt: "AWS" },
    { src: "/icons/meta.svg", alt: "Meta" },
    { src: "/icons/azure.svg", alt: "Microsoft Azure" },
    { src: "/icons/shopify.svg", alt: "Shopify" },
    { src: "/icons/google.svg", alt: "Google" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-50 to-gray-100"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[40rem] h-[40rem] bg-gradient-to-br from-[#F06A6A]/20 to-transparent rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[40rem] h-[40rem] bg-gradient-to-tl from-[#F06A6A]/10 to-transparent rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Particle Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-[#F06A6A]/20 rounded-full animate-float-up"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delayChildren: 0.2,
              staggerChildren: 0.1,
            },
          },
        }}
        className="relative z-10 max-w-5xl mx-auto text-center px-6 py-20"
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-black text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
        >
          Empowering Your
          <span
            ref={gradientSpanRef}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F06A6A] to-black mt-2"
            style={{
              backgroundSize: "200% auto",
              transition: "background-position 0.2s ease-out",
            }}
          >
            Digital Excellence
          </span>
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Transform your business with cutting-edge digital solutions. From innovative web development to intelligent automation, we deliver services that drive growth and innovation.
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex justify-center items-center gap-4 mb-16"
        >
          <Link
            href="/get-started"
            className="bg-gradient-to-r from-[#F06A6A] to-red-600 text-white font-semibold rounded-lg px-8 py-4 text-lg shadow-lg hover:shadow-xl hover:shadow-red-500/40 transform hover:scale-105 transition-all duration-300 ease-in-out animate-pulse-button"
          >
            Get Started
          </Link>
          <Link
            href="#features"
            className="bg-gradient-to-r from-gray-50 to-gray-200 text-black font-semibold rounded-lg px-8 py-4 text-lg shadow-lg border border-gray-300 hover:from-gray-100 hover:to-gray-300 transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Explore Services
          </Link>
        </motion.div>

        {/* Trusted By Section */}
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
          <div className="relative overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            <div className="flex animate-slide space-x-12">
              {[...trustedByLogos, ...trustedByLogos].map((logo, index) => (
                <div key={index} className="flex-shrink-0 flex items-center justify-center h-8 w-28">
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

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 8s ease-in-out infinite;
        }
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
        @keyframes float-up {
          0% {
            transform: translateY(100vh);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-10vh);
            opacity: 0;
          }
        }
        .animate-float-up {
          animation: float-up linear infinite;
        }
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          animation: slide 30s linear infinite;
        }
        .animate-slide:hover {
          animation-play-state: paused;
        }
        @keyframes pulse-button {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.03);
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