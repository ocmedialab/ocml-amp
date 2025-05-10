import AmpProvider from '../../providers/AmpProvider';
import Cabinet from '../Cabinet/Cabinet';
import Eq from '../Eq/Eq';
import { OcmlAmpWrapStyled } from './OcmlAmp.styles';

export const OcmlAmp = () => {
  return (
    <AmpProvider>
      <OcmlAmpWrapStyled>
        <Eq />
        <Cabinet />
      </OcmlAmpWrapStyled>
    </AmpProvider>
  );
};
