import styled from 'styled-components';

export const CheckBoxWrap = styled.div`
  text-align: center;
  position: relative;
  .checkbox {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
    cursor: pointer;
    &:checked + .checkmark {
      background-color: red;
      &::after {
        display: block;
        font-weight: 900;
        font-size: 30px;
        text-align: center;
      }
    }
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 80px;
    width: 80px;
    background-color: #202020;
    border: 10px solid #000000;
    transform: translateY(35px);
    &::after {
      content: 'ON';
      position: absolute;
      display: none;
      color: #ffffff;
      left: 0;
      right: 0;
      margin: auto;
      padding-top: 13px;
    }
  }
  &:hover .checkmark {
    background-color: #fdfdfd;
  }
`;
