import { keyframes, styled } from "styled-components";
import loadingIcon from '../assets/img/ico_loading.gif'
import loadingText from '../assets/img/loading.png'

export default function LoadingPage() {
    return(
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

const Bg = styled.div`
    background-color: #FCDEA4;
    width: 100%;
    height: 100%;
`;

const Container = styled.div`
    width: fit-content;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`;

const rotate1 = keyframes`
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

const rotate2 = keyframes`
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

const rotate3 = keyframes`
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

const Img = styled.img`
    width: 80px;
    animation: ${props => props.$ani} 2500ms linear infinite;

    Img+& {
        margin-left: 24px;
    }
`;

const TextImg = styled.img`
    width: 180px;
    display: block;
    margin: 6px auto;
`
