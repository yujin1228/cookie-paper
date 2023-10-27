import { LoginState } from 'atoms/loginState';
import useMsgTimer from 'hook/useMsgTimer';
import { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { useRecoilState } from 'recoil';
import AppRouter from 'router/AppRouter';
import GlobalStyle from 'style/GlobalStyle';
import LoadingPage from 'pages/LoadingPage/LoadingPage';

export default function App() {
  useMsgTimer();
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //로컬스토리지에 저장된 토큰이 있다면 로그인상태에 true
    if (localStorage.getItem('CPToken')) {
      setIsLoggedIn(true);
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      <GlobalStyle />
      <HelmetProvider>{isLoading ? <LoadingPage /> : <AppRouter />}</HelmetProvider>
    </>
  );
}
