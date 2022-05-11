import React, { FC, MutableRefObject } from 'react';
import { CabinetBase, Viz } from './Cabinet.styles';
// import orangeAmp from '../../assets/img/amp-bg.png';

// enum CabinetType {
//   one = 1,
//   two = 2,
//   three = 3,
// }

// lib creation problems with embedded img
// will have to build cabeitn styles with css, maybe use three.js
interface CabinetProps {
  // cabinetType: number;
  visualizer: MutableRefObject<HTMLCanvasElement | null>;
}

// const cabinet = new Map([
//   [CabinetType.one, { src: orangeAmp, alt: 'OC Media Amp - Orange' }],
// ]);

const Cabinet: FC<CabinetProps> = ({ visualizer }: CabinetProps) => {
  // const imgAttr = cabinet.get(cabinetType);

  return (
    <CabinetBase>
      {/* <CabinetBg src={imgAttr?.src} alt={imgAttr?.alt} /> */}
      <div className="viz-wrap">
        <Viz ref={visualizer} />
      </div>
    </CabinetBase>
  );
};

export default Cabinet;
