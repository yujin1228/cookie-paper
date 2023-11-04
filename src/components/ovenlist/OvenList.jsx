import OvenItem from './OvenItem';
import { Container, OvenBox, ScrollBox, Title } from 'components/ovenList/OvenList.style';
import { ovenListAPI } from 'api/oven.api';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { LoginState, userinfo } from 'atoms/loginState';
import Loader from 'components/common/Loader/Loader';

export default function OvenList() {
  const [ovenList, setOvenList] = useState(null);
  const isLoggedin = useRecoilValue(LoginState);
  const userInfo = useRecoilValue(userinfo);

  useEffect(() => {
    ovenListAPI()
      .then((listData) => {
        if (isLoggedin) {
          //listData정렬
          const newlistData = listData.filter((item) => item.usId === userInfo.usId).concat(listData.filter((item) => item.usId !== userInfo.usId));
          setOvenList(newlistData);
        } else {
          setOvenList(listData);
        }
      })
      .catch((err) => {
        alert('오븐목록 불러오기에 실패했습니다. 잠시 후 시도해주세요.');
      });
  }, [isLoggedin, userInfo.usId]);

  const listItem = () => {
    return ovenList.map((item, index) => {
      //로그인 상태라면 첫번째요소에 mine=true
      const mine = isLoggedin && index === 0 ? true : false;
      return <OvenItem key={item.ovId} userid={item.usId} name={item.usNickname} oven={item.ovDesign} pri={item.ovPrivateYn} mine={mine} />;
    });
  };

  return (
    <Container>
      <Title />
      <ScrollBox>{ovenList !== null ? <OvenBox>{listItem()}</OvenBox> : <Loader />}</ScrollBox>
    </Container>
  );
}
