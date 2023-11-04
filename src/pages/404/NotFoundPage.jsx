import React from 'react';
import { useNavigate } from 'react-router';

import { styled } from 'styled-components';

const Container = styled.div`
  width: fit-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: var(--black);
  font-size: 86px;
  font-weight: 700;
  line-height: 117px;
`;

const NotFound = styled.h2`
  color: var(--black);
  font-size: 28px;
  font-weight: 700;
  line-height: 38px;
`;

const P = styled.p`
  color: var(--black);
  font-size: 16px;
  font-family: var(--basic-font);
  line-height: 19px;
  text-align: center;
`;

const ToHome = styled.button`
  width: 286px;
  padding: 15px 0;
  background-color: var(--gray-700);
  color: var(--white);
  margin-top: 32px;
  border-radius: 12px;
`;

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>404</Title>
      <NotFound>Not Found</NotFound>
      <P>
        찾을 수 없는 페이지입니다.
        <br />
        요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨어요 :&#41;
      </P>
      <ToHome onClick={() => navigate('/')}>홈으로 이동</ToHome>
    </Container>
  );
}
