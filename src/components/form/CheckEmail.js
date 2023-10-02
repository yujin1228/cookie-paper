import React from 'react';
import styled from 'styled-components';
import { FormGroup, Label, InputBox, Input, InputButton} from './_FormStyle';


export default function CheckEmail() {
    return (
        <>
        {/* 이메일 입력창 */}
        <FormGroup>
            <Label for="userEmail">이메일</Label>
            <InputBox>
            <Input id="userEmail" placeholder="이메일을 입력해주세요"/>
            <InputButton>인증번호 발송</InputButton>
            </InputBox>
        </FormGroup>
        {/* 인증번호 입력창 */}
        <FormGroup>
            <Label for="passCode">인증번호</Label>
            <CodeTimer>10:00</CodeTimer>
            <InputBox>
            <Input id="passCode" placeholder="인증번호를 입력해주세요" disabled/>
            <InputButton disabled>인증번호 확인</InputButton>
            </InputBox>
        </FormGroup>
        </>
    );
}

export const CodeTimer = styled.span`
    font-family: var(--basic-font);
    font-size: 12px;
    color: var(--black);

    display: inline-block;
    margin-left: 8px;
    transform: translateY(-1px);
`;