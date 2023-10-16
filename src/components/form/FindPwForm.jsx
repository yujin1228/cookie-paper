import React, { useState } from 'react';
import { Form, Button, Label, InputBox, Input, InputButton, FormGroup, FormMessage } from '../../style/Form.style';
import { useForm } from 'react-hook-form';
import { RegExp, invalidText } from './share/Validation';
import PassCodeTimer from './share/PassCodeTimer';
import { useSetRecoilState } from 'recoil';
import { codeTime, timerActive } from '../../atoms/passCodeTimer';

export default function FindPwForm() {
    const [isEmail, setIsEmail] = useState("");
    const [emailText, setEmailText] = useState("");
    const [active, setActive] = useState(false);
    const setTime = useSetRecoilState(codeTime);
    const setActiveTimer = useSetRecoilState(timerActive);

    //useForm()
    const {register, trigger, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => {}
    
    //이메일 중복확인
    const duplicationEmail = () => {
        if(trigger("useremail")){
            //아이디 중복 확인 api
            //중복된 아이디 없으면
            setIsEmail("yes");
            setEmailText("인증번호가 발송되었습니다");
            //타이머 시작
            setTime(600);
            setActiveTimer(true);
            setTimeout(()=> {
                setEmailText("메일을 받지 못하셨나요? 발송버튼을 다시 눌러주세요");
            },5000);
            //중복된 아이디 있으면
            setIsEmail("no");
            setEmailText("이미 가입된 이메일입니다");
        }
    }

    const nextStep = () => {
        setActive(true);
    }

    return(
        <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
            <Label htmlFor="userId">아이디</Label>
            <Input 
            id="userId" 
            type="text" 
            placeholder='영문/숫자 조합 5-20자'
            readOnly={active}
            {...register("userid",{
            required: "필수 입력 정보입니다",
            pattern: {
                value: RegExp.ID_RegExp,
                message: invalidText.id
            }
            })}/>
        </FormGroup>
        <FormGroup>
            <Label htmlFor="userEmail">이메일</Label>
            <InputBox>
            <Input 
            id="userEmail" 
            type="email" 
            placeholder='이메일을 입력해주세요'
            readOnly={active}
            {...register("useremail",{
            required: "필수 입력 정보입니다",
            pattern: {
                value: RegExp.EMAIL_RegExp,
                message: invalidText.email,
                }
            })}/>
            <InputButton type="button" onClick={duplicationEmail}>인증번호 발송</InputButton>
            </InputBox>
            {errors.useremail ? <FormMessage>{errors.useremail.message}</FormMessage> : isEmail && <FormMessage $valid={isEmail}>{emailText}</FormMessage>}
        </FormGroup>
        <PassCodeTimer nextStep={nextStep}/>
        <FormGroup>
            <Label htmlFor="userpw">새 비밀번호 입력</Label>
            <Input id="userPw" 
            type="password"
            placeholder="영문, 숫자, 특수문자 포함 8자-30자"
            disabled={!active}
            {...register("userpw",{
            required: "필수 입력 정보입니다",
            pattern: {
                value: RegExp.PW_RegExp,
                message: invalidText.pw,
                }
            })}/>
            {errors.userpw && <FormMessage>{errors.userpw.message}</FormMessage>}
        </FormGroup>
        <Button $top="28px">비밀번호 재설정</Button>
    </Form>
    );
}