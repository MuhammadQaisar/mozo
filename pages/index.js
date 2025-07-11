import Head from "next/head";
import GradientWrapper from "../components/GradientWrapper";
import CTA from "../components/ui/CTA";
import Features from "../components/ui/Features";
import FooterCTA from "../components/ui/FooterCTA";
import Hero from "../components/ui/Hero";
import LogoGrid from "../components/ui/LogoGrid";
import Testimonials from "../components/ui/Testimonials";
import ToolKit from "../components/ui/ToolKit";
import CaseStudies from "../components/ui/CaseStudies";
import Help from "../components/ui/Help";
import About from "../components/ui/About";
import Footer from "../components/ui/Footer";


export default function Home() {
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
      </Head>
      <Hero />
      <About/>
      <Testimonials />
      {/* <LogoGrid /> */}
      {/* <GradientWrapper> */}
        <Features />
        
      {/* </GradientWrapper> */}
        <CTA />
      <ToolKit />
      <CaseStudies/>
      {/* <GradientWrapper> */}
        
      {/* </GradientWrapper> */}
      {/* <FooterCTA /> */}
      <Help />
      
    </>
  );
}
