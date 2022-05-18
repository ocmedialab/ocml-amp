import styled from 'styled-components';

export default styled.div`
  & * {
    box-sizing: border-box;
  }
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;
