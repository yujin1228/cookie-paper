import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BasicLink, FormContainer, FormTitle, LinkBox } from '../style/Form.style';
import FindPwForm from '../components/form/FindPwForm';

export default function FindPwPage(){
  return(
  <>
  <Helmet>
    <title>쿠키페이퍼 | 비밀번호 찾기</title>
  </Helmet>
  <FormContainer width="285px">
    <FormTitle>비밀번호 찾기</FormTitle>
    <FindPwForm />
    <LinkBox $top="100px">
      <BasicLink to="/login">로그인 하러가기</BasicLink>
      <BasicLink to="/join">회원가입</BasicLink>
    </LinkBox>
  </FormContainer>
  </>
  );
}

