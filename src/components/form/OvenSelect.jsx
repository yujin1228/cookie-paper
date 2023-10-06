import React, { useState } from 'react';
import { ovens } from '../../style/_ImgImport';
import { Check, CustomButton, Form, H2, Img, Input, Label, SelectBox, SelectItem } from '../../style/OvenSelectStyle';


export default function OvenSelect() {
    const [selectedOven,setSelectedOven] = useState(1);
    const ovenitems = Object.values(ovens);
    const ovenids = Object.keys(ovens);

    const setSelectedValue = (e) => {
        //선택된 오븐의 value값을 상태selectedOven 에 저장
        setSelectedOven(e.target.value);
    }

    const ovenItems = ovenitems.map((oven, index) => (  
        <label onClick={setSelectedValue} key={index}>
        {selectedOven == ovenids[index] ?
        (<Input type="radio" name="oven" value={ovenids[index]} defaultChecked />)
        :(<Input type="radio" name="oven" value={ovenids[index]} />)}
        <SelectItem>
            <Img src={oven}/>
        </SelectItem>
        </label>
    ));

    return(
    <>
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
    </>
    );
}
