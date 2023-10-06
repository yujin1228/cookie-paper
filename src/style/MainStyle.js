import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/img/cookiepaper-logo.png';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    position: absolute;
    top: 46%;
    left: 50%;
    transform: translate(-50%,-50%);
`;

export const Logo = styled.div`
    width: 648px;
    height: 216px;
    background: url(${logo}) no-repeat;
    background-size: cover;
    background-position: center;
    margin-bottom: 66px;
`;

export const ButtonBox = styled.div`
    width: 285px;
    height: 150px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const UserButtonBox = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 72px;
`;

export const UserButton = styled(Link)`
    width: 132px;
    padding: 14px 0;
    background-color: rgba(255, 255, 255, 0.84);
    border-radius: 4px;
    color: var(--black);
    font-size: 20px;
    font-family: var(--main-font);
    text-align: center;
    cursor: pointer;
`;