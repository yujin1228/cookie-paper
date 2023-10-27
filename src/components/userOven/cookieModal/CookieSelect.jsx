import { useState } from 'react';
import { styled } from 'styled-components';
import { cookies } from 'constant/imgImport';
import { Input } from 'components/userOven/cookieModal/CookieModal.style';

export default function CookieSelect() {
  const [selectedCookie, setSelectedCookie] = useState(1);
  const cookieitems = Object.values(cookies);
  const cookieids = Object.keys(cookies);

  console.log(selectedCookie);
  const setSelectedValue = (e) => {
    //선택된 오븐의 value값을 상태selectedOven 에 저장
    setSelectedCookie(e.target.value);
  };

  const cookieItems = cookieitems.map((cookie, index) => (
    <label onClick={setSelectedValue} key={index}>
      {index ? ( //라디오버튼에 기본선택값 주기
        <Input type="radio" name="cookie" value={cookieids[index]} />
      ) : (
        <Input type="radio" name="cookie" value={cookieids[index]} defaultChecked />
      )}
      <SelectItem>
        <Img src={cookie} />
      </SelectItem>
    </label>
  ));

  return <OvenPen>{cookieItems}</OvenPen>;
}

const OvenPen = styled.div`
  width: 100%;
  height: 126px;
  background-color: var(--gray-800);
  border: 10px solid var(--gray-900);
  border-radius: 16px;
  padding: 6px 24px;
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`;

const Img = styled.img`
  width: 84px;
  height: 94px;
  object-fit: cover;
  object-position: center;
  -webkit-user-drag: none;
`;

const SelectItem = styled.div`
  width: fit-content;
  position: relative;
  cursor: pointer;

  Input:checked + &::after {
    content: '선택';
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -3px);

    font-size: 14px;
    font-weight: 700;
    line-height: 27px;
    color: var(--brown-400);
    text-align: center;

    width: 46px;
    background-color: var(--orange-400);
    border-radius: 4px;
  }
`;
