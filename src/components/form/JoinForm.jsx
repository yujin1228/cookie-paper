import React, { useState } from 'react';
import { Form, Label, FormGroup, InputBox, Input, InputButton, Button, NameGuide} from '../../style/Form.style';
import CheckEmail from './CheckEmail';

export default function JoinForm() {
    const [userId, setUserId] = useState(''); //사용자 ID
    const [userPw, setUserPw] = useState(''); //사용자 PW
    const [userName, setUserName] = useState(''); //사용자 닉네임
    const [buttonActive, setButtonActive] = useState(false); //회원가입 활성화 여부

    //console.log("버튼액티브: "+ buttonActive);

    const duplicateCheckId = (e) => {
        e.preventDefault();
        //아이디 중복 체크 요청 -> 중복 여부 response받음
    }

    const activeButton = (active) => {
        setButtonActive(active);
    }

    return(
    <Form>
        {/* 회원가입 - 아이디 입력창 */}
        <FormGroup>
            <Label htmlFor="userId">아이디</Label>
            <InputBox>
            <Input id="userId" 
            placeholder="영문/숫자 조합 5-20자"
            title="형식 : 영문/숫자 조합 5-20자"
            minLength={5} maxLength={20} type="text"
            pattern="^[a-z]+[a-z0-9]{4,21}$"
            required/>
            <InputButton type="button" onClick={duplicateCheckId}>중복확인</InputButton>
            </InputBox>
        </FormGroup>
        {/* 회원가입 - 비밀번호 입력창 */}
        <FormGroup>
            <Label htmlFor="userPw">비밀번호</Label>
            <Input id="userPw" 
            placeholder="영문, 숫자, 특수문자 포함 8자-30자" 
            title="형식 : 영문, 숫자, 특수문자 포함 8자-30자" 
            type="password" minLength={8} maxLength={30} 
            pattern="^[a-zA-Z]+[0-9]+[!@#$%^&]+$"
            required/>
        </FormGroup>
        {/* 회원가입 - 닉네임 입력창 */}
        <FormGroup>
            <Label htmlFor="userName">닉네임</Label>
            <NameGuide>실명 사용을 권장드려요 :&#41;</NameGuide>
            <Input id="userName" 
            placeholder="영어, 한글 최대 8글자"
            title="형식 : 영어, 한글 최대 8글자"
            maxLength={8} 
            pattern="^[가-힣a-zA-Z]+{1,8}$"
            required/>
        </FormGroup>
        <CheckEmail page="join" activeButton={activeButton}/>
        <Button $top="28px" $buttonActive={buttonActive}>회원가입</Button>
    </Form>
    );
}