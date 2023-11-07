import React, { useEffect, useState } from 'react';
import { CodeTimer, FormGroup, FormMessage, Input, InputBox, InputButton, Label } from 'components/form/Form.style';
import { useRecoilState } from 'recoil';
import { codeTime, timerActive } from 'atoms/passCodeTimer';
import { useLocation } from 'react-router';
import useCodeTimer from 'hook/usePassCodeTimer';

export default function PassCodeTimer({ nextStep, passcode }) {
  const [time, setTime] = useRecoilState(codeTime);
  const [activeTimer, setActiveTimer] = useRecoilState(timerActive);
  const [isCodePass, setIsCodePass] = useState(null);
  const [code, setCode] = useState('');
  const location = useLocation().pathname;

  //페이지경로가 변경되면 타이머 리셋
  useEffect(() => {
    setActiveTimer(false);
    setTime(600);
  }, [location]);

  useCodeTimer(time, activeTimer, setTime, setActiveTimer);

  //인증번호 타이머
  const timeFormat = (time) => {
    const m = Math.floor(time / 60).toString();
    let s = (time % 60).toString();
    if (s.length === 1) s = `0${s}`;
    return `${m}:${s}`;
  };

  //인증번호 확인 버튼 클릭
  const checkPassCode = () => {
    //인증번호 일치하면 다음절차 활성화
    setIsCodePass(false);
    if (code === passcode.current + '') {
      setIsCodePass(true);
      setActiveTimer(false);
      setTime(600);
      nextStep();
    } else {
      //인증실패
      setIsCodePass(false);
    }
  };

  return (
    <FormGroup>
      <Label htmlFor="passCode">인증번호</Label>
      <CodeTimer>{timeFormat(time)}</CodeTimer>
      <InputBox>
        <Input
          type="text"
          placeholder="인증번호를 입력해주세요"
          autoComplete="one-time-code"
          disabled={!activeTimer}
          onChange={(e) => setCode(e.target.value)}
        />
        <InputButton type="button" onClick={checkPassCode} $buttonActive={activeTimer} disabled={!activeTimer}>
          인증번호 확인
        </InputButton>
      </InputBox>
      {isCodePass !== null && (isCodePass ? <FormMessage $valid>인증이 완료 되었습니다</FormMessage> : <FormMessage>인증번호가 일치하지 않습니다</FormMessage>)}
    </FormGroup>
  );
}
