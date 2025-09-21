import { createContext, useState } from 'react';

const LogoContext = createContext();

export const LogoProvider = ({ children }) => {
  const [showFooterLogo, setShowFooterLogo] = useState(false);

  return (
    <LogoContext.Provider value={{ showFooterLogo, setShowFooterLogo }}>
      {children}
    </LogoContext.Provider>
  );
};

export default LogoContext;