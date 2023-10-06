import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FormContainer, FormTitle, LinkBox, BasicLink} from '../style/FormStyle';
import { LinkButton } from '../style/LoginStyle';
import LoginForm from '../components/form/LoginForm';

export default function LoginPage(){
  return(
    <>
    <Helmet>
      <title>쿠키페이퍼 | 로그인</title>
    </Helmet>
    <FormContainer width="284px">
      <FormTitle>로그인</FormTitle>
      <LoginForm />
      <LinkButton to="/join/info">회원가입</LinkButton>
      <LinkBox $top="144px">
      <BasicLink to="/find/userid">아이디 찾기</BasicLink>
      <BasicLink to="/find/userpw">비밀번호 찾기</BasicLink>
    </LinkBox>
    </FormContainer>
  </>
  );
}
