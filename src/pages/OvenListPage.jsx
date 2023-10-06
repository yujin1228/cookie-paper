import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Bg, Body, Dimmed } from '../style/ShareStyle';
import OvenHeader from '../components/share/OvenHeader';
import OvenList from '../components/oven/OvenList';


export default function OvenListPage(){
  return(
  <>
  <Helmet>
    <title>쿠키페이퍼 | 오븐리스트</title>
  </Helmet>
  <Body>
    <Bg>
      <Dimmed>
        <OvenHeader />
        <OvenList />
      </Dimmed>
    </Bg>
  </Body>
  </>
  );
}