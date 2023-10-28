import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { Form, Button, Label, InputBox, Input, InputButton, FormGroup, FormMessage } from 'components/form/Form.style';
import { RegExp, invalidText } from 'constant/validation';
import PassCodeTimer from 'components/form/PassCodeTimer/PassCodeTimer';
import { codeTime, timerActive } from 'atoms/passCodeTimer';
import { instance } from 'api/axiosInstance';
import { pwFindAPI, pwUpdateAPI } from 'api/find.api';
import { useNavigate } from 'react-router';

export default function FindPwForm() {
  const [isEmail, setIsEmail] = useState('');
  const [emailText, setEmailText] = useState('');
  const [active, setActive] = useState(false);
  const setTime = useSetRecoilState(codeTime);
  const setActiveTimer = useSetRecoilState(timerActive);
  const passcode = useRef('');
  const navigate = useNavigate();

  //useForm()
  const {
    register,
    trigger,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const promise = pwUpdateAPI(data);
    promise
      .then((res) => {
        if (res === 'success') {
          alert('비밀번호 재설정이 완료 되었습니다.');
          navigate('/login');
        } else if (res === 'fail') {
          alert('비밀번호 재설정에 실패했습니다. 다시 시도해주세요.');
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  //이메일 중복확인
  const duplicationEmail = async () => {
    const resultid = await trigger('userid');
    const resultemail = await trigger('useremail');
    if (resultid && resultemail) {
      const userid = getValues('userid');
      const email = getValues('useremail');
      const promise = pwFindAPI(userid, email);
      setIsEmail(true);
      setEmailText('인증번호를 발송중입니다...');
      promise
        .then((res) => {
          if (res !== 'fail') {
            setIsEmail(true);
            setEmailText('인증번호가 발송되었습니다');
            passcode.current = res;
            //타이머 시작
            setTime(600);
            setActiveTimer(true);
            setTimeout(() => {
              setEmailText('메일을 받지 못하셨나요? 발송버튼을 다시 눌러주세요');
            }, 5000);
          } else if (res === 'fail') {
            setIsEmail(false);
            setEmailText('해당 아이디 또는 이메일로 가입된 아이디가 없습니다');
          }
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  const nextStep = () => {
    setActive(true);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label htmlFor="userId">아이디</Label>
        <Input
          id="userId"
          type="text"
          placeholder="영문/숫자 조합 5-20자"
          readOnly={active}
          {...register('userid', {
            required: '필수 입력 정보입니다',
          })}
        />
        {errors.userid && <FormMessage>{errors.userid.message}</FormMessage>}
      </FormGroup>
      <FormGroup>
        <Label htmlFor="userEmail">이메일</Label>
        <InputBox>
          <Input
            id="userEmail"
            type="email"
            placeholder="이메일을 입력해주세요"
            readOnly={active}
            {...register('useremail', {
              required: '필수 입력 정보입니다',
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
        {errors.useremail ? <FormMessage>{errors.useremail.message}</FormMessage> : <FormMessage $valid={isEmail}>{emailText}</FormMessage>}
      </FormGroup>
      <PassCodeTimer nextStep={nextStep} passcode={passcode} />
      <FormGroup>
        <Label htmlFor="userpw">새 비밀번호 입력</Label>
        <Input
          id="userPw"
          type="password"
          placeholder="영문, 숫자, 특수문자 포함 8자-30자"
          disabled={!active}
          {...register('userpw', {
            required: '필수 입력 정보입니다',
            pattern: {
              value: RegExp.PW_RegExp,
              message: invalidText.pw,
            },
          })}
        />
        {errors.userpw && <FormMessage>{errors.userpw.message}</FormMessage>}
      </FormGroup>
      <Button $top="28px" $buttonActive={active} disabled={!active}>
        비밀번호 재설정
      </Button>
    </Form>
  );
}
