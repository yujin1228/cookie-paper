import React, { useEffect, useState } from 'react';
import { FormGroup, Label, InputBox, Input, InputButton, CodeTimer } from '../../style/FormStyle';

export default function CheckEmail(props) {
    const [userEmail, setUserEmail] = useState('');//이메일 입력값
    const [time, setTime] = useState(600); //10분 타이머 시간
    const [activeTimer, setActiveTimer] = useState(false);//타이머활성화

    /*====== 인증번호 타이머 ======*/
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
    /*===========================*/
    
    const submitPassCode = (e) => { //인증번호 발송 버튼
        e.preventDefault();
        if(activeTimer){
            //타이머가 이미 활성화 되어있다면 다시 시작
            setTime(600); // 10분으로 리셋
            console.log("타이머 다시 시작");
        }
        setActiveTimer(true);
    }

    const checkPassCode = (e) => { //인증번호 확인 버튼
        e.preventDefault();
    }

    useEffect(()=>{
        if(props.page === 'join'){//회원가입 페이지일때
            //인증번호 일치시 -> props.activeButton(true);
        }

        if(props.page === 'findpw'){//비밀번호 찾기 페이지일때

        }
    });

    return (
        <>
        {/* 이메일 입력창 */}
        <FormGroup>
            <Label htmlFor="userEmail">이메일</Label>
            <InputBox>
            <Input id="userEmail" type="email"
            placeholder="이메일을 입력해주세요" required />
            <InputButton type="button" onClick={submitPassCode}>인증번호 발송</InputButton>
            </InputBox>
        </FormGroup>
        {/* 인증번호 입력창 */}
        <FormGroup>
            <Label htmlFor="passCode">인증번호</Label>
            <CodeTimer>{timeFormat(time)}</CodeTimer>
            <InputBox>
            <Input id="passCode" placeholder="인증번호를 입력해주세요" 
            pattern="/^[0-9]*$/" />
            <InputButton type="button" onClick={checkPassCode}>인증번호 확인</InputButton>
            </InputBox>
        </FormGroup>
        </>
    );
}