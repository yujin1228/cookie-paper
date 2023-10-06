import React, { useState } from 'react';
import { Button, Form } from '../../style/FormStyle';
import { Input } from '../../style/LoginStyle';

export default function LoginForm() {
    const [userId,setUserId] = useState('');
    const [userPw,setUserPw] = useState('');

    const onChangeId = (e) => {
        setUserId(e.target.value);
        console.log("id입력");
    }
    
    const onChangePw = (e) => {
        setUserPw(e.target.value);
        console.log("pw입력");
    }
    
    const onClickLogin = () => {
        //로그인api
    }


    return(
        <Form>
            <Input id="userId" onChange={onChangeId}
            placeholder="ID" type="text" required />
            <Input id="userPw" onChange={onChangePw}
            placeholder="Password" type="password" required />
            <Button $buttonActive="active">로그인</Button>
        </Form>
    );
}