import { useState } from "react";

const faqs = [
  "How long does it take to develop a project with your team?",
  "What is the initial information you required from me regarding the development?",
  "How experienced are your developers?",
  "Do you guarantee product quality?",
  "Do you practice Agile Methodology?",
  "Are there any concealed or unexpected fees to anticipate?",
  "What’s usually included in a regular contract with Mozo Technologies?",
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-4xl mx-auto py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#000000] mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        {faqs.map((question, idx) => (
          <div
            key={idx}
            className="bg-[#F06A6A0D] rounded-xl flex items-center px-6 py-5 cursor-pointer transition-shadow hover:shadow-md"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          >
            <span className="text-2xl font-bold text-[#F06A6A] mr-4 select-none">+</span>
            <span className="text-[#000000] font-medium">{question}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;