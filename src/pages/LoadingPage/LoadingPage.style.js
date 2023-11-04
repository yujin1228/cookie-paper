import { keyframes, styled } from 'styled-components';

export const Bg = styled.div`
  background-color: #fcdea4;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 200;
`;

export const Container = styled.div`
  width: fit-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const rotate1 = keyframes`
    0%{
        visibility: hidden;
    }
    10%{
        visibility: hidden;
    }
    90%{
        visibility: visible;
    }
`;

export const rotate2 = keyframes`
    0%{
        visibility: hidden;
    }
    30%{
        visibility: hidden;
    }
    90%{
        visibility: visible;
    }
`;

export const rotate3 = keyframes`
    0%{
        visibility: hidden;
    }
    50%{
        visibility: hidden;
    }
    90%{
        visibility: visible;
    }
`;

export const Img = styled.img`
  width: 80px;
  animation: ${(props) => props.$ani} 2000ms linear infinite;

  Img + & {
    margin-left: 24px;
  }
`;

export const TextImg = styled.img`
  width: 180px;
  display: block;
  margin: 6px auto;
`;
