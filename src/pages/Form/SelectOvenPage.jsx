import React from 'react';
import { useNavigate } from 'react-router';
import { useRecoilValue } from 'recoil';
import { Helmet } from 'react-helmet-async';
import { FormContainer, FormTitle } from 'components/form/Form.style';
import OvenSelectForm from 'components/form/OvenSelect/OvenSelectForm';
import { LoginState } from 'atoms/loginState';
import { MsgOpen } from 'atoms/msgOpenTimer';

export default function SelectOvenPage() {
  //비로그인상태 or 메시지공개일 경과 시 접속불가 -> 메인페이지로 이동
  const isLoggedIn = useRecoilValue(LoginState);
  const isOpenMsg = useRecoilValue(MsgOpen);
  const navigate = useNavigate();

  setTimeout(() => {
    if (isOpenMsg === true) {
      alert('메시지가 공개되어 오븐생성이 불가능합니다.');
      navigate('/');
    } else if (isLoggedIn === false) {
      alert('회원만 오븐을 생성할 수 있습니다. 로그인 또는 회원가입 해주세요');
      navigate('/');
    }
  }, 3000);

  return (
    <>
      <Helmet>
        <title>쿠키페이퍼 | 오븐선택</title>
      </Helmet>
      <FormContainer width="936px">
        <FormTitle $marginb="8px">내 오븐 선택</FormTitle>
        <OvenSelectForm />
      </FormContainer>
    </>
  );
}
