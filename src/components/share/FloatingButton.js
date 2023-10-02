import React from 'react';
import { styled } from 'styled-components';


export default function FloatingButton () {

  //로그인상태 -> 홈버튼 오븐목록버튼 ~로그인버튼~ 매뉴얼버튼
  //비로그인상태 -> 홈버튼 오븐목록버튼 ~로그아웃버튼~ 매뉴얼버튼

  return (
    <Container />
  );
}

const Container = styled.div`
  width: 50px;
  height: 50px;
  background-color: red;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(-80px,-94px);
`