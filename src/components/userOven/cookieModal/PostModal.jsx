import React, { useState } from 'react';
import { Dimmed } from 'components/common/BackgroundImg.style';
import { OvenButton } from 'components/common/Button.style';
import {
  Container,
  CloseButton,
  TextBox,
  TextInput,
  Title,
  TextCount,
  NameInput,
  From,
  Box,
  Input,
  Check,
} from 'components/userOven/cookieModal/CookieModal.style';
import CookieSelect from './CookieSelect';
import { cookieCreateAPI } from 'api/cookie.api';
import { useSetRecoilState } from 'recoil';
import { cookieUpdate } from 'atoms/cookieupdate';
import Loader from 'components/common/Loader/Loader';

export default function PostModal({ active, ovid, ovpri }) {
  const [name, setName] = useState('');
  const [cookiePri, setCookitPri] = useState(false);
  const [message, setMessage] = useState('');
  const [textCount, setTextCount] = useState(0);
  const [selectedCookie, setSelectedCookie] = useState(1);
  const setCookieListUpdate = useSetRecoilState(cookieUpdate);
  const [loading, setLoading] = useState(false);

  //쿠키이름 입력
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  //쿠키공개여부 체크
  const handleCheckBox = (e) => {
    setCookitPri(e.target.checked);
  };
  //메시지내용 입력
  const onChangeText = (e) => {
    setMessage(e.target.value);
    setTextCount(e.target.value.length);
  };
  //모달 닫기
  const onClickClose = () => {
    active(false);
  };

  //쿠키남기기 api 요청
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || message.length === 0) {
      alert('쿠키네임과 메시지내용을 입력해주세요.');
    } else {
      const cookieInfo = {
        ovId: ovid,
        ckNickname: name,
        ckContent: message,
        ckDesign: parseInt(selectedCookie),
        ckPrivateYn: cookiePri ? 1 : 0,
      };
      setLoading(true);
      cookieCreateAPI(cookieInfo)
        .then((res) => {
          setLoading(false);
          if (res === 'success') {
            alert('쿠키메시지를 남겼어요. 메시지는 11월10일 오후6시에 오븐주인에게 전달됩니다!');
            active(false);
            setCookieListUpdate(true);
          } else if (res === 'fail') {
            alert('메시지 작성에 실패했어요. 다시 시도해주세요.');
          }
        })
        .catch((err) => {
          setLoading(false);
          alert('메시지 작성에 실패했어요. 잠시 후 다시 시도해주세요.');
        });
    }
  };

  return (
    <Dimmed>
      <Container>
        <Title>쿠키 남기기</Title>
        <CookieSelect selectedCookie={selectedCookie} setSelectedCookie={setSelectedCookie} />
        <Box>
          <Box $flexdir="column" $flexgap="8px">
            <From>From.</From>
            <NameInput placeholder="최대 8글자" maxLength={8} onChange={onChangeName} required />
            <label>
              <Input type="checkbox" checked={ovpri ? false : cookiePri} onChange={handleCheckBox} disabled={ovpri ? true : false} />
              <Check size="12px" $lineh="16px" $ovpri={ovpri}>
                {ovpri ? '비공개오븐에 남겨지는 쿠키는 모두 비공개입니다' : '오븐 주인에게만 보여줄래요'}
              </Check>
            </label>
            <OvenButton as="button" type="button" width="264px" $mtop="24px" onClick={handleSubmit}>
              쿠키 남기기
            </OvenButton>
          </Box>
          <TextBox>
            <TextInput onChange={onChangeText} placeholder="메시지를 입력해보세요!" maxLength={500} required />
            <TextCount>{textCount}/500</TextCount>
          </TextBox>
        </Box>
        <CloseButton type="button" onClick={onClickClose} />
        {loading && <Loader />}
      </Container>
    </Dimmed>
  );
}
