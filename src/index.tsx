import React, { FC } from 'react';
import { isChrome } from 'react-device-detect';
import Amp from './components/Amp/Amp';
import UserManual from './components/UserManual/UserManual';
import ChromeOnly from './components/ChromeOnly/ChromeOnly';
import { UserManualPos } from './components/UserManual/UserManual';
import OcmlAmpStyles from './index.styles';

export interface OcmlAmp {
  userManual?: boolean;
  userManualPos?: UserManualPos;
}

const TOP_POS = 't';

export const OcmlAmp: FC<OcmlAmp> = ({
  userManual,
  userManualPos = UserManualPos.topMiddle,
}) => {
  const topManualPos = userManualPos.charAt(0) === TOP_POS;
  const M = <UserManual pos={userManualPos} />;

  return (
    <OcmlAmpStyles className="ocml-amp">
      {isChrome ? (
        <>
          {userManual && topManualPos ? M : null}
          <Amp />
          {userManual && !topManualPos ? M : null}
        </>
      ) : (
        <ChromeOnly />
      )}
    </OcmlAmpStyles>
  );
};
