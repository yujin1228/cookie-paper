import React from 'react';
import { styled } from 'styled-components';
import { Button, FormContainer, FormTitle } from '../../components/form/FormStyle';
import unchecked from '../../assets/img/ico_unchecked.png';
import checked from '../../assets/img/ico_checked.png';
import { ovens } from '../../components/share/ImgImport';

//회원가입 완료 후 넘어오는 페이지!
export default function SelectOven() {
  let ovenitems = Object.values(ovens);

  const ovenItems = ovenitems.map((oven, index) => (  
    <label key={index}>
      <Input type="radio" name="oven" value={oven} />
      <SelectItem>
        <Img src={oven}/>
      </SelectItem>
    </label>
  ));


  return (
    <FormContainer width="936px">
        <FormTitle>내 오븐 선택</FormTitle>
        <Form>
          <H2>쿠키메이커님이 사용하실 오븐을 선택해주세요</H2>
          <SelectBox>
            {ovenItems}
            <Label>
              <Input type="checkbox" />
              <Check>내 오븐을 비공개로 설정하기</Check>
            </Label>
            
          </SelectBox>
          <CustomButton>내 오븐 만들기</CustomButton>          
        </Form>

    </FormContainer>
  );
}

const H2 = styled.h2`
  text-align: center;
  letter-spacing : 2px;
  line-height: 21px;
  margin-top: 8px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const SelectBox = styled.div`
  width: 100%;
  background-color: var(--gray-100);
  border-radius: 20px;
  padding: 48px 76px 28px 76px;
  display: flex;
  flex-wrap: wrap;
  gap: 44px 129px;
`;

const Input = styled.input`
  display: none;
`;

const Img = styled.img`
  width: 175px; 
`;

const SelectItem = styled.div`
  position: relative;

  &:hover {
    cursor: pointer;
  }

  Input:checked + &::after {
    content: "내 오븐";
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,100%);

    font-family: var(--main-font);
    font-size: 15px;
    font-weight: 900;
    line-height: 20px;
    color: var(--brown-400);

    background-color: var(--orange-400);
    border-radius: 4px;
    padding: 4px 10px;
  }
`;
const Label = styled.label`
  display: block;
  margin: 0 auto;
`;

const Check = styled.p`
  display: flex;
  align-items: center;
  line-height: 21px;
  margin: 0 auto;
  cursor: pointer;

  &::after {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-left: 8px;

    background-image: url(${unchecked});
    background-repeat: no-repeat;
    background-size: cover;
  }

  Input:checked + &::after {
    background-image: url(${checked});
  }
`;

const CustomButton = styled(Button)`
  width: 286px;
`;

