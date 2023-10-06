import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FormContainer, FormTitle } from '../style/FormStyle';
import FindIdForm from '../components/form/FindIdForm';

export default function FindIdPage(){
  return(
  <>
  <Helmet>
    <title>쿠키페이퍼 | 아이디 찾기</title>
  </Helmet>
  <FormContainer width="285px">
    <FormTitle>아이디 찾기</FormTitle>
    <FindIdForm />
  </FormContainer>
  </>
  );
}