import React from 'react';
import { Container, Logo, ButtonBox, UserButtonBox, UserButton } from '../../style/Main.style';
import { Button } from '../../style/Share.style';
import { useRecoilState } from 'recoil';
import { MsgOpen } from '../../atoms/msgOpenTimer';
import { LoginState } from '../../atoms/loginState';

export default function Main() {
    const [isLoggedIn,setIsLoggedIn] = useRecoilState(LoginState);
    const [isOpenMsg,setIsOpenMsg] = useRecoilState(MsgOpen);
    

    return(
    <Container>
        <Logo />
        <ButtonBox>
            <Button to="/ovenlist">오븐 구경하기</Button>
            {isLoggedIn && //로그인상태일때만 버튼 노출
            <Button to="/login">내 오븐 보러 가기</Button>}
        </ButtonBox>
        <UserButtonBox>
            {isLoggedIn ? 
            <UserButton as="button">로그아웃</UserButton> : 
            <>
            <UserButton to="/login">로그인</UserButton>
            {isOpenMsg || <UserButton to="/join">회원가입</UserButton>}
            </>}

        </UserButtonBox>          
    </Container>
    );
}
