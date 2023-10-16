import { styled } from "styled-components";
import { ovens } from "../../style/_Img.import";
import { useNavigate } from "react-router-dom";
import { Name, Oven, OvenId, OvenImg, OvenTitle } from "../../style/OvenList.style";

export default function OvenItem(props) {
    //props = { id: 아이디문자열, name: 닉네임문자열, oven: 오븐이미지넘버, mine: true or false}
    let route = `../oven/${props.id}`;
    const navigate = useNavigate();

    const onClick = () => {
        navigate(route);
    }

    return(
    <Oven onClick={onClick} $mine={props.mine}>
        <OvenTitle><Name>{props.name}</Name>님의 오븐</OvenTitle>
        <OvenId>@{props.id}</OvenId>
        <OvenImg src={ovens[props.oven]} />
    </Oven>
    );
}



