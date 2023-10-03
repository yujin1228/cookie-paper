import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FormContainer, Form, FormTitle, Button, LinkBox, BasicLink } from './_FormStyle'

export default function Login() {
  const [userId,setUserId] = useState('');
  const [userPw,setUserPw] = useState('');

  return (
  <FormContainer width="284px">
    <FormTitle>로그인</FormTitle>
    <Form>
      <Input id="userId" placeholder="ID" type="text"
      />
      <Input id="userPw" placeholder="Password" type="password"
      />
      <Button>로그인</Button>
    </Form>
    <LinkButton to="/join/info">회원가입</LinkButton>
    <LinkBox marginTop="144px">
      <BasicLink to="/find/userid">아이디 찾기</BasicLink>
      <BasicLink to="/find/userpw">비밀번호 찾기</BasicLink>
    </LinkBox>
  </FormContainer>
  );
}

const Input = styled.input`
    width: 100%;
    border: 4px solid var(--brown-300);   
    border-radius: 16px;
    background-color: var(--orange-300);
    padding: 12px;
    font-family: var(--basic-font);
    font-size: 16px;
    line-height: 19px;

    &::placeholder {
        color: var(--black);
    }
`;

const LinkButton = styled(Link)`
    display: inline-block;
    text-align: center;
    width: 100%;
    border-radius: 16px;
    background-color: var(--orange-400);
    color: var(--black);
    margin-top: 20px;
    padding: 16px 0;
    font-size: 20px;
    line-height: 27px;
    cursor: pointer;
`;