import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from '../../style/FormStyle';

export default function FindIdForm() {
    const [email,setEmail] = useState('');

    const onChangeEmail  = (e) => {//이메일 입력 값
        e.target.value();
    }
    
    const submitEmail = (e) => {//이메일 폼 제출
        e.preventDefault();
    }

    return(
    <Form onSubmit={submitEmail}>
        <FormGroup>
            <Label htmlFor="userEmail">이메일</Label>
            <Input onChange={onChangeEmail} placeholder="이메일을 입력해주세요" 
            type="email" required/>
        </FormGroup>
        <Button $buttonActive={true}>이메일로 아이디 전송</Button>
    </Form>
    );
}