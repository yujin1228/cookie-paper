import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Bg, Body } from 'components/common/BackgroundImg.style';
import Main from 'components/main/Main';
import OpenServiceModal from 'components/common/OpenServiceModal/OpenServiceModal';
import { useRecoilState } from 'recoil';
import { showOpenModal } from 'atoms/msgOpenTimer';

export default function MainPage() {
  const [isShowModal, setIsShowModal] = useRecoilState(showOpenModal);

  useEffect(() => {
    if (localStorage.getItem('dontShowAgain') === 'true') {
      setIsShowModal(false);
    }
  });

  return (
    <>
      <Helmet>
        <title>쿠키페이퍼</title>
      </Helmet>
      <Body>
        <Bg>
          {isShowModal && <OpenServiceModal />}
          <Main />
        </Bg>
      </Body>
    </>
  );
}
