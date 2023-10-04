import React from 'react';
import styled from 'styled-components';
import { FormContainer, Form, FormTitle, Label, FormGroup, InputBox, Input, InputButton, Button } from './_FormStyle';
import CheckEmail from './CheckEmail';

export default function Join() {
    return (
    <FormContainer width="285px">
        <FormTitle>회원가입</FormTitle>
        <Form>
            {/* 회원가입 - 아이디 입력창 */}
            <FormGroup>
                <Label for="userId">아이디</Label>
                <InputBox>
                <Input id="userId" 
                placeholder="영문/숫자 조합 5-20자"
                title="형식 : 영문/숫자 조합 5-20자"
                minLength={5} maxLength={20} type="text"
                pattern="^[a-zA-Z]+[0-9]?$"
                required/>
                <InputButton>중복확인</InputButton>
                </InputBox>
            </FormGroup>
            {/* 회원가입 - 비밀번호 입력창 */}
            <FormGroup>
                <Label for="userPw">비밀번호</Label>
                <Input id="userPw" 
                placeholder="영문, 숫자, 특수문자 포함 8자-30자" 
                title="형식 : 영문, 숫자, 특수문자 포함 8자-30자" 
                type="password" minLength={8} maxLength={30} 
                pattern="^[a-zA-Z]+[0-9]+[!@#$%^&]+$"
                required/>
            </FormGroup>
            {/* 회원가입 - 닉네임 입력창 */}
            <FormGroup>
                <Label for="userName">닉네임</Label>
                <NameGuide>실명 사용을 권장드려요 :&#41;</NameGuide>
                <Input id="userName" 
                placeholder="영어, 한글 최대 8글자"
                title="형식 : 영어, 한글 최대 8글자"
                maxLength={8} 
                pattern="^[가-힣a-zA-Z]+{1,8}$"
                required/>
            </FormGroup>
            <CheckEmail />
            <Button marginTop="28px">회원가입</Button>
        </Form>
    </FormContainer>
    );
}

const NameGuide = styled.span`
    display: inline-block;
    font-size: 12px;
    transform: translateY(-1px);
    color: var(--orange-700);
    margin-left: 8px;
`;

//회원가입 완료 후 SelectOven 페이지로 넘어가야함!