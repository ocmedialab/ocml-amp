import React from 'react';
import Canvas from '../Canvas/Canvas';
import Logo from '../share/Logo/Logo';
import { CabinetBase } from './Cabinet.styles';

const Cabinet = () => {
  return (
    <CabinetBase>
      <Canvas />
      <Logo />
    </CabinetBase>
  );
};

export default Cabinet;
