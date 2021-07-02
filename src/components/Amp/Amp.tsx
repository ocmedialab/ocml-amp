import React, { FC, useState, useRef } from 'react';
import Cabinent, { CabinetType } from '../Cabinet/Cabinet';
import Eq from '../Eq/Eq';

const Amp: FC = () => {
  const [cabinetType] = useState(CabinetType.one);
  const visualizer = useRef<null | HTMLCanvasElement>(null);
  return (
    <>
      <Eq visualizer={visualizer} />
      <Cabinent visualizer={visualizer} cabinetType={cabinetType} />
    </>
  );
};

export default Amp;
