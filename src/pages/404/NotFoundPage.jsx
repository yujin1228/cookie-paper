import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Container = styled.div`
  width: fit-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
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
  line-height: 19px;
`;

const ToHome = styled(Link)`
  width: 286px;
  padding: 15px 0;
  background-color: var(--gray-700);
  color: var(--white);
  margin-top: 32px;
`;

export default function NotFoundPage() {
  return (
    <Container>
      <Title>404</Title>
      <NotFound>Not Found</NotFound>
      <P>
        찾을 수 없는 페이지입니다.
        <br />
        요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨어요 :&#41;
      </P>
      <ToHome to="/">홈으로 이동</ToHome>
    </Container>
  );
}
