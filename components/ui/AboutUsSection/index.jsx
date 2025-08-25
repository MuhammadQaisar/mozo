import React from 'react';

const AboutUsSection = ({ title, description, children }) => {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto">
        {title && (
          <h2 className="text-4xl font-extrabold text-center mb-8 md:mb-12 text-black">
            {title}
          </h2>
        )}
        {description && (
          <p className="text-xl text-center max-w-3xl mx-auto mb-12 text-black">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

export default AboutUsSection;
