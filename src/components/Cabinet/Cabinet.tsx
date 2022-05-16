import React, { FC } from 'react';
import Canvas from '../Canvas/Canvas';
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
      <div className="viz-wrap">
        <Canvas />
      </div>
    </CabinetBase>
  );
};

export default Cabinet;
