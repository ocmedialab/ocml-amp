import { createContext } from 'react';
import type { AmpContextDefaultValue } from '../types';

const AmpContext = createContext<AmpContextDefaultValue>(null!);

export default AmpContext;
