import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FormContainer, FormTitle } from '../style/FormStyle';
import JoinForm from '../components/form/JoinForm';

export default function JoinPage(){
    return(
    <>
    <Helmet>
        <title>쿠키페이퍼 | 회원가입</title>
    </Helmet>
    <FormContainer width="285px">
        <FormTitle>회원가입</FormTitle>
        <JoinForm />
    </FormContainer>
    </>
    );
}