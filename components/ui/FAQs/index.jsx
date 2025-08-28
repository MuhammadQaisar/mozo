import React, { useState } from "react";
import SectionWrapper from "../../SectionWrapper";
import { montserrat } from "../font";

/**
 * Enhanced FAQs Component
 * Modern, accessible FAQ section with smooth animations and improved visual design.
 * Features glassmorphism effects, better typography, and consistent brand colors.
 */

// Enhanced FAQ data with categories
const faqs = [
    // General
    {
        question: "How do I get started with Mozo Technologies?",
        answer: "Getting started is easy! Simply head to our 'Contact Us' page and fill out the form. One of our team members will get back to you within 24 hours to discuss your project in detail.",
        category: "General"
    },
    {
        question: "What makes Mozo Technologies different from other agencies?",
        answer: "At Mozo, we pride ourselves on our client-centric approach. We don't just build products; we build partnerships. Our team is dedicated to understanding your vision and delivering solutions that drive real business results.",
        category: "General"
    },

    // Services
    {
        question: "What kind of web development services do you offer?",
        answer: "We offer a full range of web development services, including custom website design, e-commerce solutions, content management systems (CMS), and web application development. We work with a variety of technologies to suit your specific needs.",
        category: "Services"
    },
    {
        question: "Do you provide ongoing support and maintenance?",
        answer: "Yes, we offer comprehensive support and maintenance packages to ensure your website or application remains secure, up-to-date, and performs optimally. We're here to support you long after the initial launch.",
        category: "Services"
    },

    // Process
    {
        question: "What is your development process like?",
        answer: "Our process is collaborative and transparent. We start with a discovery phase to understand your goals, followed by design, development, testing, and deployment. We keep you involved at every stage to ensure the final product meets your expectations.",
        category: "Process"
    },
    {
        question: "How do you handle project management?",
        answer: "We use agile methodologies to manage our projects, which allows for flexibility and continuous feedback. You'll have a dedicated project manager as your primary point of contact, and we use tools like Jira and Trello to track progress.",
        category: "Process"
    },

    // Project
    {
        question: "How long will it take to complete my project?",
        answer: "The timeline for each project varies depending on its scope and complexity. After our initial discovery phase, we'll provide you with a detailed project plan and timeline. On average, a standard website takes 4-6 weeks to complete.",
        category: "Project"
    },
    {
        question: "Can I see examples of your previous work?",
        answer: "Absolutely! You can check out our portfolio on our 'Case Studies' page to see a selection of our recent projects. We're proud of the work we do and the results we've achieved for our clients.",
        category: "Project"
    },

    // Company
    {
        question: "Where is Mozo Technologies located?",
        answer: "Our headquarters are in Islamabad, Pakistan, but we are a remote-first company with a global team of experts. This allows us to work with clients from all over the world.",
        category: "Company"
    },
    {
        question: "What is the story behind the name 'Mozo'?",
        answer: "Mozo is inspired by the idea of 'momentum'. We aim to be the driving force that propels our clients' businesses forward in the digital landscape.",
        category: "Company"
    },

    // Support
    {
        question: "What kind of support do you offer after a project is launched?",
        answer: "We offer a range of support packages, from basic maintenance to dedicated support contracts. We're here to help with any issues, updates, or new features you may need.",
        category: "Support"
    },
    {
        question: "How can I get in touch with your support team?",
        answer: "You can reach our support team by emailing support@mozotechnologies.com or by using the contact form on our website. We're available 24/7 to assist you.",
        category: "Support"
    }
];

const categories = ["All", "General", "Services", "Process", "Project", "Company", "Support"];

