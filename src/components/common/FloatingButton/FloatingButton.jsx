import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { LoginState, userinfo } from 'atoms/loginState';
import { floatIcon } from 'constant/imgImport';
import { Container, SubButton, Button } from './FloatingButton.style';

export default function FloatingButton() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
  const [userInfo, setUserInfo] = useRecoilState(userinfo);
  const [toggle, setToggle] = useState(false);
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener('resize', resizeListener);
  });

  const size = () => {
    if (innerWidth < 480) {
      return -68;
    } else if (innerWidth < 768) {
      return -75;
    } else {
      return -88;
    }
  };

  const toMyOven = () => {
    userInfo.usOvId ? navigate(`/oven/${userInfo.usId}`) : navigate('/ovenselect');
  };

  const handleLoggedOut = () => {
    localStorage.removeItem('CPToken');
    localStorage.removeItem('CPUserInfo');
    setUserInfo({ usId: null, usName: null, usOvId: null });
    setIsLoggedIn(false);
    navigate('/');
  };

  useEffect(() => {
    setToggle(false);
  }, [location]);

  const clickToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <Container>
      <SubButton to="/" $img={floatIcon.main} $toggle={toggle} $transy={size() * 4} />
      {isLoggedIn ? ( //로그인여부에 따른 분기처리
        <SubButton as="button" onClick={toMyOven} $img={floatIcon.myoven} $toggle={toggle} $transy={size() * 3} />
      ) : (
        <SubButton to="/ovenlist" $img={floatIcon.ovenlist} $toggle={toggle} $transy={size() * 3} />
      )}
      <SubButton
        as="a"
        href="https://fierce-dive-1ec.notion.site/418026c7965a48639e5a9328be79823b"
        target="_blank"
        $img={floatIcon.guide}
        $toggle={toggle}
        $transy={size() * 2}
      />
      {isLoggedIn ? ( //로그인여부에 따른 분기처리
        <SubButton as="button" onClick={handleLoggedOut} $img={floatIcon.logout} $toggle={toggle} $transy={size() * 1} />
      ) : (
        <SubButton to="/login" $img={floatIcon.login} $toggle={toggle} $transy={size() * 1} />
      )}
      <Button onClick={clickToggle} $img={floatIcon.cookie} $toggle={toggle} />
    </Container>
  );
}
