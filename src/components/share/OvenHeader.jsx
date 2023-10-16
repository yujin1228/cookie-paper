import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import logo from "../../assets/img/cookiepaper-logo.svg"

export default function OvenHeader() {
    return (
    <Header>
        <Container>
            <HomeLink to="/"/>
        </Container>
    </Header>
    );
}

const Header = styled.header`
    width: 100%;
    height: 84px;
`;

const Container = styled.div`
    max-width: 1440px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 0 120px;
`;

const HomeLink = styled(Link)`
    width: 120px;
    height: 40px;
    background: url(${logo}) no-repeat 100%;
`;