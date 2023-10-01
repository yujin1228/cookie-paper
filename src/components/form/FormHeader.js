import React from 'react';
import { styled } from 'styled-components';
import logo from "../../assets/img/cookiepaper-logo.svg"
import banner from "../../assets/img/banner.png"
import { Link } from 'react-router-dom';

export default function FormHeader() {
  return (
    <>
      <h1>여기는 Header.js 입니다!</h1>
    </>
  );
}

const Header = styled.header`
    background-color: #FBE6BE;
    width: 100%;
    height: 84px;
`;

const Container = styled.div`
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-size: cover;
    max-width: 1440px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 0 120px;
`;

const HomeLink = styled(Link)`

`;