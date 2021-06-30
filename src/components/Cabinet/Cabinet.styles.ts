import styled from 'styled-components';

export const CabinetBase = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
`;

export const CabinetBg = styled.img`
  display: block;
  max-width: 100%;
`;

export const Viz = styled.canvas`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  padding: 92px;
`;
