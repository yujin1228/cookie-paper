import { useState } from "react";
import { Dimmed, OvenButton } from "../../style/Share.style";
import { Container, CloseButton, TextBox, TextInput, Title, TextCount, NameInput, From, Box } from "../../style/MessageModal.style";
import { Input, Check } from '../../style/Share.style';
import { cookies } from "../../style/_Img.import";
import CookieSelect from "./CookieSelect";

export default function CreateMessage(props) {
    const [message, setMessage] = useState('');
    const [textCount, setTextCount] = useState(0);
    const [selectedCookie, setSelectedCookie] = useState('');
    
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
                <CookieSelect />
                <Box>
                    <Box flexdir="column" flexgap="8px">
                    <From>From.</From>
                    <NameInput placeholder="영어, 한글 최대 8글자" maxLength={8}/>
                    <label>
                        <Input type="checkbox" />
                        <Check size="12px" lineh="16px" num="2">오븐 주인에게만 보여줄래요</Check>
                    </label>
                    <OvenButton width="264px" mtop="24px">쿠키 남기기</OvenButton>
                    </Box>
                    <TextBox>
                        <TextInput onChange={onChangeText} placeholder="메시지를 입력해보세요!" maxLength={500}/>
                        <TextCount>{textCount}/500</TextCount>
                    </TextBox>
                </Box>
                <CloseButton type="button" onClick={onClickClose}/>
            </Container>
        </Dimmed>
    );
}

