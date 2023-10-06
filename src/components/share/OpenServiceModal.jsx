import React from 'react';
import { Dimmed } from '../share/Dimmed';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

//다시 보지 않기 -> 영구히 저장(로컬스토리지)
export default function OpenMessage() {
    return (
    <>
        <Dimmed></Dimmed>
        <Container>
            <Comment></Comment>
            
            <CloseButton></CloseButton>
        </Container>
    </>
    );
}

const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    width: 534px;
    height: 568px;
    border-radius: 16px;
    background-color: var();
`

const Comment = styled.p`
    color: var();

`;

const CookieImg = styled.img`

`;

//const Button = styled(Link)``;

const CheckBox = styled.input`

`;

const CloseButton = styled.button`

`;