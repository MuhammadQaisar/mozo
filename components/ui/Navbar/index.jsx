import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Brand from "../Brand";
import NavLink from "../NavLink";
import { urbanist } from "../font";

// Navigation data for the Navbar
const navigation = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Services", path: "/services" },
  // { title: "Blogs", path: "/blogs" },
  { title: "Careers", path: "/careers" },
  { title: "Contact", path: "/contact-us" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState("");
  const { events, asPath } = useRouter();

  // Effect to close mobile menu and remove overflow-hidden class on route change
  useEffect(() => {
    const handleRouteChange = () => {
      document.body.classList.remove("overflow-hidden");
      setIsMobileMenuOpen(false);
    };

    events.on("routeChangeStart", handleRouteChange);
    events.on("hashChangeStart", handleRouteChange);

    return () => {
      events.off("routeChangeStart", handleRouteChange);
      events.off("hashChangeStart", handleRouteChange);
    };
  }, [events]);

  // Enhanced intersection observer for active nav links
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNavLink(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-20% 0px -80% 0px",
        threshold: 0,
      }
    );

    // Only observe sections for hash links
    navigation
      .filter((item) => item.path.startsWith("#"))
      .forEach((item) => {
        const section = document.querySelector(item.path);
        if (section) observer.observe(section);
      });

    return () => {
      navigation
        .filter((item) => item.path.startsWith("#"))
        .forEach((item) => {
          const section = document.querySelector(item.path);
          if (section) observer.unobserve(section);
        });
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <header className={urbanist.className}>
      <nav
        className={
          "w-full fixed top-0 left-0 z-50 transition-all duration-500 ease-out bg-white/95 backdrop-blur-md border-b border-gray-200"
        }
      >
        <div
          className={
            "max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-300 py-3"
          }
        >
          {/* Enhanced Brand Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Brand className="h-12 w-auto" isScrolled={true} />
          </motion.div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            <ul className="flex items-center space-x-1">
              {navigation.map((item, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={
                      asPath === "/get-started" ? `/${item.path}` : item.path
                    }
                    className={`relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 group ${
                      (item.path.startsWith("#") &&
                        activeNavLink === item.path) ||
                      (!item.path.startsWith("#") && asPath === item.path)
                        ? "text-[#F06A6A] bg-[#F06A6A]/10"
                        : "text-gray-700 hover:text-[#F06A6A] hover:bg-gray-50"
                    }`}
                    onClick={() => {
                      if (!item.path.startsWith("#")) {
                        // For direct page links, set activeNavLink based on current path
                        setActiveNavLink(item.path);
                      } else {
                        // For hash links, keep existing behavior
                        setActiveNavLink(item.path);
                      }
                    }}
                  >
                    {item.title}
                    {/* Active indicator */}
                    {activeNavLink === item.path && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#F06A6A] rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Enhanced CTA Button */}
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="ml-6 flex items-center"
            >
              <NavLink
                href="/get-started"
                className="px-6 py-2 bg-[#05243D] text-white font-bold rounded-md hover:bg-[#] transition-colors duration-300 flex items-center ml-2"
              >
                <span className="flex items-center">Get in Touch</span>
              </NavLink>
            </motion.div>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <div className="lg:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleMobileMenu}
              className={`relative p-2 rounded-lg transition-all duration-300 ${
                isMobileMenuOpen
                  ? "text-[#1f2937] bg-[#F06A6A]/10"
                  : "text-gray-700 hover:text-[#F06A6A] hover:bg-gray-50"
              }`}
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 relative">
                <motion.span
                  animate={
                    isMobileMenuOpen
                      ? { rotate: 45, y: 8 }
                      : { rotate: 0, y: 0 }
                  }
                  className="absolute top-0 left-0 w-full h-0.5 bg-current rounded-full origin-center transition-all duration-300"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="absolute top-2.5 left-0 w-full h-0.5 bg-current rounded-full transition-all duration-300"
                />
                <motion.span
                  animate={
                    isMobileMenuOpen
                      ? { rotate: -45, y: -8 }
                      : { rotate: 0, y: 0 }
                  }
                  className="absolute top-5 left-0 w-full h-0.5 bg-current rounded-full origin-center transition-all duration-300"
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md">
            <div className="px-4 sm:px-6 py-6 space-y-4">
              {navigation.map((item, idx) => (
                <div key={idx}>
                  <Link
                    href={
                      asPath === "/get-started" ? `/${item.path}` : item.path
                    }
                    className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeNavLink === item.path
                        ? "text-[#F06A6A] bg-[#F06A6A]/10"
                        : "text-[#F06A6A] hover:text-[#F06A6A] hover:bg-gray-50"
                    }`}
                    onClick={() => {
                      setActiveNavLink(item.path);
                      setIsMobileMenuOpen(false);
                      document.body.classList.remove("overflow-hidden");
                    }}
                  >
                    {item.title}
                  </Link>
                </div>
              ))}

              {/* Mobile CTA Button */}
              <div className="pt-4">
                <NavLink
                  href="/get-started"
                  className="block w-full px-6 py-4 bg-gradient-to-r from-[#F06A6A] to-red-500 text-white font-semibold rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-xl"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    document.body.classList.remove("overflow-hidden");
                  }}
                >
                  Get in Touch
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
