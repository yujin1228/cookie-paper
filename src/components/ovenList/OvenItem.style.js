import { styled } from 'styled-components';

export const Oven = styled.div`
  position: relative;
  font-family: var(--main-font);
  width: 100%;
  max-width: 230px;
  height: fit-content;
  cursor: pointer;

  &::after {
    content: '내 오븐';
    display: ${(props) => (props.$mine ? 'block' : 'none')};
    position: absolute;
    bottom: 0;
    right: 0;

    font-size: 15px;
    font-weight: 700;
    line-height: 20px;
    color: var(--orange-300);

    background-color: var(--brown-400);
    border-radius: 4px;
    padding: 4px 10px;
    box-shadow: 0 4px 8px 0 rgba(59, 59, 59, 0.4);
  }
`;

export const OvenTitle = styled.h2`
  line-height: 22px;
`;

export const Name = styled.span`
  font-weight: 700;
`;

export const OvenId = styled.p`
  color: var(--gray-700);
  font-size: 12px;
  line-height: 16px;
`;

export const OvenImg = styled.img`
  width: 100%;
  max-width: 210px;
  height: 128px;
  object-fit: cover;
  object-position: center;
  margin: 0 10px 4px 10px;
  vertical-align: bottom;
`;
