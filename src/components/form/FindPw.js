import React from 'react';
import { FormContainer, FormTitle, Form, LinkBox, BasicLink, FormGroup, Label, Input, Button} from './_FormStyle';
import CheckEmail from './CheckEmail';

export default function FindPw() {
  return (
    <FormContainer width="285px">
      <FormTitle>비밀번호 찾기</FormTitle>
      <Form>
        <FormGroup>
            <Label for="userId">아이디</Label>
            <Input id="userId" placeholder="아이디를 입력해주세요" 
            type="text"/>
        </FormGroup>
        <CheckEmail />
        <FormGroup>
            <Label for="userPw">새 비밀번호 입력</Label>
            <Input id="userPw" placeholder="영문, 숫자, 특수문자 포함 8자-30자" 
            type="password" maxLength={30} disabled/>
        </FormGroup>
        <Button disabled>비밀번호 재설정</Button>
      </Form>
      <LinkBox marginTop="100px">
        <BasicLink to="/login">로그인 하러가기</BasicLink>
        <BasicLink to="/join/info">회원가입</BasicLink>
      </LinkBox>
    </FormContainer>
  );
}