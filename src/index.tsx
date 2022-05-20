import React, { FC } from 'react';
import { isChrome } from 'react-device-detect';
import Amp from './components/Amp/Amp';
import UserManual from './components/UserManual/UserManual';
import ChromeOnly from './components/ChromeOnly/ChromeOnly';
import OcmlAmpStyles from './index.styles';

interface OcmlAmp {
  withManual: boolean;
}

export const OcmlAmp: FC<OcmlAmp> = ({ withManual }) => {
  return (
    <OcmlAmpStyles className="ocml-amp">
      {isChrome ? (
        <>
          <Amp />
          {withManual ? <UserManual /> : null}
        </>
      ) : (
        <ChromeOnly />
      )}
    </OcmlAmpStyles>
  );
};
