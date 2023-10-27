import { styled } from 'styled-components';

export const Container = styled.div`
  width: fit-content;
  margin: 26px auto;
  display: flex;
  gap: 25px;
`;

export const OvenInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: var(--black);
  font-weight: 900;
  font-size: 24px;
  line-height: 32px;
  width: fit-content;

  position: relative;

  &::after {
    content: '비공개🔒';
    display: ${(props) => props.$pri === 0 && 'none'};
    width: 75px;
    height: 32px;
    background-color: var(--gray-300);
    border-radius: 16px;

    font-weight: 400;
    font-size: 15px;
    text-align: center;

    position: absolute;
    top: 0;
    right: -83px;
  }
`;

export const ID = styled.p`
  line-height: 22px;
  color: var(--black);
  margin-top: 2px;
  margin-bottom: 48px;
`;

export const OvenImg = styled.img`
  width: 387px;
  height: 266px;
  object-fit: cover;
  object-position: center;
  vertical-align: bottom;
  -webkit-user-drag: none;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 21px;
  margin-top: 64px;
`;
