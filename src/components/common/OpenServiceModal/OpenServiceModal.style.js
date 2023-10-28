import { styled } from 'styled-components';
import closeicon from 'assets/img/close_none.png';
import cookie from 'assets/cookie/cookie_1.png';
import checked from 'assets/img/ico_checked.png';
import unchecked from 'assets/img/ico_unchecked.png';

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 454px;
  height: 531px;
  border-radius: 16px;
  background-color: var(--orange-300);
  z-index: 101;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Comment = styled.p`
  color: var(--black);
  font-size: 20px;
  line-height: 27px;
  text-align: center;
`;

export const CookieImg = styled.div`
  width: fit-content;
  height: 224px;
  background: url(${cookie}) no-repeat;
  background-size: 270px;
  background-position: center;
  padding-top: 106px;
  margin-top: 32px;
`;

export const Check = styled.p`
  position: absolute;
  bottom: 32px;
  right: 24px;

  font-size: 12px;
  font-family: var(--basic-font);
  display: flex;
  align-items: center;

  &::before {
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    background: url(${unchecked}) no-repeat;
    background-size: cover;
    margin-right: 4px;
  }

  Input:checked + &::before {
    background: url(${checked}) no-repeat;
    background-size: cover;
  }
`;

export const CloseButton = styled.button`
  width: 48px;
  height: 48px;
  background: url(${closeicon}) no-repeat;
  background-size: cover;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const Input = styled.input`
  display: none;
`;
