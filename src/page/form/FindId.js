import React from 'react';
import { FormContainer, FormTitle, Form, LinkBox, BasicLink, FormGroup, Label, Input, Button} from '../../components/form/FormStyle';
import { Helmet } from 'react-helmet-async';

export default function FindId() {
  return(
    <>
    <Helmet>
      <title>쿠키페이퍼 | 아이디 찾기</title>
    </Helmet>
    <FormContainer width="285px">
      <FormTitle>아이디 찾기</FormTitle>
      <Form>
        <FormGroup>
            <Label htmlFor="userEmail">이메일</Label>
            <Input id="userEmail" placeholder="이메일을 입력해주세요" 
            type="email" required/>
        </FormGroup>
        <Button>이메일로 아이디 전송</Button>
      </Form>
      <LinkBox $top="160px">
        <BasicLink to="/login">로그인 하러가기</BasicLink>
        <BasicLink to="/join/info">회원가입</BasicLink>
      </LinkBox>
    </FormContainer>
    </>
  );
}