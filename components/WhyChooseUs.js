import { FaRocket, FaServer, FaBuilding } from 'react-icons/fa';
import { poppins, urbanist } from './ui/font';

const features = [
  {
    icon: <FaRocket className="text-white text-3xl" />,
    title: "Innovative Solutions",
    description: "We leverage the latest technologies to build innovative solutions that solve real-world problems.",
  },
  {
    icon: <FaServer className="text-white text-3xl" />,
    title: "Scalable Infrastructure",
    description: "Our solutions are built on scalable infrastructure that can grow with your business.",
  },
  {
    icon: <FaBuilding className="text-white text-3xl" />,
    title: "Enterprise-Grade Security",
    description: "We prioritize security in everything we do, ensuring your data is always safe and secure.",
  },
];

const WhyChooseUs = () => (
  <section className="max-w-6xl mx-auto px-4 py-16">
    <h2 className={`text-3xl md:text-4xl font-extrabold text-center text-[#1f2937] mb-12 ${urbanist.className}`}>
      Why Choose <span className="text-[#F06A6A]">Us?</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div key={index} className="rounded-2xl bg-white p-8 border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="w-16 h-16 rounded-full bg-[#1f2937] flex items-center justify-center mb-6">
            {feature.icon}
          </div>
          <h3 className={`text-xl font-bold text-[#1f2937] mb-3 ${urbanist.className}`}>{feature.title}</h3>
          <p className={`text-gray-600 ${urbanist.className}`}>{feature.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhyChooseUs;
