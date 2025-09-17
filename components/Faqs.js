import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How long does it take to develop a project with your team?",
    answer: "The timeline for a project varies depending on its complexity and scope. We work closely with you to define the project milestones and provide a detailed timeline before we begin."
  },
  {
    question: "What is the initial information you required from me regarding the development?",
    answer: "To get started, we typically need a clear understanding of your project goals, target audience, desired features, and any existing brand guidelines. The more information you can provide, the better we can tailor a solution to your needs."
  },
  {
    question: "How experienced are your developers?",
    answer: "Our team is composed of experienced engineers with a passion for building robust and secure IT solutions. We have a proven track record of delivering high-quality products for startups and businesses of all sizes."
  },
  {
    question: "Do you guarantee product quality?",
    answer: "Yes, we are committed to delivering high-quality products. Our development process includes rigorous QA testing and comprehensive support services to ensure your project meets your expectations."
  },
  {
    question: "Do you practice Agile Methodology?",
    answer: "Yes, we utilize Agile practices to expedite project delivery and ensure flexibility throughout the development process. This allows for continuous feedback and collaboration to ensure we are building the right product for you."
  },
  {
    question: "Are there any concealed or unexpected fees to anticipate?",
    answer: "We believe in transparency. All costs are outlined in our project proposals, so you can be confident that there are no hidden fees. Any changes to the project scope will be discussed and approved by you before any additional costs are incurred."
  },
  {
    question: "What’s usually included in a regular contract with Mozo Technologies?",
    answer: "Our contracts are tailored to each project, but they typically include a detailed project scope, timeline, payment schedule, and information about our support and maintenance packages. We offer a range of support options, from basic maintenance to dedicated support contracts."
  }
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-4xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-[#1f2937] mb-12">
        Frequently Asked Questions
      </h2>
      <div className="border-t border-gray-200">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b border-gray-200">
            <div
              className="flex items-center justify-between cursor-pointer py-6"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span className="text-base sm:text-lg font-medium text-gray-800">{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === idx ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-6 h-6 text-[#1f2937]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>
            </div>
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 text-gray-500 leading-relaxed text-sm sm:text-base">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;