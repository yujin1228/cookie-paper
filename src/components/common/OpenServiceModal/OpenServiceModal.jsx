import React from 'react';
import { Dimmed, Input, OvenButton } from 'style/Share.style';
import { Check, CloseButton, Comment, Container, CookieImg } from './OpenServiceModal.style';

export default function OpenServiceModal() {
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
          <OvenButton width="285px" $fonts="24px">
            내 오븐 보러가기
          </OvenButton>
        </CookieImg>
        <label>
          <Input type="checkbox" />
          <Check>다시 보지 않기</Check>
        </label>
        <CloseButton />
      </Container>
    </>
  );
}
