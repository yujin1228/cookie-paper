import React, { useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { useRecoilState } from 'recoil';
import { LoginState } from './atoms/LoginState';
import { MsgOpen } from './atoms/MsgOpenTimer';
import GlobalStyle from './style/_Global.style';
import AppRouter from './routers/AppRouter';
import LoadingPage from './pages/LoadingPage';
import { Timer } from './components/share/Timer';
import OpenServiceModal from './components/share/OpenServiceModal';

export default function App() {
  Timer();//현재시간이 메시지오픈일을 경과했다면 OpenMsg상태에 true
  const [isLoggedIn,setIsLoggedIn] = useRecoilState(LoginState);
  const [isLoading,setIsLoading] = useState(true);

  
  useEffect(()=>{
    //로컬스토리지에 저장된 토큰이 있다면 로그인상태에 true
    if (localStorage.getItem('cp-token')) setIsLoggedIn(true);
    
    //2초 로딩 후 페이지렌더링
    //setTimeout(()=>{ setIsLoading(false); },2000);
    setIsLoading(false);
  })


  return (
    <>
    <GlobalStyle />
    <HelmetProvider>
      {isLoading ? <LoadingPage /> : <AppRouter />}
    </HelmetProvider>
    </>

  );
}
