import React, { useEffect, useState } from 'react';
import { Button, Form, FormMessage } from '../../style/Form.style';
import { Input } from '../../style/Login.style';
import { loginAPI } from '../../apis/login.api';
import axios from 'axios';


export default function LoginForm() {
    //로그인 input 입력 값
    const [userId,setUserId] = useState('');
    const [userPw,setUserPw] = useState('');
    const [error, setError] = useState(false);
    
    const submitLogin = (e) => {
        e.preventDefault();
        loginAPI(userId,userPw);
    }

    return(
        <Form onSubmit={submitLogin} $gap="16px">
            <Input id="userId" onChange={(e)=>setUserId(e.target.value)}
            placeholder="ID" type="text" required />
            <Input id="userPw" onChange={(e)=>setUserPw(e.target.value)}
            placeholder="Password" type="password" required />
            {error && <FormMessage $mtop="-8px">아이디 또는 비밀번호가 옳지 않습니다</FormMessage>}
            <Button $buttonActive="active">로그인</Button>
        </Form>
    );
}