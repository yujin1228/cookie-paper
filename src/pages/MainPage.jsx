import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Logo, ButtonBox, UserButtonBox, UserButton } from '../style/MainStyle';
import { Body, Bg, Button } from '../style/ShareStyle';

export default function MainPage(){
  return(
    <>
    <Helmet>
      <title>쿠키페이퍼</title>
    </Helmet>
    <Body>
      <Bg>
        <Container>
          <Logo />
          <ButtonBox>
            <Button to="/ovenlist">오븐 구경하기</Button>
          </ButtonBox>
          <UserButtonBox>
            <UserButton to="/login">로그인</UserButton>
            <UserButton to="/join">회원가입</UserButton>
          </UserButtonBox>          
        </Container>
      </Bg>
    </Body>
    </>
  );
}