import React, { useState } from 'react';
import Image from 'next/image';
import SectionWrapper from './SectionWrapper';
import { poppins } from './ui/font'; // Assuming font is accessible for the heading

const allTechnologies = [
  // Web Dev Technologies
  { name: 'Next.js', icon: '/icons/nextjs.svg', category: 'webdev' },
  { name: 'Tailwind CSS', icon: '/icons/tailwind.svg', category: 'webdev' },
  { name: 'Node.js', icon: '/icons/nodejs.svg', category: 'webdev' },
  { name: 'React.js', icon: '/icons/reactjs.svg', category: 'webdev' },
  { name: 'Shopify', icon: '/icons/shopify.svg', category: 'webdev' },
  { name: 'Wordpress', icon: '/icons/wordpress.svg', category: 'webdev' },
  { name: 'Vercel', icon: '/icons/vercel.svg', category: 'webdev' },
  { name: 'PHP', icon: '/icons/php.svg', category: 'webdev' },
  { name: 'Django', icon: '/icons/django.svg', category: 'webdev' },
  { name: 'Express', icon: '/icons/express.svg', category: 'webdev' },
  { name: 'TypeScript', icon: '/icons/typescript.svg', category: 'webdev' },
  { name: 'Java', icon: '/icons/java.svg', category: 'webdev' },
  { name: '.NET', icon: '/icons/dotnet.svg', category: 'webdev' },
  { name: 'WooCommerce', icon: '/icons/woocommerce.svg', category: 'webdev' },

  // DevOps Technologies
  { name: 'Terraform', icon: '/icons/terraform.svg', category: 'devops' },
  { name: 'AWS', icon: '/icons/aws.svg', category: 'devops' },
  { name: 'Azure', icon: '/icons/azure.svg', category: 'devops' },
  { name: 'Docker', icon: '/icons/docker.svg', category: 'devops' },
  { name: 'Kubernetes', icon: '/icons/kubernetes.svg', category: 'devops' },
  { name: 'GitLab', icon: '/icons/gitlab.svg', category: 'devops' },
  { name: 'Nginx', icon: '/icons/nginx.svg', category: 'devops' },
  { name: 'Ansible', icon: '/icons/ansible.svg', category: 'devops' },
  { name: 'Google Cloud', icon: '/icons/google.svg', category: 'devops' },
  { name: 'DigitalOcean', icon: '/icons/digitalocean.svg', category: 'devops' },
  { name: 'Apache', icon: '/icons/apache.svg', category: 'devops' },
  { name: 'Grafana', icon: '/icons/grafana.svg', category: 'devops' },
  { name: 'Prometheus', icon: '/icons/prometheus.svg', category: 'devops' },
  { name: 'Jenkins', icon: '/icons/jenkins.svg', category: 'devops' },

  // AI Technologies
  { name: 'Python', icon: '/icons/python.svg', category: 'ai' }, // Python can be in multiple
  { name: 'Tensorflow', icon: '/icons/tensorflow.svg', category: 'ai' },
  { name: 'Kaggle', icon: '/icons/kaggle.svg', category: 'ai' },
  { name: 'OpenAI', icon: '/icons/openai.svg', category: 'ai' },
  { name: 'Numpy', icon: '/icons/numpy.svg', category: 'ai' },
  { name: 'PyTorch', icon: '/icons/pytorch.svg', category: 'ai' },
  { name: 'Jupyter', icon: '/icons/jupyter.svg', category: 'ai' },
  { name: 'Pandas', icon: '/icons/pandas.svg', category: 'ai' },
  { name: 'Keras', icon: '/icons/keras.svg', category: 'ai' },
  { name: 'Spark', icon: '/icons/spark.svg', category: 'ai' },
  { name: 'Kafka', icon: '/icons/kafka.svg', category: 'ai' },
  { name: 'Cassandra', icon: '/icons/cassandra.svg', category: 'ai' },
];

const categories = [
  { title: 'Web Development', key: 'webdev' },
  { title: 'DevOps & Cloud', key: 'devops' },
  { title: 'Artificial Intelligence', key: 'ai' },
];

const INITIAL_VISIBLE_LOGOS = 21;

const TechnologyStrip = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedTechnologies = showAll ? allTechnologies : allTechnologies.slice(0, INITIAL_VISIBLE_LOGOS);

  return (
    <SectionWrapper className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-12">Technologies We Use</h2>
        <div className="grid grid-cols-7">
          {displayedTechnologies.map((tech, idx) => (
            <div
              key={idx}
              className="py-4 flex items-center justify-center"
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                width={48}
                height={48}
                className="object-contain h-12 w-12 filter grayscale"
              />
            </div>
          ))}
        </div>
        {!showAll && allTechnologies.length > INITIAL_VISIBLE_LOGOS && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="text-[#1f2937] text-sm text--600 transition-colors inline-flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M3.293 15.707a1 1 0 010-1.414L7.586 10 3.293 5.707a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              Explore more
            </button>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};

export default TechnologyStrip;