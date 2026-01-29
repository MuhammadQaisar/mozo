import React, { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';

const projects = [
  {
    title: 'AI-Powered Chatbot',
    category: 'AI',
    image: 'Ai.png',
    description: 'A cutting-edge chatbot using natural language processing to understand and respond to user queries.',
  },
  {
    title: 'E-commerce Platform',
    category: 'Web Dev',
    image: '/muxilite-CaseStudy.png',
    description: 'A full-featured online store with a custom CMS and payment gateway integration.',
  },
  {
    title: 'Mobile App Redesign',
    category: 'UIUX',
    image: '/ui.png',
    description: 'A complete overhaul of a popular mobile app to improve user experience and engagement.',
  },
  {
    title: 'CI/CD Pipeline Implementation',
    category: 'DevOps',
    image: 'devops.png',
    description: 'Automated build, test, and deployment pipeline for a large-scale application.',
  },
  {
    title: 'Cloud Migration',
    category: 'Cloud',
    image: '/cloud-migration.png',
    description: 'Migrated a legacy system to a modern cloud infrastructure for better scalability and reliability.',
  },
  {
    title: 'Social Media Campaign',
    category: 'Digital Marketing',
    image: '/campaign.png',
    description: 'A successful digital marketing campaign that increased brand awareness and lead generation.',
  },
  {
    title: 'Predictive Analytics Dashboard',
    category: 'AI',
    image: '/predictive-analytics.png',
    description: 'A dashboard that visualizes predictive analytics data to help businesses make informed decisions.',
  },
  {
    title: 'Corporate Website Rebuild',
    category: 'Web Dev',
    image: '/eagle-securities-CaseStudy.png',
    description: 'A modern, responsive, and SEO-friendly corporate website built from the ground up.',
  },
];

const categories = ['All', 'Web Dev', 'AI', 'UIUX', 'DevOps', 'Cloud', 'Digital Marketing'];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <SectionWrapper>
      <div className="text-center mt-20">
        <h1 className="inline-block mb-4 text-xl font-normal border border-gray-500 px-4 py-2 rounded-full text-gray-500">Projects</h1>
        <p className="mt-4 text-4xl">Creating next generation digital products</p>
      </div>

      <div className="flex justify-center my-10">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-[#05243D] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <div key={project.title} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
              <p className="text-sm text-gray-500 mt-4">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsPage;