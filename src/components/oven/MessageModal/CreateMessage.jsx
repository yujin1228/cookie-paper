import { Dimmed } from "../../../style/ShareStyle";
import { Container, CloseButton, TextBox, TextInput, Title, TextCount } from "../../../style/MessageModalStyle";
import { useState } from "react";

export default function CreateMessage(props) {
    const [message, setMessage] = useState('');
    const [textCount, setTextCount] = useState(0);
    
    const onChangeText = (e) => {
        setMessage(e.target.value);
        setTextCount(e.target.value.length);
    }

    const onClickClose = () => {
        props.active(false);
    }

    return(
        <Dimmed>
            <Container>
                <Title>쿠키 남기기</Title>
                <TextBox>
                    <TextInput onChange={onChangeText} placeholder="메시지를 입력해보세요!"/>
                    <TextCount>{textCount}/500</TextCount>
                </TextBox>
                <CloseButton type="button" onClick={onClickClose}/>
            </Container>
        </Dimmed>
    );
}