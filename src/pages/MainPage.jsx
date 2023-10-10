import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Body, Bg } from '../style/Share.style';
import Main from '../components/main/Main';

export default function MainPage(){
  return(
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