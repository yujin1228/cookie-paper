import styled from 'styled-components';
import { Link } from 'react-router-dom';
import mainback from 'assets/img/back_main.png';

export const Body = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to right, ${(props) => props.$startcolor || '#F9D695'}, ${(props) => props.$endcolor || '#FCDEA4'});
`;

export const Bg = styled.div`
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  background: url(${(props) => props.$back || mainback}) no-repeat;
  background-size: cover;
  background-position: top;
  position: relative;
`;

export const Dimmed = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${(props) => (props.light ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.52)')};
  z-index: ${(props) => props.zIndex || 101};

  display: flex;
  justify-content: center;
  align-items: center;
`;
