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

export const CookieImg = styled.img`
  height: 120px;
  vertical-align: bottom;
  -webkit-user-drag: none;
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
