import React from 'react';

const ResponsiveLayout = ({ children, className = '' }) => {
  return (
    <div className={`px-4 py-8 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-screen-xl mx-auto w-full">
        {children}
      </div>
    </div>
  );
};

export default ResponsiveLayout;
