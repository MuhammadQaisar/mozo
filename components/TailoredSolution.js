import { FaRocket, FaServer, FaBuilding } from 'react-icons/fa';

const TailoredSolution = () => (
  <section className="max-w-6xl mx-auto px-4 py-16">
    <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#1f2937] mb-2">
      Tailored Software Solutions for
      <span className="block text-[#F06A6A]">Businesses of All Sizes</span>
    </h2>
    <p className="text-center text-gray-500 mb-12">
      Our custom software development services cater to a diverse range of businesses, including startups, SMBs, and enterprises.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Startups */}
      <div className="rounded-2xl bg-white p-8 border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <div className="w-16 h-16 rounded-full bg-[#1f2937] flex items-center justify-center mb-6">
            <FaRocket className="text-white text-3xl" />
        </div>
        <h3 className="text-xl font-bold text-[#1f2937] mb-3">For Startups</h3>
        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>Quickly launch your Minimum Viable Product (MVP) to hit the running market.</li>
          <li>Benefit from fixed price estimates for transparent budgeting.</li>
          <li>Utilize Agile practices to expedite project delivery.</li>
        </ul>
      </div>
      {/* SMBs */}
      <div className="rounded-2xl bg-white p-8 border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <div className="w-16 h-16 rounded-full bg-[#1f2937] flex items-center justify-center mb-6">
            <FaServer className="text-white text-3xl" />
        </div>
        <h3 className="text-xl font-bold text-[#1f2937] mb-3">For SMBs</h3>
        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>Choose from flexible engagement models that suit your business needs.</li>
          <li>Tap into our in-depth domain expertise and industry knowledge.</li>
          <li>Implement tried-and-tested environment optimization methods.</li>
        </ul>
      </div>
      {/* Enterprises */}
      <div className="rounded-2xl bg-white p-8 border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <div className="w-16 h-16 rounded-full bg-[#1f2937] flex items-center justify-center mb-6">
            <FaBuilding className="text-white text-3xl" />
        </div>
        <h3 className="text-xl font-bold text-[#1f2937] mb-3">For Enterprises</h3>
        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>Receive consultancy services to outline a strategic future roadmap.</li>
          <li>Ensure compliance with industry standards and regulations.</li>
          <li>Leverage emerging technologies for sustained growth.</li>
        </ul>
      </div>
    </div>
  </section>
);

export default TailoredSolution;