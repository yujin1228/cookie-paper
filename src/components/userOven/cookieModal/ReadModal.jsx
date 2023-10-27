import React from 'react';
import { Container, CloseButton, TextBox, Box, Comment, CookieImg, P } from 'components/userOven/cookieModal/CookieModal.style';
import { Dimmed } from 'components/common/BackgroundImg.style';
import { cookies } from 'constant/imgImport';

export default function ReadModal(props) {
  const onClickClose = () => {
    props.active(false);
  };

  return (
    <Dimmed>
      <Container $padsize="70px 44px">
        <Box flexgap="30px">
          <Box flexdir="column" flexgap="24px">
            <Comment>💌 메세지가 도착했어요</Comment>
            <CookieImg src={cookies[1]} />
            <Box boxw="100%" flexdir="column" flexgap="4px">
              <P fontw="700">From.</P>
              <P>너를 위해 구웠지</P>
            </Box>
          </Box>
          <TextBox boxw="604px" boxh="488px" $scroll>
            목숨을 간에 속에 우리의 그들의 봄바람이다. 보이는 기쁘며, 위하여, 이는 갑 아름답고 풀이 든 그와 것이다. 반짝이는 스며들어 그들은 얼음에 그들에게
            쓸쓸하랴? 이상, 이상이 가슴이 황금시대다.열락의 무엇을 속잎나고, 충분히 우리 있는 것이다.
          </TextBox>
        </Box>
        <CloseButton type="button" onClick={onClickClose} />
      </Container>
    </Dimmed>
  );
}
