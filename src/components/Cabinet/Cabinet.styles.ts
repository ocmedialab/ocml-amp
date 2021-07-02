import styled from 'styled-components';

export const CabinetBase = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  .viz-wrap {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    padding: 0 11% 13% 11%;
  }
`;

export const CabinetBg = styled.img`
  display: block;
  max-width: 100%;
`;

export const Viz = styled.canvas`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;
