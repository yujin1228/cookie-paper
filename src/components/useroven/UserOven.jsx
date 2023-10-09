import { useState } from "react";
import { ButtonBox, Container, ID, OvenImg, OvenInfo, Title } from "../../style/UserOvenStyle";
import { ovens } from "../../style/_ImgImport";
import { OvenButton } from "../../style/ShareStyle";
import CreateMessage from "../messageModal/CreateMessage";
import OvenTimer from "./OvenTimer";
import CookieList from "./CookieList";
import { useNavigate } from "react-router";
import ReadMessage from "../messageModal/ReadMessage";


export default function UserOven(props) {
    const [modalActive, setModalActive] = useState(false);
    const [readModal, setReadModal] = useState(false);
    const navigate = useNavigate();

    const openCModal = () => {   
        setModalActive(true);
    }

    const toOvenList = () => {
        navigate("/ovenlist");
    }

    console.log("??")
    return(
        <>
        <Container>
            <OvenInfo>
                <Title>쿠키메이커님의 오븐</Title>
                <ID>@{props.id}</ID>
                <OvenTimer />
                <OvenImg src={ovens[6]} alt="오븐이미지"/>
                <ButtonBox>
                    {/* 내오븐일때 '내 오븐 공유하기' */}
                    <OvenButton type="button" onClick={openCModal}>쿠키 남기기</OvenButton>
                    <OvenButton type="button" onClick={toOvenList}>다른 오븐 구경하기</OvenButton>
                </ButtonBox>
            </OvenInfo>
            <CookieList active={setReadModal}/>
        </Container>
        {modalActive && <CreateMessage active={setModalActive}/>}
        {readModal && <ReadMessage active={setReadModal}/>}
        </>
    );
}