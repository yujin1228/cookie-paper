import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import FormHeader from './components/form/FormHeader';
import Main from './page/Main';
import Login from './page/form/Login';
import Join from './page/form/Join';
import SelectOven from './page/form/SelectOven';
import FindId from './page/form/FindId';
import FindPw from './page/form/FindPw';
import FloatingButton from './components/share/FloatingButton';
import GlobalStyle from './style/GlobalStyle';
import OvenList from './page/OvenList';
import UserOven from './page/UserOven';
import { HelmetProvider } from 'react-helmet-async';

export default function App() {
  return (
    <>
    <GlobalStyle />
    <HelmetProvider>
    <BrowserRouter>
      <Routes>
        {/* 플로팅버튼이 필요한 주요페이지 컴포넌트 라우팅 */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/ovenlist" element={<OvenList />} />
          <Route path="/oven/:id" element={<UserOven />} />
        </Route>
        {/* Header가 필요한 form 컴포넌트 라우팅 */}
        <Route element={<FormLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/join/info" element={<Join />} />
          <Route path="/join/ovenselect" element={<SelectOven />} />
          <Route path="/find/userid" element={<FindId />} />
          <Route path="/find/userpw" element={<FindPw />} />
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