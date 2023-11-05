import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled(Link)`
  display: inline-block;
  width: 100%;
  text-align: center;
  font-family: var(--main-font);
  font-weight: 700;
  border-radius: 16px;
  background-color: var(--brown-400);
  color: var(--orange-400);
  padding: 16px 0;
  font-size: 24px;
  line-height: 32px;

  box-shadow: 0 4px 6px 0 rgba(59, 59, 59, 0.4);

  cursor: pointer;
`;

export const OvenButton = styled.button`
  width: ${(props) => props.width || '183px'};
  height: 67px;
  background-color: var(--white);
  padding: 20px 0;
  border-radius: 16px;
  box-shadow: 0 5px 8px 0 rgba(167, 74, 7, 0.6);

  color: var(--brown-300);
  font-size: ${(props) => props.$fonts || '20px'};
  font-weight: 700;
  line-height: 27px;

  margin-top: ${(props) => props.$mtop || '0'};

  &:disabled {
    background-color: var(--gray-700);
    color: var(--gray-400);
    cursor: not-allowed;
  }
`;
