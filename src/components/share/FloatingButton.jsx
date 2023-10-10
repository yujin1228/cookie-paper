import React, { useEffect, useState } from 'react';
import { styled } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { floatIcon } from '../../style/_Img.import';

export default function FloatingButton () {
    const [toggle,setToggle] = useState(false);
    const location = useLocation().pathname;
    
    useEffect(() => {
        setToggle(false);        
    },[location])
    

    const clickToggle = () => {
        setToggle((prev) => !prev);
    }

    //로그아웃 로직 const logOutFunction = () => {}
    


    
    return (
    <Container>
        <SubButton 
            to="/" 
            $img={floatIcon.main}
            $toggle={toggle} 
            $transy="-352px"
        />
        <SubButton 
            to="/ovenlist"
            $img={floatIcon.ovenlist} 
            $toggle={toggle} 
            $transy="-264px"
        />
        <SubButton 
            as="a" href="https://www.naver.com/" target="_blank"
            $img={floatIcon.guide} 
            $toggle={toggle} 
            $transy="-176px"
        />
        {/* 로그인여부에 따른 분기처리 */}
        {/* <SubButton to="/" onClick={logOutFunction}
        $img={floatIcon.logout} $toggle={toggle} $transy="-88px"/> */}
        <SubButton 
        to="/login"
        $img={floatIcon.login} 
        $toggle={toggle} 
        $transy="-88px"/>
        <Button 
            onClick={clickToggle} 
            $img={floatIcon.cookie} 
            $toggle={toggle} 
        />
    </Container>
    );
}

const Container = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(-80px,-94px);
    z-index: 100;
`

const Button = styled.button`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background-color: ${props => props.$toggle ? 'var(--brown-400);' : 'var(--orange-300);'};
    box-shadow: 0 4px 12px 0 rgba(167, 74, 7, 0.4);

    &::after {
        content: '';
        display: block;
        width: 56px;
        height: 48px;
        background-image: url(${props => props.$img});
        background-repeat: no-repeat;
        background-size: cover;
        margin: 0 auto;
    }
`;

const SubButton = styled(Link)`
    width: 72px;
    height: 72px;  

    position: absolute;
    bottom: 0;
    right: 0;
    transform: translateY(${props => props.$toggle ? props.$transy : 0});
    
    border-radius: 50%;
    background-color: var(--orange-300);
    box-shadow: 0 4px 12px 0 
    ${props => props.$toggle ? 'rgba(167, 74, 7, 0.4)' : 'rgba(0, 0, 0, 0)'};
    transition: transform 500ms cubic-bezier(0.37, 0.01, 0.06, 0.99) 100ms;

    &::after {
        content: '';
        display: block;
        width: 54px;
        height: 52px;
        background-image: url(${props => props.$img});
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
`;

