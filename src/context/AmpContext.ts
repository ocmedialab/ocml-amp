import { createContext, MutableRefObject } from 'react';

interface AmpContextI {
  canvas: MutableRefObject<HTMLCanvasElement>;
}

const AmpContext = createContext({} as AmpContextI);

export default AmpContext;