const FAQs = () => {
	const [openKey, setOpenKey] = useState(null);
	const [selectedCategory, setSelectedCategory] = useState("All");

	// Get unique categories
	const uniqueCategories = ["All", ...new Set(faqs.map(faq => faq.category))];

	// Filter FAQs by category
	const filteredFaqs =
  selectedCategory === "All"
    ? faqs
    : faqs.filter(faq => faq.category === selectedCategory);

	return (
		<SectionWrapper id="faqs" className={`py-20 lg:py-28 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden ${montserrat.className}`}>
			{/* Background Elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-20 right-10 w-72 h-72 bg-[#F06A6A]/5 rounded-full blur-3xl"></div>
				<div className="absolute bottom-20 left-10 w-96 h-96 bg-black/3 rounded-full blur-3xl"></div>
			</div>

			<div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Enhanced Section Header */}
				<div
					className="text-center mb-16"
				>
					<div className="inline-flex items-center px-4 py-2 bg-[#F06A6A]/10 rounded-full mb-6">
						<span className="w-2 h-2 bg-[#F06A6A] rounded-full mr-3 animate-pulse"></span>
						<span className="text-sm font-medium text-[#F06A6A] uppercase tracking-wider">FAQ's</span>
					</div>

					<h2 className="text-center text-4xl md:text-5xl font-semi-bold mb-10 text-[#18181e] leading-tight">
			 Frequently Asked <br className="md:hidden" /> Questions     
		</h2>

					<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
						Got questions? We've got answers. Here are the most common questions our clients ask about our services and process.
					</p>
				</div>

				{/* Category Filter */}
				<div
					className="flex flex-wrap justify-center gap-3 mb-12"
				>
					{uniqueCategories.map((category) => (
						<button
							key={category}
							onClick={() => {
								setSelectedCategory(category);
								setOpenKey(null); // Close any open FAQ when switching categories
							}}
							className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
								selectedCategory === category
									? 'bg-[#F06A6A] text-white shadow-lg scale-105'
									: 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-[#F06A6A]/30 hover:text-[#F06A6A]'
							}`}
						>
							{category}
						</button>
					))}
				</div>

				{/* FAQ Items */}
				<div
					className="space-y-4"
				>
					{filteredFaqs.map((faq) => (
						<div key={faq.question} className="group">
							<div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 hover:border-[#F06A6A]/30 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
								<button
									className="w-full flex items-center justify-between p-6 lg:p-8 text-left focus:outline-none focus:ring-2 focus:ring-[#F06A6A]/20 focus:ring-inset transition-all duration-300"
									onClick={() => setOpenKey(openKey === faq.question ? null : faq.question)}
								>
									<div className="flex-1 pr-4">
										{/* Category Badge */}
										<div className="inline-flex px-3 py-1 bg-[#F06A6A]/10 text-[#F06A6A] text-xs font-semibold rounded-full mb-3">
											{faq.category}
										</div>
										
										{/* Question */}
										<h3 className="text-lg lg:text-xl font-semibold text-gray-900 group-hover:text-[#F06A6A] transition-colors duration-300">
											{faq.question}
										</h3>
									</div>

									{/* Toggle Icon */}
									<div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-[#F06A6A] to-red-500 flex items-center justify-center transition-all duration-300 ${
										openKey === faq.question ? "rotate-45 scale-110" : "rotate-0 scale-100"
									}`}>
										<svg
											className="w-5 h-5 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M12 6v6m0 0v6m0-6h6m-6 0H6"
											/>
										</svg>
									</div>
								</button>

								{/* Answer */}
								{openKey === faq.question && (
									<div
										className="overflow-hidden"
									>
										<div className="px-6 lg:px-8 pb-6 lg:pb-8">
											<div className="border-t border-gray-100 pt-6">
												<p className="text-gray-600 leading-relaxed text-base lg:text-lg">
													{faq.answer}
												</p>
											</div>
										</div>
									</div>
								)}
							</div>
						</div>
					))}
				</div>

				{/* No FAQs Message */}
				{filteredFaqs.length === 0 && (
  <div className="text-gray-500 py-8 text-center">
    No FAQs available for this category.
  </div>
)}

				{/* CTA Section */}
				<div
					className="text-center mt-16"
				>
					<div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
						<h3 className="text-2xl font-bold text-gray-900 mb-4">
							Still Have Questions?
						</h3>
						<p className="text-gray-600 mb-6 max-w-2xl mx-auto">
							Can't find the answer you're looking for? Our team is here to help. Get in touch and we'll get back to you within 24 hours.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a
								href="#contact"
								className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#F06A6A] to-red-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
							>
								Contact Us
								<svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
							</a>
							<a
								href="/get-started"
								className="inline-flex items-center px-8 py-4 bg-white text-[#F06A6A] font-semibold rounded-2xl border-2 border-[#F06A6A] hover:bg-[#F06A6A] hover:text-white transition-all duration-300"
							>
								Schedule a Call
								<svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Enhanced Custom Styles */}
			<style jsx>{`
				@keyframes gradient-x {
					0%, 100% { background-size: 200% 200%; background-position: left center; }
					50% { background-size: 200% 200%; background-position: right center; }
				}
				.animate-gradient-x {
					animation: gradient-x 3s ease infinite;
				}
			`}</style>
		</SectionWrapper>
	);
};

export default FAQs;