import { styled } from 'styled-components';
import next from 'assets/img/page_next.png';
import prev from 'assets/img/page_prev.png';

export const OvenPen = styled.div`
  width: 788px;
  height: 625px;
  background-color: var(--gray-800);
  border: 20px solid var(--gray-900);
  border-radius: 20px;
  padding: 28px 58px 20px 58px;
  position: relative;
`;

export const CookieBox = styled.div`
  width: 100%;
  max-height: 474px;

  display: flex;
  flex-wrap: wrap;
  gap: 24px 40px;
`;

export const CookieItem = styled.div`
  width: 184px;
  height: 137px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const CookieImg = styled.button`
  width: 100%;
  height: 120px;
  background: url(${(props) => props.$ckimg}) no-repeat;
  background-size: contain;
  background-position: center;
`;

export const CookieName = styled.h3`
  color: var(--gray-100);
`;

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  width: 85px;
  height: 35px;
  border-radius: 24px;
  background-color: var(--gray-700);
  margin: 0 auto;
  font-size: 14px;
  color: var(--gray-300);

  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, ${(props) => props.$marginB || '-32px'});
`;

export const PageButton = styled.button`
  width: 16px;
  height: 16px;
  background-image: url(${(props) => (props.direction == 'next' ? next : prev)});
  background-size: cover;
`;

export const Dimmed = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;

  display: ${(props) => (props.$show ? 'block' : 'none')};
  transition: display 0.5s;
`;

export const ToastText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  background-color: var(--white);
  border-radius: 8px;
  padding: 12px 24px;
  box-shadow: 0px 5px 8px 0px rgba(167, 74, 7, 0.3);
`;
