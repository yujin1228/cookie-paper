import OvenItem from './OvenItem';
import { Container, EmptyText, OvenBox, Title } from 'components/ovenList/OvenList.style';
import { ovenListAPI } from 'api/oven.api';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { LoginState, UserInfo } from 'atoms/loginState';

export default function OvenList() {
  const [ovenList, setOvenList] = useState(null);
  const isLoggedin = useRecoilValue(LoginState);
  const userInfo = JSON.parse(localStorage.getItem('CPUserInfo'));

  useEffect(() => {
    const promise = ovenListAPI();
    const getData = () => {
      promise.then((listData) => {
        if (isLoggedin) {
          //listData정렬
          const newlistData = listData.filter((item) => item.usId === userInfo.usId).concat(listData.filter((item) => item.usId !== userInfo.usId));
          setOvenList(newlistData);
        } else {
          setOvenList(listData);
        }
      });
    };
    getData();
  }, []);

  console.log(ovenList);
  const listItem = () => {
    if (ovenList !== null && ovenList !== undefined) {
      return ovenList.map((item, index) => {
        //로그인 상태라면 첫번째요소에 mine=true
        const mine = isLoggedin && index === 0 ? true : false;
        return <OvenItem key={item.ovId} userid={item.usId} name={item.usNickname} oven={item.ovDesign} pri={item.ovPrivateYn} mine={mine} />;
      });
    } else {
      return '';
    }
  };
  return (
    <Container>
      <Title />
      <OvenBox>{listItem()}</OvenBox>
    </Container>
  );
}
