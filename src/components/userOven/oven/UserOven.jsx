import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ButtonBox, Container, ID, OvenImg, OvenInfo, Title } from 'components/userOven/oven/UserOven.style';
import { ovens } from 'constant/imgImport';
import { OvenButton } from 'components/common/Button.style';
import OvenTimer from 'components/userOven/oven/OvenTimer';
import CookieList from 'components/userOven/oven/CookieList';
import PostModal from 'components/userOven/cookieModal/PostModal';
import ReadModal from 'components/userOven/cookieModal/ReadModal';
import { MsgOpen } from 'atoms/msgOpenTimer';
import { userinfo } from 'atoms/loginState';

export default function UserOven({ id, name, oven, pri, ovid }) {
  const [isOpenMsg, setIsOpenMsg] = useRecoilState(MsgOpen);
  const [modalActive, setModalActive] = useState(false);
  const [readCookie, setReadCookie] = useState(null);
  const navigate = useNavigate();
  const userInfo = useRecoilValue(userinfo);

  const openCModal = () => {
    setModalActive(true);
  };

  const shareOven = async () => {
    try {
      const currentURL = window.location.href;
      await navigator.clipboard.writeText(currentURL).then(() => {
        alert('클립보드에 링크가 복사되었어요.');
      });
    } catch (err) {
      alert('링크복사를 실패했어요. 다시 시도해주세요.');
    }
  };

  return (
    <>
      <Container>
        <OvenInfo>
          <Title $pri={pri}>{name} 님의 오븐</Title>
          <ID>@{id}</ID>
          <OvenTimer />
          <OvenImg src={ovens[oven]} alt="오븐이미지" />
          <ButtonBox>
            {userInfo.usId === id ? (
              <OvenButton type="button" onClick={shareOven}>
                내 오븐 공유하기
              </OvenButton>
            ) : (
              <OvenButton type="button" onClick={openCModal} disabled={isOpenMsg}>
                쿠키 남기기
              </OvenButton>
            )}

            <OvenButton type="button" onClick={() => navigate('/ovenlist')}>
              다른 오븐 구경하기
            </OvenButton>
          </ButtonBox>
        </OvenInfo>
        <CookieList setReadCookie={setReadCookie} ovId={ovid} />
      </Container>
      {modalActive && <PostModal ovid={ovid} ovpri={pri} active={setModalActive} />}
      {readCookie !== null && <ReadModal active={setReadCookie} ckid={readCookie} />}
    </>
  );
}
