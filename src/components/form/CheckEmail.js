import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FormGroup, Label, InputBox, Input, InputButton} from './FormStyle';


export default function CheckEmail(props) {
    const [userEmail, setUserEmail] = useState('');
    

    if(props.page === 'join'){//회원가입 페이지일때
        console.log("회원가입페이지 속 체크이메일입니다~");
        
        props.activeButton();
    
    //인증번호 발송 버튼 클릭 -> 이메일중복여부체크 요청(이메일 입력값 전송!)
    //중복여부 yes -> '이미 가입된 메일입니다'
    /*중복여부 no 
    -> 5초 인증번호 발송 비활성화 & '인증번호 메일이 발송되었습니다'
    -> 타이머 시작
    -> 인증번호 인풋,버튼 활성화
    -> 5초 후 인증번호 발송 다시 활성화 & '메일을 받지 못하셨나요? 발송버튼을 다시 눌러주세요'
    */

    //인증번호 확인 버튼 클릭 -> 인증번호 일치 여부 확인 요청(인증번호 입력값 전송)
    //일치여부 yes -> 인증이 완료 되었습니다. -> 회원가입 버튼 활성화
    //일치여부 no -> 인증번호가 일치하지 않습니다.
    }



    if(props.page === 'findpw'){//비밀번호 찾기 페이지일때
        console.log("비밀번호찾기 속 체크이메일입니다~")

    //인증번호 발송 버튼 클릭 -> 이메일중복여부체크 요청(이메일 입력값 전송!)
    //중복여부 no -> '해당 이메일로 가입된 아이디가 없습니다'
    /*중복여부 yes 
    -> 5초 인증번호 발송 비활성화 & '인증번호 메일이 발송되었습니다'
    -> 타이머 시작
    -> 인증번호 인풋,버튼 활성화
    -> 5초 후 인증번호 발송 다시 활성화 & '메일을 받지 못하셨나요? 발송버튼을 다시 눌러주세요'
    */
    }
    
    

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
            <InputButton>인증번호 발송</InputButton>
            </InputBox>
        </FormGroup>
        {/* 인증번호 입력창 */}
        <FormGroup>
            <Label htmlFor="passCode">인증번호</Label>
            <CodeTimer>10:00</CodeTimer>
            <InputBox>
            <Input id="passCode" placeholder="인증번호를 입력해주세요" 
            pattern="/^[0-9]*$/" required disabled />
            <InputButton disabled>인증번호 확인</InputButton>
            </InputBox>
        </FormGroup>
        </>
    );
}

export const CodeTimer = styled.span`
    font-family: var(--basic-font);
    font-size: 12px;
    color: var(--black);

    display: inline-block;
    margin-left: 8px;
    transform: translateY(-1px);
`;