import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(-80px, -94px);
  z-index: 100;

  @media screen and (max-width: 768px) {
    transform: translate(-50px, -54px);
  }

  @media screen and (max-width: 480px) {
    transform: translate(-40px, -40px);
  }
`;

export const Button = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background-color: ${(props) => (props.$toggle ? 'var(--brown-400);' : 'var(--orange-300);')};
  box-shadow: 0 4px 12px 0 rgba(167, 74, 7, 0.4);

  &::after {
    content: '';
    display: block;
    width: 56px;
    height: 48px;
    background-image: url(${(props) => props.$img});
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0 auto;
  }

  @media screen and (max-width: 768px) {
    width: 60px;
    height: 60px;

    &::after {
      width: 48px;
      height: 40px;
    }
  }

  @media screen and (max-width: 480px) {
    width: 55px;
    height: 55px;

    &::after {
      width: 44px;
      height: 37px;
    }
  }
`;

export const SubButton = styled(Link)`
  width: 72px;
  height: 72px;

  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(${(props) => (props.$toggle ? props.$transy + 'px' : 0)});

  border-radius: 50%;
  background-color: var(--orange-300);
  box-shadow: 0 4px 12px 0 ${(props) => (props.$toggle ? 'rgba(167, 74, 7, 0.4)' : 'rgba(0, 0, 0, 0)')};
  transition: transform 500ms cubic-bezier(0.37, 0.01, 0.06, 0.99) 100ms;

  &::after {
    content: '';
    display: block;
    width: 54px;
    height: 52px;
    background-image: url(${(props) => props.$img});
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media screen and (max-width: 768px) {
    width: 60px;
    height: 60px;

    &::after {
      width: 45px;
      height: 44px;
    }
  }

  @media screen and (max-width: 480px) {
    width: 55px;
    height: 55px;

    &::after {
      width: 40px;
      height: 39px;
    }
  }
`;
