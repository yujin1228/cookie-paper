import React, { useEffect, useState } from 'react';
import { FormGroup, Label, InputBox, Input, InputButton} from './FormStyle';
import Timer from './Timer';

export default function CheckEmail(props) {
    const [userEmail, setUserEmail] = useState('');//이메일 입력값
    const [showTimer, setShowTimer] = useState(false);//타이머 활성화 


    const onClickPassCode = () => {
        setShowTimer(!showTimer);
        console.log("showTimer : "+showTimer);
    }

    
    useEffect(()=>{
        if(props.page === 'join'){//회원가입 페이지일때
            //인증번호 일치시 -> props.activeButton(true);
        }

        if(props.page === 'findpw'){//비밀번호 찾기 페이지일때

        }
    },[]);

    return (
        <>
        {/* 이메일 입력창 */}
        <FormGroup>
            <Label htmlFor="userEmail">이메일</Label>
            <InputBox>
            <Input id="userEmail" type="email"
            placeholder="이메일을 입력해주세요" 
            pattern="^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$"
            required />
            <InputButton onClick={onClickPassCode}>인증번호 발송</InputButton>
            </InputBox>
        </FormGroup>
        {/* 인증번호 입력창 */}
        <FormGroup>
            <Label htmlFor="passCode">인증번호</Label>
            {showTimer && <Timer />}
            <InputBox>
            <Input id="passCode" placeholder="인증번호를 입력해주세요" 
            pattern="/^[0-9]*$/" required disabled />
            <InputButton disabled>인증번호 확인</InputButton>
            </InputBox>
        </FormGroup>
        </>
    );
}