import React, { FC } from 'react';
import AmpProvider from '../../providers/AmpProvider';
import Cabinet from '../Cabinet/Cabinet';
import Eq from '../Eq/Eq';
import AmpWrap from './Amp.styles';

const Amp: FC = () => {
  return (
    <AmpProvider>
      <AmpWrap>
        <Eq />
        <Cabinet />
      </AmpWrap>
    </AmpProvider>
  );
};

export default Amp;
