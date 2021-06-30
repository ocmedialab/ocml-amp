import styled, { css } from 'styled-components';
import { BtnVariation } from './Btn';

const baseStyles = css<{ variation: BtnVariation }>`
  appearance: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 900;
  border: 0.2em solid;
  border-radius: 0;
  padding: 0.2em 0.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 150ms ease-in-out;
  font-weight: 900;
  border-color: ${(props) => (props.variation === BtnVariation.primary ? '#000000' : 'red')};
  color: ${(props) => (props.variation === BtnVariation.primary ? '#000000' : 'red')};

  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 100%;
    border-color: ${(props) => (props.variation === BtnVariation.primary ? '#000000' : 'red')};
    border-color: ${(props) => (props.variation === BtnVariation.primary ? '#000000' : 'red')};
    z-index: -1;
    transition: width 150ms ease-in-out;
  }

  &:hover {
    color: #fff;
    &:after {
      width: 110%;
    }
  }

  &:focus {
    outline: 0;
    color: #fff;
    &:after {
      width: 110%;
    }
  }
`;

export default styled.button`
  ${baseStyles}
`;
