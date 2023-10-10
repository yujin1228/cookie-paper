import { styled } from "styled-components";
import { ovens } from "../../style/_Img.import";
import { useNavigate } from "react-router-dom";

export default function OvenItem(props) {
    //props = { id: 아이디문자열, name: 닉네임문자열, oven: 오븐이미지넘버, mine: true or false}
    let route = `../oven/${props.id}`;
    const navigate = useNavigate();

    const onClick = () => {
        navigate(route);
    }

    return(
    <Oven onClick={onClick} $mine={props.mine}>
        <Title><Name>{props.name}</Name>님의 오븐</Title>
        <OvenId>@{props.id}</OvenId>
        <OvenImg src={ovens[props.oven]} />
    </Oven>
    );
}


const Oven = styled.div`
    position: relative;
    font-family: var(--main-font);
    width: fit-content;
    height: fit-content;
    cursor: pointer;

    &::after {
        content: "내 오븐";
        display: ${(props) => props.$mine ? 'block' : 'none'};;
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
    -webkit-user-drag: none;
    
`;