import React, { FC } from 'react';
import Amp from './components/Amp/Amp';
import UserManual from './components/UserManual/UserManual';
import OcmlAmpStyles from './index.styles';

interface OcmlAmp {
  withManual: boolean;
}

export const OcmlAmp: FC<OcmlAmp> = ({ withManual }) => {
  return (
    <OcmlAmpStyles className="ocml-amp">
      <Amp />
      {withManual ? <UserManual /> : null}
    </OcmlAmpStyles>
  );
};
