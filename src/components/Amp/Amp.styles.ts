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
  }
`;
