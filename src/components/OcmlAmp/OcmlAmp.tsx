import AmpProvider from '../../providers/AmpProvider';
import Cabinet from '../Cabinet/Cabinet';
import Eq from '../Eq/Eq';
import AmpWrap from './OcmlAmp.styles.';

export const OcmlAmp = () => {
  return (
    <AmpProvider>
      <AmpWrap>
        <Eq />
        <Cabinet />
      </AmpWrap>
    </AmpProvider>
  );
};
