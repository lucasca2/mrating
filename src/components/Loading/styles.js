import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Loader = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`;


const Animation1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const Animation2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`;

const Animation3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

export const Circle = styled.div`
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
  
  &:nth-child(1) {
  left: 8px;
  animation: ${Animation1} 0.6s infinite;
  }
  &:nth-child(2) {
  left: 8px;
  animation: ${Animation2} 0.6s infinite;
  }
  &:nth-child(3) {
  left: 32px;
  animation: ${Animation2} 0.6s infinite;
  }
  &:nth-child(4) {
  left: 56px;
  animation: ${Animation3} 0.6s infinite;
  }
`;
