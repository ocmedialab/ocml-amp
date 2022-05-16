import React, { FC } from 'react';
import Cabinent from '../Cabinet/Cabinet';
import Eq from '../Eq/Eq';
import AmpWrap from './Amp.styles';
import AmpProvider from '../../providers/AmpProvider';

const Amp: FC = () => {
  return (
    <AmpWrap>
      <AmpProvider>
        <Eq />
        <Cabinent />
      </AmpProvider>
    </AmpWrap>
  );
};

export default Amp;
