import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { LoginState } from 'atoms/loginState';
import { floatIcon } from 'constant/imgImport';
import { Container, SubButton, Button } from './FloatingButton.style';

export default function FloatingButton() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
  const [toggle, setToggle] = useState(false);
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const toMyOven = () => {
    const userInfo = JSON.parse(localStorage.getItem('CPUserInfo'));
    userInfo.usOvId ? navigate(`/oven/${userInfo.usId}`) : navigate('/ovenselect');
  };

  const handleLoggedOut = () => {
    localStorage.removeItem('CPToken');
    localStorage.removeItem('CPUserInfo');
    setIsLoggedIn(false);
  };

  useEffect(() => {
    setToggle(false);
  }, [location]);

  const clickToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <Container>
      <SubButton to="/" $img={floatIcon.main} $toggle={toggle} $transy="-352px" />
      {isLoggedIn ? ( //로그인여부에 따른 분기처리
        <SubButton as="button" onClick={toMyOven} $img={floatIcon.myoven} $toggle={toggle} $transy="-264px" />
      ) : (
        <SubButton to="/ovenlist" $img={floatIcon.ovenlist} $toggle={toggle} $transy="-264px" />
      )}
      <SubButton
        as="a"
        href="https://fierce-dive-1ec.notion.site/418026c7965a48639e5a9328be79823b"
        target="_blank"
        $img={floatIcon.guide}
        $toggle={toggle}
        $transy="-176px"
      />
      {isLoggedIn ? ( //로그인여부에 따른 분기처리
        <SubButton as="button" onClick={handleLoggedOut} $img={floatIcon.logout} $toggle={toggle} $transy="-88px" />
      ) : (
        <SubButton to="/login" $img={floatIcon.login} $toggle={toggle} $transy="-88px" />
      )}
      <Button onClick={clickToggle} $img={floatIcon.cookie} $toggle={toggle} />
    </Container>
  );
}
