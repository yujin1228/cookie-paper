import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FormContainer, FormTitle } from 'components/form/Form.style';
import JoinForm from 'components/form/Join/JoinForm';
import { useNavigate } from 'react-router';
import { useRecoilValue } from 'recoil';
import { LoginState } from 'atoms/loginState';
import { MsgOpen } from 'atoms/msgOpenTimer';

export default function JoinPage() {
  //로그인상태 or 메시지공개일 경과 시 접속불가 -> 메인페이지로 이동
  const isLoggedIn = useRecoilValue(LoginState);
  const isOpenMsg = useRecoilValue(MsgOpen);
  const navigate = useNavigate();
  if (isLoggedIn === true || isOpenMsg === true) {
    alert('메시지가 공개되어 가입이 불가능합니다.');
    navigate('/');
  }

  return (
    <>
      <Helmet>
        <title>쿠키페이퍼 | 회원가입</title>
      </Helmet>
      <FormContainer width="285px">
        <FormTitle>회원가입</FormTitle>
        <JoinForm />
      </FormContainer>
    </>
  );
}
