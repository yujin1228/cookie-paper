import React from 'react';
import { Form, FormGroup, Label, Input, Button } from '../../style/FormStyle';
import CheckEmail from './CheckEmail';

export default function FindPwForm() {
    return(
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
    );
}