import styled from 'styled-components';

interface DialPathProps {
  $dashOffset?: number;
}

export const DialPath = styled.path<DialPathProps>`
  fill: none;
  stroke-dashoffset: ${({ $dashOffset }) => $dashOffset};
`;

export const DialSvg = styled.svg.attrs({
  viewBox: '0 0 100 100',
})`
  pointer-events: none;
  position: absolute;
  stroke-width: 8;
  stroke-dasharray: 184 184;
  stroke-linecap: round !important;

  ${DialPath} {
    stroke: #55595C; 
  }

  ${DialPath} + ${DialPath} {
    stroke: #888;
  }
`;

export const KnobLabel = styled.div`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #e4e8ea;
  text-align: center;
  font-weight: normal;
`;

export const KnobActiveLight = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  height: 10px;
  width: 10px;
  border-radius: 100%;
  background-color: #fa9c34;
`;

export const KnobDial = styled.div`
  height: 100px;
  width: 100px;
  text-align: left !important;
  transition: 0s;
  color: #888;
`;

export const KnobDialGrip = styled.div<{ $rotation: number }>`
  position: absolute;
  cursor: pointer;
  top: 50%;
  left: 50%;
  border-radius: 100%;
  transition: 0s;
  height: 72px;
  width: 72px;
  border: 6px solid #181b1c;
  transform: ${({ $rotation }) =>
    `translate(-50%,-50%) rotate(${$rotation}deg)`};
  &::after {
    content: '';
    position: absolute;
    top: 5px;
    left: 50%;
    height: 10px;
    background-color: #e4e8ea;
    top: 0;
    left: 50%;
    width: 2px;
    transform: translateX(-50%);
  }
`;

export const Knob2Styles = styled.div`
  /* border-radius: 3px; */
  padding: 10px;
  background-color: #2c2d2f;
  /* border: 2px solid red; */
  display: inline-block;

  &.active {
    ${KnobDial} {
      color: #fa9c34;
    }
    ${DialSvg} {
      ${DialPath} + ${DialPath} {
        stroke: #FA9C34;
      } 
    }
  }

  * {
    transition: 0.3s cubic-bezier(0.6, 0, 0.2, 1);
  }

  /* .horz-center {
    position: absolute;  
    left: 50%;
     right: ;
    bottom: ;
    transform: translateX(-50%);
  } */

  /* .rela-block {
    display: block;
  } 
  .rela-inline {
    display: inline-block;
    position: relative;
  }*/
  /* .left {
    position: relative;
    float: left;
  }
  .right {
    position: relative;
    float: right;
  } 
  body {
    transition: 0s;
    background-color: #181b1c;
    font-family: monospace;
    color: #e4e8ea;
    font-size: 16px;
  }
   .container {
    margin: 20px auto;
    max-width: 700px;
    text-align: center;
  } */
  .effect-container {
    width: 140px;
    border-radius: 3px;
    text-align: center;
    margin: 0 10px 20px;
    background-color: #2c2d2f;
  }
  .effect-container.wide {
    width: auto;
  }
  .effect-container .knob {
    padding: 0;
    margin: 0 0 10px;
  }
  .effect-label {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 10px 0 10px 10px;
    border-bottom: 4px solid #181b1c;
  }
  .effect-active-light {
    position: absolute;
    top: 50%;
    left: 10px;
    /* right: ;
    bottom: ; */
    transform: translateY(-50%);
    height: 10px;
    width: 10px;
    border-radius: 100%;
  }
  /*
  .knob-container {
    padding: 10px 0;
  }
 .knob.style2 .dial-svg {
    stroke-width: 2.5;
  }
  .knob.style2 .dial-grip {
    height: 60px;
    width: 60px;
    background-color: #888;
  }
  .knob.style2 .dial-grip::after {
    height: 15px;
    background-color: #2c2d2f;
  }
  .knob.style3 .dial-svg {
    stroke-width: 2.75;
  }
  .knob.style3 .dial-grip {
    z-index: 5;
    height: 82px;
    width: 82px;
    transition: 0.3s cubic-bezier(0, 0, 0.24, 1);
  }
  .knob.style3 .dial-grip::after {
    height: 25px;
    width: 3px;
    border-radius: 4px;
    background-color: currentColor;
  } */
`;
