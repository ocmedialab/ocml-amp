import styled from 'styled-components';

export const CabinetBase = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  .viz-wrap {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    transform: translate(0px, -140px);
  }
`;

export const CabinetBg = styled.img`
  display: block;
  max-width: 100%;
  height: 100%;
`;

export const Viz = styled.canvas`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;
