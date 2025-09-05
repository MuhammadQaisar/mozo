import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Hero = () => {
  const trustedByLogos = [
    { src: "/icons/aws.svg", alt: "AWS" },
    { src: "/icons/meta.svg", alt: "Meta" },
    { src: "/icons/azure.svg", alt: "Microsoft Azure" },
    { src: "/icons/shopify.svg", alt: "Shopify" },
    { src: "/icons/google.svg", alt: "Google" },
    { src: "/icons/reactjs.svg", alt: "React" },
    { src: "/icons/python.svg", alt: "Python" },
    { src: "/icons/nodejs.svg", alt: "Node.js" },
    { src: "/icons/angular.svg", alt: "Angular" },
    { src: "/icons/kubernetes.svg", alt: "Kubernetes" },
    { src: "/icons/figma.svg", alt: "Figma" },
    { src: "/icons/sketch.svg", alt: "Sketch" },
    { src: "/icons/docker.svg", alt: "Docker" },
    { src: "/icons/mongo.svg", alt: "MongoDB" },
    { src: "/icons/mysql.svg", alt: "MySQL" }, 
    { src: "/icons/pgsql.svg", alt: "PostgreSQL" },
    { src: "/icons/jenkins.svg", alt: "Jenkins" },
  ];

  const sphereRef = useRef(null);

  useEffect(() => {
    const sphere = sphereRef.current;
    const icons = sphere.children;
    const radius = sphere.offsetWidth / 2.5;
    const centerX = sphere.offsetWidth / 2;
    const centerY = sphere.offsetHeight / 2;

    let angle = 0;

    const animate = () => {
      angle += 0.005;
      for (let i = 0; i < icons.length; i++) {
        const icon = icons[i];
        const phi = Math.acos(-1 + (2 * i) / icons.length);
        const theta = Math.sqrt(icons.length * Math.PI) * phi;

        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);

        const rotatedX = x * Math.cos(angle) - z * Math.sin(angle);
        const rotatedZ = x * Math.sin(angle) + z * Math.cos(angle);

        const scale = Math.max(0.5, (rotatedZ + radius) / (2 * radius));

        icon.style.transform = `translate3d(${centerX + rotatedX}px, ${centerY + y}px, 0) scale(${scale})`;
        icon.style.opacity = Math.max(0.5, scale);
        icon.style.zIndex = Math.round(scale * 100);
      }
      requestAnimationFrame(animate);
    };

    animate();
  }, [trustedByLogos.length]);

  return (
    <section className="relative text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-screen">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight"
            >
              <div>Empowering Your</div>
              <div className="text-[#F06A6A] mt-5">Digital Excellence</div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl max-w-2xl mx-auto md:mx-0 text-gray-600"
            >
              Transform your business with cutting-edge digital solutions. We deliver services that drive growth and innovation, from web development to intelligent automation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8 flex justify-center md:justify-start"
            >
              <Link
                href="/get-started"
                className="inline-block bg-[#F06A6A] text-white font-semibold rounded-lg px-8 py-4 text-lg shadow-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Book a consultation - it's free
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: 3D Sphere Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hidden md:flex items-center justify-center h-full"
          >
            <div ref={sphereRef} className="sphere-container">
              {trustedByLogos.map((logo, index) => (
                <div key={index} className="icon">
                  <Image src={logo.src} alt={logo.alt} width={60} height={60} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .sphere-container {
          position: relative;
          width: 500px;
          height: 500px;
          perspective: 1000px;
        }

        .icon {
          position: absolute;
          width: 60px;
          height: 60px;
          background-color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.1s linear, opacity 0.1s linear;
        }
      `}</style>
    </section>
  );
};

export default Hero;