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
`;

export const Container = styled.div`
  ${(props) => props.type === 'form' && bannerCSS}
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 0 120px;
`;

export const HomeLink = styled(Link)`
  width: 120px;
  height: 40px;
  background: url(${logo}) no-repeat 100%;
`;
