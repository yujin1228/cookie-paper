import { Link } from 'react-router-dom';
import styled from 'styled-components';
import backgroundImg from '../assets/img/back_main.png';

export const Button = styled(Link)`
    display: inline-block;
    width: 100%;
    text-align: center;
    font-family: var(--main-font);
    font-weight: 700;
    border-radius: 16px;
    background-color: var(--brown-400);
    color: var(--orange-400);
    padding: 16px 0;
    font-size: 24px;
    line-height: 32px;
    
    box-shadow: 0 4px 6px 0 rgba(59, 59, 59, 0.4);

    cursor: pointer;
`;

export const OvenButton = styled(Button)`
    background-color: var(--white);
    color: var(--brown-300);
    padding: 20px 0;

    box-shadow: 0 5px 8px 0 rgba(167, 74, 7, 0.6);
`;

export const Body = styled.div`
    height: 100vh;
    background-image:  linear-gradient(to right, #F9D695, #FCDEA4);
`;

export const Bg = styled.div`
    max-width: 1440px;
    height: 100vh;
    margin: 0 auto;
    background: url(${backgroundImg}) no-repeat;
    background-size: cover;
    background-position: top;
`;

export const Dimmed = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top:0; 
    left: 0; 
    bottom: 0; 
    right: 0;
    background-color: rgba(0, 0, 0, 0.52);
    z-index : 100;
`;


/*======= 오븐관련페이지들 공유 컴포넌트 =======*/
export const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 85px;
    height: 35px;
    border-radius: 24px;
    background-color: var(--gray-700);
    margin: 0 auto;
    font-size: 14px;
    color: var(--gray-300);
`

export const PageButton = styled.button`
    font-family: var(--main-font);
    color: var(--gray-300);
`;

