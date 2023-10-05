import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FormContainer, FormTitle, Form, LinkBox, BasicLink, FormGroup, Label, Input, Button} from '../../components/form/FormStyle';
import CheckEmail from '../../components/form/CheckEmail';

export default function FindPw() {
  return (
    <>
    <Helmet>
      <title>쿠키페이퍼 | 비밀번호 찾기</title>
    </Helmet>
    <FormContainer width="285px">
      <FormTitle>비밀번호 찾기</FormTitle>
      <Form>
        <FormGroup>
            <Label htmlFor="userId">아이디</Label>
            <Input id="userId" placeholder="아이디를 입력해주세요" 
            type="text" required />
        </FormGroup>
        <CheckEmail page="findpw" />
        <FormGroup>
            <Label htmlFor="userPw">새 비밀번호 입력</Label>
            <Input id="userPw" placeholder="영문, 숫자, 특수문자 포함 8자-30자" 
            type="password" minLength={8} maxLength={30} 
            pattern="^[a-zA-Z]+[0-9]+[!@#$%^&]+$"
            required disabled/>
        </FormGroup>
        <Button $top="28px" disabled>비밀번호 재설정</Button>
      </Form>
      <LinkBox $top="100px">
        <BasicLink to="/login">로그인 하러가기</BasicLink>
        <BasicLink to="/join/info">회원가입</BasicLink>
      </LinkBox>
    </FormContainer>
    </>
  );
}