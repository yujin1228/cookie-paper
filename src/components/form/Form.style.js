import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FormContainer = styled.div`
  width: ${(props) => props.width};
  margin: 48px auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$gap || '20px'};
`;

export const FormTitle = styled.h1`
  letter-spacing: 3px;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  line-height: 32px;
  margin-bottom: ${(props) => props.$marginb || '16px'};
`;

export const FormGroup = styled.div``;

export const InputBox = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  border-radius: 16px;
  padding: 12px 16px;
  font-family: var(--basic-font);
  font-size: 14px;

  background-color: ${(props) => (props.disabled ? 'var(--gray-100);' : 'var(--orange-300);')};
  color: ${(props) => (props.disabled ? 'var(--gray-700);' : 'var(--black);')};

  &::placeholder {
    color: ${(props) => (props.disabled ? 'var(--gray-700);' : 'var(--black);')};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-transition: background-color 9999s ease-out;
    -webkit-box-shadow: 0 0 0px 1000px 'var(--orange-300);' inset !important;
    -webkit-text-fill-color: 'var(--orange-300);' !important;
  }
`;

export const Label = styled.label`
  color: var(--black);
  display: inline-block;
  font-size: 16px;
  line-height: 21px;
  margin-bottom: 6px;
`;

export const InputButton = styled.button`
  position: absolute;
  padding: 6px 7px;
  border-radius: 8px;

  top: 50%;
  right: 0;
  transform: translate(-14px, -50%);

  font-size: 12px;
  line-height: 16px;

  background-color: ${(props) => (props.disabled ? 'var(--gray-400);' : 'var(--orange-700);')};
  color: ${(props) => (props.disabled ? 'var(--gray-700);' : 'var(--black);')};
`;

export const FormMessage = styled.p`
  font-family: var(--basic-font);
  font-size: 12px;
  color: ${(props) => (props.$valid ? 'var(--black)' : 'var(--red)')};
  margin-top: ${(props) => props.$mtop || '8px'};
  margin-left: ${(props) => props.$mleft || '16px'};
`;

export const Button = styled.button`
  width: 100%;
  border-radius: 16px;
  padding: 16px 0;
  font-size: 20px;
  line-height: 27px;
  margin-top: ${(props) => props.$top};

  background-color: ${(props) => (props.$buttonActive ? 'var(--orange-700);' : 'var(--gray-700);')};
  color: ${(props) => (props.$buttonActive ? 'var(--black);' : 'var(--gray-400);')};
`;

export const LinkBox = styled.div`
  padding: 0 13px;
  display: flex;
  justify-content: space-between;
  margin-top: ${(props) => props.$top};
`;

export const BasicLink = styled(Link)`
  width: 102px;
  font-family: var(--basic-font);
  line-height: 19px;
  text-align: center;
  cursor: pointer;
`;

export const NameGuide = styled.span`
  display: inline-block;
  font-size: 12px;
  transform: translateY(-1px);
  color: var(--orange-700);
  margin-left: 8px;
`;

export const CodeTimer = styled.span`
  font-family: var(--basic-font);
  font-size: 12px;
  color: var(--black);

  display: inline-block;
  margin-left: 8px;
  transform: translateY(-1px);
`;
