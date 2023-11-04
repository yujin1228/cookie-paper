import React from 'react';
import { keyframes, styled } from 'styled-components';
import loader from 'assets/img/icon_loader.svg';

const rotate = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadIcon = styled.img`
  width: 40px;
  animation: ${rotate} 1s linear infinite;
  opacity: 0.8;
`;

export default function Loader() {
  return (
    <Container>
      <LoadIcon src={loader} />
    </Container>
  );
}
