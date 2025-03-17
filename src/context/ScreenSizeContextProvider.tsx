import React, { createContext, useState, useEffect, ReactNode } from 'react';

const ScreenContext = createContext<any>(undefined);

function useStateScreenContext() {
  const value = React.useContext(ScreenContext);
  if (!value) {
    throw new Error('ScreenContext has not been set yet');
  }
  return value;
}

interface ScreenSizeContextProviderProps {
  children: ReactNode;
}

const ScreenSizeContextProvider = ({ children }: ScreenSizeContextProviderProps) => {
  const [screenSize, setScreenSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ScreenContext.Provider value={screenSize}>
      {children}
    </ScreenContext.Provider>
  );
};

export { ScreenSizeContextProvider, useStateScreenContext };
