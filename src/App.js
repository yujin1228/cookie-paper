import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';
import SelectOvenPage from './pages/SelectOvenPage';
import FindIdPage from './pages/FindIdPage';
import FindPwPage from './pages/FindPwPage';
import OvenListPage from './pages/OvenListPage';
import UserOvenPage from './pages/UserOvenPage';
import FormHeader from './components/share/FormHeader';
import FloatingButton from './components/share/FloatingButton';
import GlobalStyle from './style/_GlobalStyle';

export default function App() {
  return (
    <>
    <GlobalStyle />
    <HelmetProvider>
    <BrowserRouter>
      <Routes>
        {/* 플로팅버튼이 필요한 주요페이지 컴포넌트 라우팅 */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/ovenlist" element={<OvenListPage />} />
          <Route path="/oven/:id" element={<UserOvenPage />} />
        </Route>
        {/* Header가 필요한 form 컴포넌트 라우팅 */}
        <Route element={<FormLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/join/info" element={<JoinPage />} />
          <Route path="/join/ovenselect" element={<SelectOvenPage />} />
          <Route path="/find/userid" element={<FindIdPage />} />
          <Route path="/find/userpw" element={<FindPwPage />} />
        </Route>
      </Routes>  
    </BrowserRouter>
    </HelmetProvider>
    </>

  );
}

const FormLayout = () => {
  return(
    <>
      <FormHeader />
      <Outlet />
    </>
  );
}

const MainLayout = () => {
  return(
    <>
      <FloatingButton />
      <Outlet />
    </>
  );
}