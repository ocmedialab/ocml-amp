import React, { FC, MutableRefObject, ReactNode, useRef } from 'react';
import AmpContext from '../context/AmpContext';

interface AmpProviderProps {
  children: ReactNode;
}

const AmpProvider: FC<AmpProviderProps> = ({ children }) => {
  const canvas = useRef() as MutableRefObject<HTMLCanvasElement>;

  return (
    <AmpContext.Provider value={{ canvas }}>{children}</AmpContext.Provider>
  );
};

export default AmpProvider;
