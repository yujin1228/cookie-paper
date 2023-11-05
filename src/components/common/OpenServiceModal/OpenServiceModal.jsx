import React, { useState } from 'react';
import { Check, CloseButton, Comment, Container, CookieImg, Input } from 'components/common/OpenServiceModal/OpenServiceModal.style';
import { Dimmed } from 'components/common/BackgroundImg.style';
import { OvenButton } from 'components/common/Button.style';
import { showOpenModal } from 'atoms/msgOpenTimer';
import { useRecoilState, useRecoilValue } from 'recoil';
import { LoginState, userinfo } from 'atoms/loginState';
import { useNavigate } from 'react-router';

export default function OpenServiceModal() {
  const [check, setCheck] = useState(false);
  const [isOpenModal, setIsOpenModal] = useRecoilState(showOpenModal);
  const isLoggedIn = useRecoilValue(LoginState);
  const userInfo = useRecoilValue(userinfo);
  const navigate = useNavigate();

  const handleCloseModal = () => {
    if (check) {
      localStorage.setItem('dontShowAgain', 'true');
    }
    setIsOpenModal(false);
  };

  const handleCheckBox = (e) => {
    setCheck(e.target.checked);
  };

  const toMyOven = () => {
    if (isLoggedIn) {
      userInfo.usOvId !== null ? navigate(`/oven/${userInfo.usId}`) : alert('생성하신 오븐이 없네요. 현재는 메시지가 공개되어 오븐을 생성할 수 없어요🥲');
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      <Dimmed />
      <Container>
        <Comment>
          멋사 프론트엔드 스쿨 7기 여러분!
          <br />
          수고하셨습니다💕
          <br />
          쿠키들이 모두 구워졌어요.
          <br />
          <br />내 쿠키메시지들을 확인할 수 있어요!
        </Comment>
        <CookieImg>
          <OvenButton as="button" onClick={toMyOven} width="285px" $fonts="24px">
            내 오븐 보러가기
          </OvenButton>
        </CookieImg>
        <label>
          <Input type="checkbox" checked={check} onChange={handleCheckBox} />
          <Check>다시 보지 않기</Check>
        </label>
        <CloseButton type="button" onClick={handleCloseModal} />
      </Container>
    </>
  );
}
