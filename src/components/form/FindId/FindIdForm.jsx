import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'components/form/Form.style';
import styled from 'styled-components';
import { instance } from 'api/axiosInstance';

export default function FindIdForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const onChangeEmail = (e) => {
    //이메일 입력 값
    setEmail(e.target.value);
  };

  const submitEmail = (e) => {
    //이메일 폼 제출
    e.preventDefault();
    const promise = instance.post('user/findId', { usEmail: email });
    promise
      .then((res) => {
        if (res.data === 'success') {
          setError(true);
        } else if (res.data === 'fail') {
          setError(false);
        }
      })
      .catch((error) => {
        alert('error');
      });
  };

  return (
    <Form onSubmit={submitEmail}>
      <FormGroup>
        <Label htmlFor="userEmail">이메일</Label>
        <Input onChange={onChangeEmail} placeholder="이메일을 입력해주세요" type="email" required />
      </FormGroup>
      <Button $buttonActive={true}>이메일로 아이디 전송</Button>
      {error === null ||
        (error ? (
          <FormMessage $valid>입력해주신 이메일로 아이디가 전송되었습니다</FormMessage>
        ) : (
          <FormMessage>해당 이메일로 가입된 아이디가 없습니다.</FormMessage>
        ))}
    </Form>
  );
}

const FormMessage = styled.p`
  font-family: var(--basic-font);
  font-size: 14px;
  color: ${(props) => (props.$valid ? 'var(--black)' : 'var(--red)')};
  text-align: center;
`;
