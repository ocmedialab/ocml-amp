import React from 'react';
import { Amp } from '../types/ocml-amp';
import UserManual from './components/UserManual/UserManual';
import { default as AmpBase } from './components/Amp/Amp';
import OcmlAmpStyles from './index.styles';

export const OcmlAmp: Amp = () => {
  return (
    <OcmlAmpStyles>
      <AmpBase />
      <UserManual />
    </OcmlAmpStyles>
  );
};
