import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import backgroundImg from '../assets/img/back_main.png';
import logo from '../assets/img/cookiepaper-logo.png';
import { Button } from '../components/share/Button';


export default function Main() {
  return (
    <Body>
      <Bg>
        <Container>
          <Logo />
          <ButtonBox>
            <Button to="/ovenlist">오븐 구경하기</Button>
          </ButtonBox>
          <UserButtonBox>
            <UserButton to="/login">로그인</UserButton>
            <UserButton to="/join/info">회원가입</UserButton>
          </UserButtonBox>          
        </Container>
      </Bg>
    </Body>
  );
}

export const Body = styled.div`
    height: 100vh;
    background-image:  linear-gradient(to right, #F9D695, #FCDEA4);
`;

export const Bg = styled.div`
    max-width: 1440px;
    height: 100vh;
    margin: 0 auto;
    background: url(${backgroundImg}) no-repeat;
    background-size: cover;
    background-position: top;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    position: absolute;
    top: 46%;
    left: 50%;
    transform: translate(-50%,-50%);
`;

const Logo = styled.div`
  width: 648px;
  height: 216px;
  background: url(${logo}) no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: 66px;
`;

const ButtonBox = styled.div`
  width: 285px;
  height: 150px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const UserButtonBox = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 72px;
`;

const UserButton = styled(Link)`
  width: 132px;
  padding: 14px 0;
  background-color: rgba(255, 255, 255, 0.84);
  border-radius: 4px;
  color: var(--black);
  font-size: 20px;
  font-family: var(--main-font);
  text-align: center;
  cursor: pointer;
`;