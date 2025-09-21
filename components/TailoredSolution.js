import { FaRocket, FaServer, FaBuilding } from 'react-icons/fa';
import { poppins } from './ui/font';

const solutions = [
  {
    icon: <FaRocket className="text-white text-3xl" />,
    title: "For Startups",
    benefits: [
      "Quickly launch your Minimum Viable Product (MVP) to hit the running market.",
      "Benefit from fixed price estimates for transparent budgeting.",
      "Utilize Agile practices to expedite project delivery.",
    ],
  },
  {
    icon: <FaServer className="text-white text-3xl" />,
    title: "For SMBs",
    benefits: [
      "Choose from flexible engagement models that suit your business needs.",
      "Tap into our in-depth domain expertise and industry knowledge.",
      "Implement tried-and-tested environment optimization methods.",
    ],
  },
  {
    icon: <FaBuilding className="text-white text-3xl" />,
    title: "For Enterprises",
    benefits: [
      "Receive consultancy services to outline a strategic future roadmap.",
      "Ensure compliance with industry standards and regulations.",
      "Leverage emerging technologies for sustained growth.",
    ],
  },
];

const TailoredSolution = () => (
  <section className="max-w-6xl mx-auto px-4 py-16">
    <h2 className={`text-3xl md:text-4xl font-extrabold text-center text-[#1f2937] mb-2 ${poppins.className}`}>
      Tailored Software Solutions for
      <span className="block text-[#F06A6A]">Businesses of All Sizes</span>
    </h2>
    <p className="text-sm text-center text-gray-500 mb-12">
      Our custom software development services cater to a diverse range of businesses, including startups, SMBs, and enterprises.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {solutions.map((solution, index) => (
        <div key={index} className="rounded-2xl bg-white p-8 border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="w-16 h-16 rounded-full bg-[#1f2937] flex items-center justify-center mb-6">
            {solution.icon}
          </div>
          <h3 className="text-xl font-bold text-[#1f2937] mb-3">{solution.title}</h3>
          <ul className="text-sm list-disc pl-5 text-gray-600 space-y-2">
            {solution.benefits.map((benefit, i) => (
              <li key={i}>{benefit}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default TailoredSolution;