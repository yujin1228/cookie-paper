import React from 'react';
import { Dimmed, Input, OvenButton } from '../../style/Share.style';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import closeicon from '../../assets/img/close_none.png'
import cookie from '../../assets/cookie/cookie_1.png'
import checked from '../../assets/img/ico_checked.png'
import unchecked from '../../assets/img/ico_unchecked.png'

//다시 보지 않기 -> 영구히 저장(로컬스토리지)
export default function OpenServiceModal() {
    return (
    <>
        <Dimmed/>
        <Container>
            <Comment>
            멋사 프론트엔드 스쿨 7기 여러분!<br/>
            수고하셨습니다💕<br/>
            쿠키들이 모두 구워졌어요.<br/><br/>
            내 쿠키메시지들을 확인할 수 있어요!

            </Comment>
            <CookieImg>
                <OvenButton width="285px" $fonts="24px">내 오븐 보러가기</OvenButton>
            </CookieImg>
            <label>
                <Input type="checkbox"/>
                <Check>다시 보지 않기</Check>
            </label>
            <CloseButton />
        </Container>
    </>
    );
}

const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    width: 454px;
    height: 531px;
    border-radius: 16px;
    background-color: var(--orange-300);
    z-index: 101;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Comment = styled.p`
    color: var(--black);
    font-size: 20px;
    line-height: 27px;
    text-align: center;
`;

const CookieImg = styled.div`
    width: fit-content;
    height: 224px;
    background: url(${cookie}) no-repeat;
    background-size: 270px;
    background-position: center;
    padding-top: 106px;
    margin-top: 32px;
`;

const Check = styled.p`
    position: absolute;
    bottom: 32px;
    right: 24px;

    font-size: 12px;
    font-family: var(--basic-font);
    display: flex;
    align-items: center;


    &::before{
        content: "";
        display: block;
        width: 16px;
        height: 16px;
        background: url(${unchecked}) no-repeat;
        background-size: cover;
        margin-right: 4px;
    }

    Input:checked + &::before {
        background: url(${checked}) no-repeat;
        background-size: cover;
    }
`;

const CloseButton = styled.button`
    width: 48px;
    height: 48px;
    background: url(${closeicon}) no-repeat;
    background-size: cover;
    position: absolute;
    top: 10px;
    right: 10px;
`;