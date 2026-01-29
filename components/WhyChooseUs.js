import { FaRocket, FaServer, FaBuilding } from 'react-icons/fa';
import { urbanist } from './ui/font';

const features = [
  {
    icon: <FaRocket className="text-[#1f2937] text-3xl" />,
    title: "Innovative Solutions",
    description: "We leverage the latest technologies to build innovative solutions that solve real-world problems.",
  },
  {
    icon: <FaServer className="text-[#1f2937] text-3xl" />,
    title: "Scalable Infrastructure",
    description: "Our solutions are built on scalable infrastructure that can grow with your business.",
  },
  {
    icon: <FaBuilding className="text-[#1f2937] text-3xl" />,
    title: "Enterprise-Grade Security",
    description: "We prioritize security in everything we do, ensuring your data is always safe and secure.",
  },
];

const WhyChooseUs = () => (
  <section className="bg-gray-50 py-20 lg:py-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2
          className={`text-4xl md:text-4xl text-left font-extrabold text-gray-900 ${urbanist.className}`}
        >
          Why Choose <span className="text-[bulb-light-on-svgrepo-com]">Us?</span>
        </h2>
        <p
          className={`mt-4 text-lg text-gray-600 text-left max-w-3xl mx-2 ${urbanist.className}`}
        >
          We are committed to delivering excellence and driving success for our clients through our expertise, dedication, and innovative approach.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out"
          >
            {/* <div className="flex items-center justify-center h-20 w-20 rounded-full mb-6">
              {feature.icon}
            </div> */}
            <h3 className="inline-block mb-4 text-xl font-normal border border-gray-500 px-4 py-2 rounded-full text-gray-500">
              {feature.title}
            </h3>
            <p className={`text-base text-gray-700 leading-relaxed ${urbanist.className}`}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
