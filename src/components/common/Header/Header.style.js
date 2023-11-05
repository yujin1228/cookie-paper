import { css, styled } from 'styled-components';
import { Link } from 'react-router-dom';
import logo from 'assets/img/cookiepaper-logo.svg';
import banner from 'assets/img/banner.png';

const bannerCSS = css`
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledHeader = styled.header`
  background-color: ${(props) => props.type === 'form' && '#FBE6BE'};
  width: 100%;
  height: 84px;

  @media screen and (max-width: 768px) {
    height: 75px;
  }

  @media screen and (max-width: 480px) {
    height: 65px;
  }
`;

export const Container = styled.div`
  ${(props) => props.type === 'form' && bannerCSS}
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 0 120px;

  @media screen and (max-width: 1440px) {
    padding: 0 100px;
    background-position: 100% 0%;
  }

  @media screen and (max-width: 768px) {
    padding: 0 80px;
    background-position: 100% 0%;
  }

  @media screen and (max-width: 480px) {
    padding: 0 22px;
    background-position: 100% 0%;
  }
`;

export const HomeLink = styled(Link)`
  width: 120px;
  height: 40px;
  background: url(${logo}) no-repeat 100%;
  background-size: contain;
  background-position: center;

  @media screen and (max-width: 768px) {
    width: 120px;
  }

  @media screen and (max-width: 480px) {
    width: 100px;
  }
`;
