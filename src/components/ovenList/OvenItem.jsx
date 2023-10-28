import { ovens } from 'constant/imgImport';
import { useNavigate } from 'react-router-dom';
import { Name, Oven, OvenId, OvenImg, OvenTitle } from 'components/ovenList/OvenItem.style';
import { useRecoilValue } from 'recoil';
import { MsgOpen } from 'atoms/msgOpenTimer';

export default function OvenItem({ userid, name, oven, mine, pri }) {
  const isOpenMsg = useRecoilValue(MsgOpen);
  const userInfo = JSON.parse(localStorage.getItem('CPUserInfo'));

  let route = `../oven/${userid}`;
  const navigate = useNavigate();

  const onClick = () => {
    if (isOpenMsg) {
      if (pri === 0) {
        //공개오븐
        navigate(route);
      } else {
        //비공개오븐
        userInfo.usId === userid ? navigate(route) : alert('비공개 오븐은 주인만 열 수 있어요!');
      }
    } else {
      navigate(route);
    }
  };

  return (
    <Oven onClick={onClick} $mine={mine}>
      <OvenTitle>
        <Name>{name}</Name>님의 오븐
        {pri === 1 && <span>🔒</span>}
      </OvenTitle>
      <OvenId>@{userid}</OvenId>
      <OvenImg src={ovens[oven]} />
    </Oven>
  );
}
