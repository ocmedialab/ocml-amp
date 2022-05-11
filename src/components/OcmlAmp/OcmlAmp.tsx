/* eslint-disable import/prefer-default-export */
import React from 'react';
import { OcmlAmp } from '../../../types/ocml-amp';
import UserManual from '../UserManual/UserManual';
import Amp from '../Amp/Amp';
import OcmlAmpStyles from './OcmlAmp.styles';

const OcmlAmp: OcmlAmp = () => {
  return (
    <OcmlAmpStyles>
      <Amp />
      <UserManual />
    </OcmlAmpStyles>
  );
};

export default OcmlAmp;
