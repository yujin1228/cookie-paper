import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Bg, Body } from 'components/common/BackgroundImg.style';
import Main from 'components/main/Main';

export default function MainPage() {
  return (
    <>
      <Helmet>
        <title>쿠키페이퍼</title>
      </Helmet>
      <Body>
        <Bg>
          <Main />
        </Bg>
      </Body>
    </>
  );
}
