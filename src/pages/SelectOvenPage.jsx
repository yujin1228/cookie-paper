import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FormContainer, FormTitle } from '../style/Form.style';
import OvenSelect from '../components/form/OvenSelect';

export default function SelectOvenPage(){
  return(
  <>
  <Helmet>
    <title>쿠키페이퍼 | 오븐선택</title>
  </Helmet>
  <FormContainer width="936px">
        <FormTitle $marginb="8px">내 오븐 선택</FormTitle>
        <OvenSelect />
  </FormContainer>
  </>
  );
}

