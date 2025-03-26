import styled from 'styled-components';

export const CheckBox = styled.div`
  height: 52px;
  width: 52px;
  background-color: rgb(85, 89, 92);
  border: 6px solid rgb(24, 27, 28);
  margin: auto;
  transition: 0.3s cubic-bezier(0.6, 0, 0.2, 1);
  cursor: pointer;
  &:hover {
    background-color: rgb(250, 156, 52);
    &::after {
      display: block;
    }
  }

  &::after {
    transition: 0.3s cubic-bezier(0.6, 0, 0.2, 1);
    content: 'OFF';
    position: absolute;
    display: none;
    color: rgb(255, 255, 255);
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: fit-content;
    height: fit-content;
    font-weight: bold;
  }
`;

export const CheckBoxWrap = styled.div`
  padding: 10px;
  background-color: #2c2d2f;
  height: 149px;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: flex-end;

  &.on {
    ${CheckBox} {
      background-color: rgb(250, 156, 52);
      &::after {
        content: 'ON';
        display: block;
      }
    }
  }
`;
