import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FormContainer, FormTitle, LinkBox, BasicLink} from '../style/Form.style';
import { LinkButton } from '../style/Login.style';
import LoginForm from '../components/form/LoginForm';
import { useNavigate } from 'react-router';
import { useRecoilValue } from 'recoil';
import { LoginState } from '../atoms/loginState';

export default function LoginPage(){
  //로그인상태일때 접속 불가
  const isLoggedIn = useRecoilValue(LoginState);
  const navigate = useNavigate();
  if(isLoggedIn === true) navigate("/");

  return(
    <>
    <Helmet>
      <title>쿠키페이퍼 | 로그인</title>
    </Helmet>
    <FormContainer width="284px">
      <FormTitle $marginb="62px">로그인</FormTitle>
      <LoginForm />
      <LinkButton to="/join">회원가입</LinkButton>
      <LinkBox $top="144px">
      <BasicLink to="/find/userid">아이디 찾기</BasicLink>
      <BasicLink to="/find/userpw">비밀번호 찾기</BasicLink>
    </LinkBox>
    </FormContainer>
  </>
  );
}
