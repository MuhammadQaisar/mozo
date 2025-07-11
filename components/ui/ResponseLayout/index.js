import React from 'react';

const ResponsiveLayout = ({ children, className = '' }) => {
  return (
    <div className={`custom-screen ${className}`}>
      <div className="w-full">
        {children}
      </div>
    </div>
  );
};

export default ResponsiveLayout;
