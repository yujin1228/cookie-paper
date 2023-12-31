import React, { useEffect, useState } from 'react';
import { ovens } from 'constant/imgImport';
import { CustomButton, Form, H2, Img, Label, SelectBox, SelectItem, Input, Check } from 'components/form/OvenSelect/OvenSelectForm.style';
import { useNavigate } from 'react-router';
import { ovenSelectAPI } from 'api/oven.api';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userinfo } from 'atoms/loginState';
import Loader from 'components/common/Loader/Loader';

export default function OvenSelect() {
  const [selectedOven, setSelectedOven] = useState(1);
  const [privateOven, setPrivateOven] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const ovenitems = Object.values(ovens);
  const ovenids = Object.keys(ovens);
  const [userInfo, setUserInfo] = useRecoilState(userinfo);

  //이미 오븐이 있을때 접근금지
  useEffect(() => {
    if (userInfo.usOvId) {
      alert('이미 생성된 오븐이 있습니다');
      navigate(`/oven/${userInfo.usId}`);
    }
  }, []);

  //선택된 오븐의 value값을 상태selectedOven 에 저장
  const handleSelectOven = (e) => {
    setSelectedOven(e.target.value);
  };

  const handleCheckBox = (e) => {
    setPrivateOven(e.target.checked);
  };

  const ovenItems = ovenitems.map((oven, index) => (
    <label onClick={handleSelectOven} key={index}>
      {index ? ( //라디오버튼에 기본선택값 주기
        <Input type="radio" name="oven" value={ovenids[index]} />
      ) : (
        <Input type="radio" name="oven" value={ovenids[index]} defaultChecked />
      )}
      <SelectItem>
        <Img src={oven} />
      </SelectItem>
    </label>
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const ovPrivate = privateOven ? 1 : 0;
    ovenSelectAPI(userInfo.usId, selectedOven, ovPrivate)
      .then((res) => {
        setLoading(false);
        if (res !== 'fail') {
          const newUserInfo = { ...userInfo, usOvId: res.ovId };
          localStorage.setItem('CPUserInfo', JSON.stringify(newUserInfo));
          setUserInfo({ ...userInfo, usOvId: res.ovId });
          navigate(`/oven/${userInfo.usId}`);
        } else if (res === 'fail') {
          alert('오븐만들기에 실패했습니다. 다시 시도해주세요.');
        }
      })
      .catch((err) => {
        setLoading(false);
        alert('오븐만들기에 실패했습니다. 잠시 후 다시 시도해주세요.');
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <H2>{userInfo.usName}님이 사용하실 오븐을 선택해주세요</H2>
        <SelectBox>
          {ovenItems}
          <Label>
            <Input type="checkbox" checked={privateOven} onChange={handleCheckBox} />
            <Check>내 오븐을 비공개로 설정하기</Check>
          </Label>
          {loading && <Loader />}
        </SelectBox>
        <CustomButton $buttonActive={true}>내 오븐 만들기</CustomButton>
      </Form>
    </>
  );
}
