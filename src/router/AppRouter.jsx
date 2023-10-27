import React from 'react';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import MainPage from 'pages/MainPage/MainPage';
import LoginPage from 'pages/Form/LoginPage';
import JoinPage from 'pages/Form/JoinPage';
import SelectOvenPage from 'pages/Form/SelectOvenPage';
import FindIdPage from 'pages/Form/FindIdPage';
import FindPwPage from 'pages/Form/FindPwPage';
import OvenListPage from 'pages/OvenListPage/OvenListPage';
import UserOvenPage from 'pages/UserOvenPage/UserOvenPage';
import NotFoundPage from 'pages/404/NotFoundPage';
import FloatingButton from 'components/common/FloatingButton/FloatingButton';
import Header from 'components/common/Header/Header';
import { useRecoilValue } from 'recoil';
import { LoginState } from 'atoms/loginState';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/ovenlist" element={<OvenListPage />} />
          <Route path="/oven/:id" element={<UserOvenPage />} />
        </Route>
        <Route element={<FormLayout />}>
          <Route element={<PublicRoutePage />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/join" element={<JoinPage />} />
            <Route path="/find/userid" element={<FindIdPage />} />
            <Route path="/find/userpw" element={<FindPwPage />} />
          </Route>
          <Route path="/ovenselect" element={<SelectOvenPage />} />
        </Route>
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const FormLayout = () => {
  return (
    <>
      <Header type="form" />
      <Outlet />
    </>
  );
};

const MainLayout = () => {
  return (
    <>
      <FloatingButton />
      <Outlet />
    </>
  );
};

const PublicRoutePage = () => {
  const isLoggedIn = useRecoilValue(LoginState);

  //로그인상태라면 접금금지, 홈으로 보내기
  return isLoggedIn ? <Navigate to="/" /> : <Outlet />;
};
