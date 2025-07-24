import Head from "next/head";
import GradientWrapper from "../components/GradientWrapper";
import CTA from "../components/ui/CTA";
import Features from "../components/ui/Features";
import FooterCTA from "../components/ui/FooterCTA";
import Hero from "../components/ui/Hero";
import LogoGrid from "../components/ui/LogoGrid";
import Testimonials from "../components/ui/Testimonials";
import ToolKit from "../components/ui/ToolKit";
import FAQs from "../components/ui/FAQs";
import About from "../components/ui/About";


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
      <FAQs/>
            {/* <GradientWrapper> */}
        
      {/* </GradientWrapper> */}
      {/* <FooterCTA /> */}
      
    </>
  );
}
