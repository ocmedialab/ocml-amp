import React, { useRef } from 'react';
import AmpContext from '../context/AmpContext';

const AmpProvider = ({ children }: any) => {
  const canvas = useRef<HTMLCanvasElement | null>(null);

  return (
    <AmpContext.Provider value={{ canvas }}>{children}</AmpContext.Provider>
  );
};

export default AmpProvider;
