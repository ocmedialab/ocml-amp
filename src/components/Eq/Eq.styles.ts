import styled from 'styled-components';
import { eq } from '../../utils/constants';

export default styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  background-color: #545358;
  border-bottom: 1rem solid #797572;
  padding: 10px 20px;
  height: ${eq.desktopHeight};
`;
