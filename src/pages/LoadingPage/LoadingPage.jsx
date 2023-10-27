import { keyframes, styled } from 'styled-components';
import loadingIcon from 'assets/img/ico_loading.gif';
import loadingText from 'assets/img/loading.png';
import { Bg, Container, Img, TextImg, rotate1, rotate2, rotate3 } from './LoadingPage.style';

export default function LoadingPage() {
  return (
    <Bg>
      <Container>
        <div>
          <Img $ani={rotate1} src={loadingIcon} />
          <Img $ani={rotate2} src={loadingIcon} />
          <Img $ani={rotate3} src={loadingIcon} />
        </div>
        <TextImg src={loadingText} />
      </Container>
    </Bg>
  );
}
