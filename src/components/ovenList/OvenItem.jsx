import { ovens } from 'constant/imgImport';
import { useNavigate } from 'react-router-dom';
import { Name, Oven, OvenId, OvenImg, OvenTitle } from 'components/ovenList/OvenItem.style';
import { useRecoilValue } from 'recoil';
import { MsgOpen } from 'atoms/msgOpenTimer';

export default function OvenItem({ userid, name, oven, mine, pri }) {
  const isOpenMsg = useRecoilValue(MsgOpen);

  //props = { id: 아이디문자열, name: 닉네임문자열, oven: 오븐이미지넘버, mine: true or false}
  let route = `../oven/${userid}`;
  const navigate = useNavigate();

  const onClick = () => {
    if (isOpenMsg) {
      pri === 0 ? navigate(route) : alert('비공개 오븐은 주인만 열 수 있어요!');
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
