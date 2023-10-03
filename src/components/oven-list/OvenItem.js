import { styled } from "styled-components";
import { ovens } from "../share/ImgImport";

export default function OvenItem(props) {
 return(
    <Oven mine={props.mine}>
        <Title><Name>닉네임</Name>님의 오븐</Title>
        <OvenId>@cookie_maker</OvenId>
        <OvenImg src={ovens[1]} />
    </Oven>
 );
}

const Oven = styled.div`
    position: relative;
    font-family: var(--main-font);
    width: fit-content;
    height: fit-content;

    &::after {
        content: "내 오븐";
        display: ${(props) => props.mine ? 'block' : 'none'};;
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

const Title = styled.h2`
    line-height: 22px;
`;

const Name = styled.span`
    font-weight: 700;
`;

const OvenId = styled.p`
    color: var(--gray-700);
    font-size: 12px;
    line-height: 16px;
`
const OvenImg = styled.img`
    width: 210px;
    height: 128px;
    object-fit: cover;
    object-position: center;
    margin: 0 10px 4px 10px;
    vertical-align: bottom;
`;