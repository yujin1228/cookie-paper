import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FormContainer, FormTitle } from '../style/Form.style';
import OvenSelect from '../components/form/OvenSelect';
import { useNavigate } from 'react-router';
import { useRecoilValue } from 'recoil';
import { LoginState } from '../atoms/loginState';
import { MsgOpen } from '../atoms/msgOpenTimer';

export default function SelectOvenPage(){
  //비로그인상태 or 메시지공개일 경과 시 접속불가 -> 메인페이지로 이동
  const isLoggedIn = useRecoilValue(LoginState);
  const isOpenMsg = useRecoilValue(MsgOpen);
  const navigate = useNavigate();
  if(isLoggedIn === false || isOpenMsg === true){
      navigate("/");
  }

  return(
  <>
  <Helmet>
    <title>쿠키페이퍼 | 오븐선택</title>
  </Helmet>
  <FormContainer width="936px">
        <FormTitle $marginb="8px">내 오븐 선택</FormTitle>
        <OvenSelect />
  </FormContainer>
  </>
  );
}

