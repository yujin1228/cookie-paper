import React from 'react';
import { FormContainer, FormTitle, Form, LinkBox, BasicLink, FormGroup, Label, Input, Button} from './_FormStyle';

export default function FindId() {
  return(
    <FormContainer>
      <FormTitle>아이디 찾기</FormTitle>
      <Form>
        <FormGroup>
            <Label for="userEmail">이메일</Label>
            <Input id="userEmail" placeholder="이메일을 입력해주세요" 
            type="text"/>
        </FormGroup>
        <Button disabled>이메일로 아이디 전송</Button>
      </Form>
      <LinkBox marginTop="160px">
        <BasicLink to="/login">로그인 하러가기</BasicLink>
        <BasicLink to="/join/info">회원가입</BasicLink>
      </LinkBox>
    </FormContainer>
  );
}