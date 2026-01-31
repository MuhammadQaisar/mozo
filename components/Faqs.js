import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { urbanist } from "./ui/font";
import Link from "next/link";

const faqs = [
  {
    question: "How long does it take to develop a project with your team?",
    answer:
      "The timeline for a project varies depending on its complexity and scope. We work closely with you to define the project milestones and provide a detailed timeline before we begin.",
  },
  {
    question:
      "What is the initial information you required from me regarding the development?",
    answer:
      "To get started, we typically need a clear understanding of your project goals, target audience, desired features, and any existing brand guidelines. The more information you can provide, the better we can tailor a solution to your needs.",
  },
  {
    question: "How experienced are your developers?",
    answer:
      "Our team is composed of experienced engineers with a passion for building robust and secure IT solutions. We have a proven track record of delivering high-quality products for startups and businesses of all sizes.",
  },
  {
    question: "Do you guarantee product quality?",
    answer:
      "Yes, we are committed to delivering high-quality products. Our development process includes rigorous QA testing and comprehensive support services to ensure your project meets your expectations.",
  },
  {
    question: "Do you practice Agile Methodology?",
    answer:
      "Yes, we utilize Agile practices to expedite project delivery and ensure flexibility throughout the development process. This allows for continuous feedback and collaboration to ensure we are building the right product for you.",
  },
  {
    question: "Are there any concealed or unexpected fees to anticipate?",
    answer:
      "We believe in transparency. All costs are outlined in our project proposals, so you can be confident that there are no hidden fees. Any changes to the project scope will be discussed and approved by you before any additional costs are incurred.",
  },
  {
    question:
      "What’s usually included in a regular contract with Mozo Technologies?",
    answer:
      "Our contracts are tailored to each project, but they typically include a detailed project scope, timeline, payment schedule, and information about our support and maintenance packages. We offer a range of support options, from basic maintenance to dedicated support contracts.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-20 lg:py-28 bg-gray-50 ${urbanist.className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900 ${urbanist.className}`}
          >
            FAQ'<span className="text-[#f06a6a]">s</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions? We've got answers. If you can't find what you're
            looking for, feel free to contact us.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 ${openIndex === idx ? "shadow-lg" : ""
                }`}
              initial={false}
            >
              <motion.button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex items-center justify-between text-left py-5 px-6 cursor-pointer"
                whileHover={{ backgroundColor: "#f9fafb" }}
              >
                <span
                  className={`text-lg font-bold text-[#1f2937] ${urbanist.className}`}
                >
                  {faq.question}
                </span>
                <motion.div
                  className="w-6 h-6 flex items-center justify-center flex-shrink-0"
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
