import React from 'react';
import { styled } from 'styled-components';


export default function FloatingButton () {

  //로그인상태 -> 홈버튼 오븐목록버튼 ~로그인버튼~ 매뉴얼버튼
  //비로그인상태 -> 홈버튼 오븐목록버튼 ~로그아웃버튼~ 매뉴얼버튼

  return (
    <Container>
      <Button/>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(-80px,-94px);
  z-index: 101;
`

const Button = styled.button`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background-color: var(--orange-300);
  box-shadow: 0 4px 12px 0 rgba(167, 74, 7, 0.4);
`;