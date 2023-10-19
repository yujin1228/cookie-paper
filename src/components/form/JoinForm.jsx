import React, { useState } from "react";
import {
  Form,
  Button,
  Label,
  InputBox,
  Input,
  InputButton,
  FormGroup,
  NameGuide,
  FormMessage,
} from "../../style/Form.style";
import { useForm } from "react-hook-form";
import { RegExp, invalidText } from "./share/Validation";
import PassCodeTimer from "./share/PassCodeTimer";
import { useSetRecoilState } from "recoil";
import { codeTime, timerActive } from "../../atoms/passCodeTimer";
import axios from "axios";
import { getValue } from "@testing-library/user-event/dist/utils";

export default function JoinForm() {
  //회원가입 관련 상태
  const [isId, setIsId] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [idText, setIdText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [joinActive, setJoinActive] = useState(false);
  const setTime = useSetRecoilState(codeTime);
  const setActiveTimer = useSetRecoilState(timerActive);

  //useForm()
  const {
    register,
    trigger,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const onSubmit = (data) => {
    if (isId && isEmail) {
      //회원가입 데이터 전송 api
      console.log(data);
    } else {
      if (!isId) {
        setIdText("아이디 중복확인이 필요합니다");
      }
      if (!isEmail) {
        setEmailText("이메일 중복확인이 필요합니다");
      }
    }
  };

  //아이디 중복확인
  const duplicationId = async () => {
    const result = await trigger("userid");
    if (result) {
      const userid = getValues("userid");
      //아이디 중복 확인 api
      // axios({
      //     url: 'http://15.165.55.131/user/checkid', // 통신할 웹문서
      //     method: 'post', // 통신할 방식
      //     data: { // 인자로 보낼 데이터
      //         usid: userid
      //     },
      //     headers: {
      //         "Content-type" : "application/json"
      //     }
      // }).then(function (response) {
      //     console.log(response);
      // });
      //중복된 아이디 없으면
      setIsId(true);
      setIdText("사용가능한 아이디입니다");
      //중복된 아이디 있으면
      // setIsId(false);
      // setIdText("이미 가입된 아이디입니다");
    }
  };

  //이메일 중복확인
  const duplicationEmail = async () => {
    const result = await trigger("useremail");
    if (result) {
      //아이디 중복 확인 api
      //중복된 아이디 없으면
      setIsEmail(true);
      setEmailText("인증번호가 발송되었습니다");
      //타이머 시작
      setTime(600);
      setActiveTimer(true);
      setTimeout(() => {
        setEmailText("메일을 받지 못하셨나요? 발송버튼을 다시 눌러주세요");
      }, 5000);
      // //중복된 아이디 있으면
      // setIsEmail(false);
      // setEmailText("이미 가입된 이메일입니다");
    }
  };

  const nextStep = () => {
    setJoinActive(true);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label htmlFor="userId">아이디</Label>
        <InputBox>
          <Input
            id="userId"
            type="text"
            placeholder="영문/숫자 조합 5-20자"
            readOnly={isId}
            {...register("userid", {
              required: "필수 입력 정보입니다",
              pattern: {
                value: RegExp.ID_RegExp,
                message: invalidText.id,
              },
            })}
          />
          <InputButton type="button" onClick={duplicationId}>
            중복확인
          </InputButton>
        </InputBox>
        {errors.userid ? (
          <FormMessage>{errors.userid.message}</FormMessage>
        ) : (
          isId && <FormMessage $valid={isId}>{idText}</FormMessage>
        )}
      </FormGroup>
      <FormGroup>
        <Label htmlFor="userpw">비밀번호</Label>
        <Input
          id="userPw"
          type="password"
          placeholder="영문, 숫자, 특수문자 포함 8자-30자"
          {...register("userpw", {
            required: "필수 입력 정보입니다",
            pattern: {
              value: RegExp.PW_RegExp,
              message: invalidText.pw,
            },
          })}
        />
        {errors.userpw && <FormMessage>{errors.userpw.message}</FormMessage>}
      </FormGroup>
      <FormGroup>
        <Label htmlFor="userName">닉네임</Label>
        <NameGuide>실명 사용을 권장드려요 :&#41;</NameGuide>
        <Input
          id="userName"
          type="text"
          placeholder="영어, 한글 최대 5글자"
          {...register("username", {
            required: "필수 입력 정보입니다",
            pattern: {
              value: RegExp.NAME_RegExp,
              message: invalidText.name,
            },
          })}
        />
        {errors.username && (
          <FormMessage>{errors.username.message}</FormMessage>
        )}
      </FormGroup>
      <FormGroup>
        <Label htmlFor="userEmail">이메일</Label>
        <InputBox>
          <Input
            id="userEmail"
            type="email"
            placeholder="이메일을 입력해주세요"
            readOnly={isEmail}
            {...register("useremail", {
              required: "필수 입력 정보입니다",
              pattern: {
                value: RegExp.EMAIL_RegExp,
                message: invalidText.email,
              },
            })}
          />
          <InputButton type="button" onClick={duplicationEmail}>
            인증번호 발송
          </InputButton>
        </InputBox>
        {errors.useremail ? (
          <FormMessage>{errors.useremail.message}</FormMessage>
        ) : (
          isEmail && <FormMessage $valid={isEmail}>{emailText}</FormMessage>
        )}
      </FormGroup>
      <PassCodeTimer nextStep={nextStep} />
      <Button $top="28px" $buttonActive={joinActive} disabled={!joinActive}>
        회원가입
      </Button>
    </Form>
  );
}
