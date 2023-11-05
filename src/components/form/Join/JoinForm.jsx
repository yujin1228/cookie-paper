import React, { useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useForm } from 'react-hook-form';
import { Form, Button, Label, InputBox, Input, InputButton, FormGroup, NameGuide, FormMessage } from 'components/form/Form.style';
import { RegExp, invalidText } from 'constant/validation';
import PassCodeTimer from 'components/form/PassCodeTimer/PassCodeTimer';
import { codeTime, timerActive } from 'atoms/passCodeTimer';
import { emailDuplicateAPI, idDuplicateAPI, joinAPI } from 'api/join.api';
import { useNavigate } from 'react-router';
import Loader from 'components/common/Loader/Loader';

export default function JoinForm() {
  //회원가입 관련 상태
  const [isId, setIsId] = useState(null);
  const [isEmail, setIsEmail] = useState(null);
  const [idText, setIdText] = useState('');
  const [emailText, setEmailText] = useState('');
  const [joinActive, setJoinActive] = useState(false);
  const passcode = useRef('');
  const setTime = useSetRecoilState(codeTime);
  const setActiveTimer = useSetRecoilState(timerActive);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  //useForm()
  const {
    register,
    trigger,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => {
    if (isId && isEmail) {
      //회원가입 데이터 전송 api
      setLoading(true);
      joinAPI(data)
        .then((res) => {
          setLoading(false);
          if (res === 'success') {
            navigate('/login');
          } else if (res === 'fail') {
            alert('회원가입에 실패했습니다. 다시 시도해주세요.');
          }
        })
        .catch((err) => {
          setLoading(false);
          alert('회원가입에 실패했습니다. 다시 시도해주세요.');
        });
    } else {
      if (!isId) {
        setIsId(false);
        setIdText('아이디 중복확인이 필요합니다');
      }
    }
  };

  //아이디 중복확인
  const duplicationId = async () => {
    const result = await trigger('userid');
    if (result) {
      const userid = getValues('userid');
      const promise = idDuplicateAPI(userid);
      promise
        .then((res) => {
          if (res === 'ok') {
            setIsId(true);
            setIdText('사용가능한 아이디입니다');
          } else if (res === 'not ok') {
            setIsId(false);
            setIdText('이미 가입된 아이디입니다');
          }
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  //이메일 중복확인
  const duplicationEmail = async () => {
    const result = await trigger('useremail');
    if (result) {
      const email = getValues('useremail');
      const promise = emailDuplicateAPI(email);
      setIsEmail(true);
      setEmailText('인증번호를 발송중입니다...');
      promise
        .then((res) => {
          if (res !== 'not ok') {
            setIsEmail(true);
            setEmailText('인증번호가 발송되었습니다');
            passcode.current = res;
            //타이머 시작
            setTime(600);
            setActiveTimer(true);
            setTimeout(() => {
              setEmailText('메일을 받지 못하셨나요? 발송버튼을 다시 눌러주세요');
            }, 5000);
          } else if (res === 'not ok') {
            setIsEmail(false);
            setEmailText('이미 가입된 이메일입니다');
          }
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  const nextStep = () => {
    setJoinActive(true);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {loading && <Loader />}
      <FormGroup>
        <Label htmlFor="userId">아이디</Label>
        <InputBox>
          <Input
            id="userId"
            type="text"
            placeholder="영문/숫자 조합 5-20자"
            readOnly={isId}
            {...register('userid', {
              required: '필수 입력 정보입니다',
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
        {errors.userid ? <FormMessage>{errors.userid.message}</FormMessage> : isId !== null && <FormMessage $valid={isId}>{idText}</FormMessage>}
      </FormGroup>
      <FormGroup>
        <Label htmlFor="userpw">비밀번호</Label>
        <Input
          id="userPw"
          type="password"
          placeholder="영문, 숫자, 특수문자 포함 8자-30자"
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
      <FormGroup>
        <Label htmlFor="userName">닉네임</Label>
        <NameGuide>실명 사용을 권장드려요 :&#41;</NameGuide>
        <Input
          id="userName"
          type="text"
          placeholder="영문/한글 최대 5글자"
          {...register('username', {
            required: '필수 입력 정보입니다',
            pattern: {
              value: RegExp.NAME_RegExp,
              message: invalidText.name,
            },
          })}
        />
        {errors.username && <FormMessage>{errors.username.message}</FormMessage>}
      </FormGroup>
      <FormGroup>
        <Label htmlFor="userEmail">이메일</Label>
        <InputBox>
          <Input
            id="userEmail"
            type="email"
            placeholder="이메일을 입력해주세요"
            readOnly={isEmail}
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
        {errors.useremail ? <FormMessage>{errors.useremail.message}</FormMessage> : isEmail !== null && <FormMessage $valid={isEmail}>{emailText}</FormMessage>}
      </FormGroup>
      <PassCodeTimer nextStep={nextStep} passcode={passcode} />
      <Button $top="28px" $buttonActive={joinActive} disabled={!joinActive}>
        회원가입
      </Button>
    </Form>
  );
}
