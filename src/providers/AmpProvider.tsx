import { ReactNode, useRef } from 'react';
import AmpContext from '../context/AmpContext';

interface AmpProviderProps {
  children: ReactNode;
}

const AmpProvider = ({ children }: AmpProviderProps) => {
  const canvas = useRef<HTMLCanvasElement | null>(null);

  return <AmpContext.Provider value={{ canvas }}>{children}</AmpContext.Provider>;
};

export default AmpProvider;
