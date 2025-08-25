import Layout from '../components/Layout';
import CTA from '../components/ui/CTA';
import TailoredSolution from '../components/TailoredSolution';
import MeetTheTeam from '../components/MeetTheTeam';
import Faqs from '../components/Faqs';

const primary = "#F06A6A";
const secondary = "#000000";
const gradient = "bg-gradient-to-r from-[#F06A6A] to-[#000000]";
const cardBg = "bg-white dark:bg-[#181c2f]";
const cardShadow = "shadow-lg";
const accentText = "text-[#F06A6A]";
const borderAccent = "border-b-4 border-[#F06A6A]";

const teamMembers = [
  { name: "Ava Smith", role: "CEO", avatar: "A" },
  { name: "Liam Chen", role: "CTO", avatar: "L" },
  { name: "Noah Patel", role: "Lead Designer", avatar: "N" },
  { name: "Sophia Lee", role: "Project Manager", avatar: "S" },
];

const AboutPage = () => (
  <>

    {/* Introduction Section */}
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#000000] mb-12">
        Empowering Your Digital Dreams
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Card */}
        <div className="md:col-span-2 flex flex-col justify-center rounded-3xl bg-gradient-to-r from-[#F06A6A] to-[#000000] p-8 text-white shadow-lg">
          <div className="flex items-center mb-4">
            <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center mr-4">
              {/* Replace with your logo if available */}
              <span className="font-bold text-[#F06A6A] text-2xl">M</span>
            </div>
            <h2 className="text-xl font-bold">Discover Excellence Through Us!</h2>
          </div>
          <p>
            Mozo Technologies stands as the trusted companion for global enterprises, small and medium-sized businesses, as well as tech pioneers, all aiming to amplify their business worth.
          </p>
        </div>
        {/* Side Cards */}
        <div className="flex flex-col gap-8">
          <div className="rounded-3xl bg-[#F06A6A]/10 p-6 text-[#000000] shadow">
            <div className="flex items-center mb-2">
              <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center mr-2">
                <span className="font-bold text-[#F06A6A]">M</span>
              </div>
              <span className="font-semibold">Founded</span>
            </div>
            <p className="text-sm">September 2016</p>
          </div>
          <div className="rounded-3xl bg-[#F06A6A]/10 p-6 text-[#000000] shadow">
            <div className="flex items-center mb-2">
              <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center mr-2">
                <span className="font-bold text-[#F06A6A]">M</span>
              </div>
              <span className="font-semibold">Over 500+</span>
            </div>
            <p className="text-sm">Successful projects</p>
          </div>
        </div>
      </div>
      {/* Bottom Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="rounded-3xl bg-white p-6 shadow text-[#000000]">
          <div className="flex items-center mb-2">
            <div className="h-8 w-8 rounded-full bg-[#F06A6A] flex items-center justify-center mr-2">
              <span className="font-bold text-white">M</span>
            </div>
            <span className="font-semibold">Supercharge Your Digital Transformation</span>
          </div>
          <p className="text-sm">
            Experience the power of rapid digital evolution with our expertise in agile and groundbreaking technologies, perfectly sculpted to fit your unique requirements.
          </p>
        </div>
        <div className="rounded-3xl bg-[#F06A6A]/20 p-6 shadow text-[#000000]">
          <div className="flex items-center mb-2">
            <div className="h-8 w-8 rounded-full bg-[#F06A6A] flex items-center justify-center mr-2">
              <span className="font-bold text-white">M</span>
            </div>
            <span className="font-semibold">Crafting Your Dream Team</span>
          </div>
          <p className="text-sm">
            Partner with our 500+ software maestros to curate services that align flawlessly with your business objectives, creating a tailored solution just for you.
          </p>
        </div>
        <div className="rounded-3xl bg-[#F06A6A]/10 p-6 shadow text-[#000000]">
          <div className="flex items-center mb-2">
            <div className="h-8 w-8 rounded-full bg-[#F06A6A] flex items-center justify-center mr-2">
              <span className="font-bold text-white">M</span>
            </div>
            <span className="font-semibold">Elevate Your Digital Landscape</span>
          </div>
          <p className="text-sm">
            Step into an era of optimized digital synergy as we seamlessly enhance and harmonize your digital world, fostering continuous expansion and unwavering scalability.
          </p>
        </div>
      </div>
    </section>

    <div className="text-2xl">
      Our Mission
    </div>

    <TailoredSolution />
    <MeetTheTeam />
    <Faqs />

    </>

   
  
);

export default AboutPage;
