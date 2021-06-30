import styled from 'styled-components';

export default styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;

  &--controls {
    display: grid;
    grid-template-columns: auto auto auto auto auto; // num of cols
    justify-content: space-around;
    justify-items: center;
    &--wrap {
      cursor: pointer;
      .value {
        fill: #ffffff;
        font-weight: 900;
        font-size: 1.75rem;
      }
    }
    &--label {
      text-align: center;
      display: block;
      font-weight: 900;
      color: #000000;
      margin-bottom: 0.5rem;
      text-transform: uppercase;
      user-select: none;
    }
  }
`;
