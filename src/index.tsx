import React from 'react';
import { OcmlAmp as AmpT } from '../types/';
import UserManual from './components/UserManual/UserManual';
import Amp from './components/Amp/Amp';
import OcmlAmpStyles from './index.styles';

export const OcmlAmp: AmpT = () => {
  return (
    <OcmlAmpStyles className="ocml-amp">
      <Amp />
      <UserManual />
    </OcmlAmpStyles>
  );
};
