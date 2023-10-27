import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BasicLink, FormContainer, FormTitle, LinkBox } from 'components/form/Form.style';
import FindIdForm from 'components/form/FindId/FindIdForm';

export default function FindIdPage() {
  return (
    <>
      <Helmet>
        <title>쿠키페이퍼 | 아이디 찾기</title>
      </Helmet>
      <FormContainer width="285px">
        <FormTitle $marginb="42px">아이디 찾기</FormTitle>
        <FindIdForm />
        <LinkBox $top="160px">
          <BasicLink to="/login">로그인 하러가기</BasicLink>
          <BasicLink to="/join">회원가입</BasicLink>
        </LinkBox>
      </FormContainer>
    </>
  );
}
