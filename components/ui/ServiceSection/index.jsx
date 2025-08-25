import React from 'react';

const ServiceSection = ({ title, description, icon, children }) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 text-gray-900 dark:text-white shadow-lg rounded-lg mb-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:space-x-8">
        {icon && (
          <div className="flex-shrink-0 mb-6 md:mb-0">
            {/* Assuming icon is an SVG or an image component */}
            {icon}
          </div>
        )}
        <div>
          {title && (
            <h2 className="text-3xl font-extrabold mb-4 text-black">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-lg leading-relaxed text-black">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
