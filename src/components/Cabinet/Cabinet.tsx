import React, { FC } from 'react';
import Canvas from '../Canvas/Canvas';
import Logo from '../share/Logo/Logo';
import { CabinetBase } from './Cabinet.styles';

// enum CabinetType {
//   one = 1,
//   two = 2,
//   three = 3,
// }

interface CabinetProps {
  // cabinetType: number;
}

// const cabinet = new Map([
//   [CabinetType.one, { src: orangeAmp, alt: 'OC Media Amp - Orange' }],
// ]);

const Cabinet: FC<CabinetProps> = () => {
  return (
    <CabinetBase>
      <Canvas />
      <Logo
        className={'viz-wrap--logo'}
        animateStroke={false}
        stroke={'#ffffff'}
        strokeWidth={'3'}
        fill={'transparent'}
      />
    </CabinetBase>
  );
};

export default Cabinet;
