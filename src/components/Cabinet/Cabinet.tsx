import React, { FC, MutableRefObject } from 'react';
import { CabinetBase, CabinetBg, Viz } from './Cabinet.styles';
import orangeAmp from '../../assets/img/amp-bg.png';

export enum CabinetType {
  one = 1,
  two = 2,
  three = 3,
}

export interface CabinetProps {
  cabinetType: number;
  visualizer: MutableRefObject<HTMLCanvasElement | null>;
}

const cabinet = new Map([[CabinetType.one, { src: orangeAmp, alt: 'OC Media Amp - Orange' }]]);

const Cabinet: FC<CabinetProps> = ({ cabinetType, visualizer }) => {
  const imgAttr = cabinet.get(cabinetType);

  return (
    <CabinetBase>
      <CabinetBg src={imgAttr?.src} alt={imgAttr?.alt} />
      <Viz ref={visualizer} />
    </CabinetBase>
  );
};

export default Cabinet;
