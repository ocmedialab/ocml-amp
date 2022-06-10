import styled, { keyframes } from 'styled-components';
import { UserManualPos } from './UserManual';

const openModal = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
    visibility: visible;
  }
`;

const closeModal = keyframes`
  from {
    opacity: 1;
  }
  to {
    visibility: hidden;
    opacity: 0;
  }
`;

interface UserManualWrapStylesProps {
  pos: UserManualPos;
}

export const UserManualWrapStyles = styled.div<UserManualWrapStylesProps>`
  & > button {
    margin-bottom: 1rem;
  }
`;

export const UserManualStyles = styled.div`
  left: 0;
  top: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.99);
  color: #ffffff;
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  align-items: flex-start;
  padding-top: 10vh;
  visibility: hidden;
  z-index: 0;
  animation: ${closeModal} 0.03s ease-in-out 0s 1 normal forwards;

  &.open {
    z-index: 1;
    animation: ${openModal} 0.03s ease-in-out 0s 1 normal forwards;
  }

  & .modal {
    &--header {
      display: grid;
      grid-template-columns: auto auto;
      align-items: center;
      justify-content: space-between;
      h1 {
        font-weight: 900;
      }
    }
    &--body {
      ol {
        margin-bottom: 0.5rem;
      }
    }
  }
`;
