import Head from "next/head";
import GradientWrapper from "../components/GradientWrapper";
import CTA from "../components/ui/CTA";
import Features from "../components/ui/Features";
import FooterCTA from "../components/ui/FooterCTA";
import HomeHero from "../components/HomeHero";
import LogoGrid from "../components/ui/LogoGrid";
import Testimonials from "../components/ui/Testimonials";
import ToolKit from "../components/ui/ToolKit";
import FAQs from "../components/ui/FAQs";
import About from "../components/ui/About";
import HowItWorks from "../components/ui/HowItWorks";
import Contact from "../components/ui/Contact";
import Faqs from "../components/Faqs";


export default function Home() {
  return (
    <>
      <Head>
        <title>Mozo Technologies - Cutting-Edge IT Services | Data & AI, Web Development, UI/UX</title>
        <meta name="description" content="Transform your business with Mozo Technologies' comprehensive IT services. Expert solutions in Data & AI, Web Development, UI/UX Design, CloudOps, Digital Marketing, and DevOps." />
        <meta name='robots' content='index, follow' />
        <meta name="keywords" content="IT services, Data & AI solutions, Web Development, UI/UX Design, CloudOps, Digital Marketing, DevOps, Technology consulting, Software development, Business transformation" />
        
        {/* Open Graph for Home Page */}
        <meta property="og:title" content="Mozo Technologies - Cutting-Edge IT Services | Data & AI, Web Development, UI/UX" />
        <meta property="og:description" content="Transform your business with Mozo Technologies' comprehensive IT services. Expert solutions in Data & AI, Web Development, UI/UX Design, CloudOps, Digital Marketing, and DevOps." />
        <meta property="og:url" content="https://mozotechnologies.com" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card for Home Page */}
        <meta name="twitter:title" content="Mozo Technologies - Cutting-Edge IT Services | Data & AI, Web Development, UI/UX" />
        <meta name="twitter:description" content="Transform your business with Mozo Technologies' comprehensive IT services. Expert solutions in Data & AI, Web Development, UI/UX Design, CloudOps, Digital Marketing, and DevOps." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://mozotechnologies.com" />
        
        {/* Structured Data for Home Page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Mozo Technologies - Home",
              "description": "Transform your business with Mozo Technologies' comprehensive IT services. Expert solutions in Data & AI, Web Development, UI/UX Design, CloudOps, Digital Marketing, and DevOps.",
              "url": "https://mozotechnologies.com",
              "mainEntity": {
                "@type": "Organization",
                "name": "Mozo Technologies",
                "offers": [
                  {
                    "@type": "Service",
                    "name": "Data & AI Solutions",
                    "description": "Advanced data analytics and artificial intelligence solutions"
                  },
                  {
                    "@type": "Service",
                    "name": "Web Development",
                    "description": "Custom web applications and responsive websites"
                  },
                  {
                    "@type": "Service",
                    "name": "UI/UX Design",
                    "description": "User-centered design and interface development"
                  },
                  {
                    "@type": "Service",
                    "name": "CloudOps",
                    "description": "Cloud infrastructure and operations management"
                  },
                  {
                    "@type": "Service",
                    "name": "Digital Marketing",
                    "description": "Comprehensive digital marketing strategies"
                  },
                  {
                    "@type": "Service",
                    "name": "DevOps",
                    "description": "Development and operations automation solutions"
                  }
                ]
              }
            })
          }}
        />
      </Head>
      <HomeHero />
      <Testimonials />
      {/* <LogoGrid /> */}
      {/* <GradientWrapper> */}
        <Features />
        
      {/* </GradientWrapper> */}
        <CTA />
      <HowItWorks />
      <Faqs/>
      <Contact />
            {/* <GradientWrapper> */}
        
      {/* </GradientWrapper> */}
      {/* <FooterCTA /> */}
      
    </>
  );
}
