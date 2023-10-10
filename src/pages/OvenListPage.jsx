import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Bg, Body, Dimmed } from '../style/Share.style';
import OvenHeader from '../components/share/OvenHeader';
import OvenList from '../components/ovenlist/OvenList';
import listback from '../assets/img/list_back.png';

export default function OvenListPage(){
  return(
  <>
  <Helmet>
    <title>쿠키페이퍼 | 오븐리스트</title>
  </Helmet>
  <Body $startcolor="#c5a976" $endcolor="#c8b082">
    <Bg $back={listback}>
        <OvenHeader />
        <OvenList />
    </Bg>
  </Body>
  </>
  );
}