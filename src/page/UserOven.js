import React from 'react';
import { styled } from 'styled-components';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import backgroundImg from '../assets/img/back_oven.png';
import OvenHeader from '../components/share/OvenHeader';

//갖고있는정보 => 아이디
//필요한정보 => 닉네임,오븐 공개여부,오븐이미지,쿠키리스트

export default function UserOven() {
    const { id } = useParams();
    let name = "쿠키페이퍼1";
    return (
    <>
    <Helmet>
        <title>쿠키페이퍼 | {name} 님의 오븐</title>
    </Helmet>
    <Body>
        <Bg>
            <OvenHeader />
            <Container>

            </Container>
        </Bg>
    </Body>
    </>
    );
}

const Body = styled.div`
    height: 100vh;
    background-color: #F8CA7C;
`;

const Bg = styled.div`
    max-width: 1440px;
    height: 100vh;
    margin: 0 auto;
    background: url(${backgroundImg}) no-repeat;
    background-size: cover;
    background-position: top;
`;

const Container = styled.div`
    width: 1200px;
    height: 625px;
    margin: 26px auto;
    background-color: red;
`;