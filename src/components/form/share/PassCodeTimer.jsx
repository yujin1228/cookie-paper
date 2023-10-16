import React, { useEffect, useState } from 'react'
import { CodeTimer, FormGroup, FormMessage, Input, InputBox, InputButton, Label } from '../../../style/Form.style';
import { useRecoilState } from 'recoil';
import { codeTime, timerActive } from '../../../atoms/passCodeTimer';
import { useLocation } from 'react-router';

export default function PassCodeTimer(props) {
    const [time, setTime] = useRecoilState(codeTime);
    const [activeTimer, setActiveTimer] = useRecoilState(timerActive);
    const [codePass,setCodePass] = useState("empty");
    const location = useLocation().pathname;
    
    //페이지경로가 변경되면 타이머 리셋
    useEffect(() => {
        setActiveTimer(false);
        setTime(600);
    },[location])

    //인증번호 타이머
    const timeFormat = (time) => {
        const m = Math.floor(time / 60).toString();
        let s = (time % 60).toString();
        if (s.length === 1) s = `0${s}`
        return `${m}:${s}`
    }

    const timer = useEffect(()=>{
        let interval;
        
        if(activeTimer && time > 0){
            interval = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            },1000);

        }else if(time === 0){
            clearInterval(interval);
            console.log('타이머가 종료되었습니다.');
            setActiveTimer(false);
            setTime(600); // 10분으로 리셋
        }

        return () => {
            clearInterval(interval);
        };
    },[time,activeTimer]);

    //인증번호 확인 버튼 클릭
    const checkPassCode = () => {
        //인증번호 일치하면 다음절차 활성화
        setCodePass("pass");
        props.nextStep();
        // //인증실패
        // setCodePass("no-pass");
    }
    
    return (
        <FormGroup>
            <Label htmlFor="passCode">인증번호</Label>
            <CodeTimer>{timeFormat(time)}</CodeTimer>
            <InputBox>
            <Input 
            id="passCode" 
            type="text" 
            placeholder='인증번호를 입력해주세요'
            disabled={!activeTimer}/>
            <InputButton type="button" onClick={checkPassCode} $buttonActive={activeTimer} disabled={!activeTimer}>인증번호 확인</InputButton>
            </InputBox>
            {codePass === "empty" || (codePass === "pass" ? 
            <FormMessage $valid>인증이 완료 되었습니다</FormMessage>:
            <FormMessage>인증번호가 일치하지 않습니다</FormMessage>)}
        </FormGroup>
    );
}