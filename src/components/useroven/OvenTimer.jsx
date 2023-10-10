import { useRecoilState } from "recoil";
import { OvenTimerBox } from "../../style/UserOven.style";
import { MsgOpen,OvenTime } from '../../atoms/MsgOpenTimer';

export default function OvenTimer() {
    const [ovenTime, setOvenTime] = useRecoilState(OvenTime);
    const [isOpenMsg,setIsOpenMsg] = useRecoilState(MsgOpen);

    return(
        <>
        {isOpenMsg ? 
        <OvenTimerBox $end>메세지가 공개되었어요 :&#41;</OvenTimerBox>:
        <OvenTimerBox>{ovenTime.day}:{ovenTime.hour}:{ovenTime.min}</OvenTimerBox>}
        </>
    );
}
