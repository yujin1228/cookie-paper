import React, { useEffect, useState } from 'react';
import { Button, Form, FormMessage } from 'components/form/Form.style';
import { Input } from 'components/form/Login/LoginForm.style';
import { loginAPI } from 'api/login.api';
import { useNavigate } from 'react-router';
import { useSetRecoilState } from 'recoil';
import { LoginState, userinfo } from 'atoms/loginState';

export default function LoginForm() {
  //로그인 input 입력 값
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [error, setError] = useState(false);
  const setIsLoggenIn = useSetRecoilState(LoginState);
  const setUserInfo = useSetRecoilState(userinfo);
  const navigate = useNavigate();

  const submitLogin = (e) => {
    e.preventDefault();
    const promise = loginAPI(userId, userPw);
    promise
      .then((res) => {
        if (res !== 'fail') {
          const userinfo = { usId: res.usId, usName: res.usNickname, usOvId: res.oven === null ? null : res.oven.ovId };
          localStorage.setItem('CPToken', res.token);
          localStorage.setItem('CPUserInfo', JSON.stringify(userinfo));
          setUserInfo(userinfo);
          setIsLoggenIn(true);

          //오븐정보가 없다면 오븐생성 페이지로 이동
          if (res.oven) {
            setTimeout(() => {
              navigate(`/oven/${res.usId}`);
            }, 0);
          } else if (res.oven === null) {
            setTimeout(() => {
              navigate('/ovenselect');
            });
          }
        } else if (res === 'fail') {
          setError(true);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <Form onSubmit={submitLogin} $gap="16px">
      <Input id="userId" onChange={(e) => setUserId(e.target.value)} placeholder="ID" type="text" required />
      <Input id="userPw" onChange={(e) => setUserPw(e.target.value)} placeholder="Password" type="password" required />
      {error && <FormMessage $mtop="-8px">아이디 또는 비밀번호가 옳지 않습니다</FormMessage>}
      <Button $buttonActive="active">로그인</Button>
    </Form>
  );
}
