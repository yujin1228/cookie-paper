import React, { useEffect, useState } from 'react';
import { Container, CloseButton, TextBox, Box, Comment, CookieImg, P } from 'components/userOven/cookieModal/CookieModal.style';
import { Dimmed } from 'components/common/BackgroundImg.style';
import { cookies } from 'constant/imgImport';
import { cookieReadAPI } from 'api/cookie.api';
import Loader from 'components/common/Loader/Loader';

export default function ReadModal({ active, ckid }) {
  const [cookieInfo, setCookieInfo] = useState({
    ckNickname: '',
    ckContent: '',
    ckDesign: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cookieReadAPI(ckid)
      .then((res) => {
        setLoading(false);
        setCookieInfo({ ...cookieInfo, ckNickname: res.ckNickname, ckContent: res.ckContent, ckDesign: res.ckDesign, ckPrivateYn: res.ckPrivateYn });
      })
      .catch((err) => {
        alert(err);
      });
  }, [ckid]);

  //읽기모달 닫기
  const onClickClose = () => {
    active(null);
  };

  return (
    <Dimmed>
      <Container $padsize="70px 44px">
        {loading ? (
          <Loader />
        ) : (
          <>
            <Box $flexgap="30px">
              <Box $flexdir="column" $flexgap="24px">
                <Comment>💌 메세지가 도착했어요</Comment>
                <CookieImg $ckimg={cookies[cookieInfo.ckDesign]} />
                <Box $boxw="100%" $flexdir="column" $flexgap="4px">
                  <P $fontw="700">From.</P>
                  <P>{cookieInfo.ckNickname}</P>
                </Box>
              </Box>
              <TextBox $boxw="604px" $boxh="488px" $scroll>
                {cookieInfo.ckContent}
              </TextBox>
            </Box>
            <CloseButton type="button" onClick={onClickClose} />
          </>
        )}
      </Container>
    </Dimmed>
  );
}
