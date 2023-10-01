import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import FormHeader from './components/form/FormHeader';
import Main from './components/Main';
import Login from './components/form/Login';
import Join from './components/form/Join';
import SelectOven from './components/form/SelectOven';
import FindId from './components/form/FindId';
import FindPw from './components/form/FindPw';
import FloatingButton from './components/FloatingButton';
import GlobalStyle from './GlobalStyle';


export default function App() {
  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        {/* 플로팅버튼이 필요한 주요페이지 컴포넌트 라우팅 */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Main />} />
          
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
      <Outlet />
      <FloatingButton />
    </>
  );
}