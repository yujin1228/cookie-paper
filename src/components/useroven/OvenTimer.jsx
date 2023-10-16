import { useRecoilState, useRecoilValue } from "recoil";
import { OvenTimerBox } from "../../style/UserOven.style";
import { MsgOpen, day, hour, min } from '../../atoms/msgOpenTimer';

export default function OvenTimer() {
    const isOpenMsg = useRecoilValue(MsgOpen);
    const timerDay = useRecoilValue(day);
    const timerHour = useRecoilValue(hour);
    const timerMin = useRecoilValue(min);


    console.log("엥");
    return(
        <>
        {isOpenMsg ? 
        <OvenTimerBox $end>메세지가 공개되었어요 :&#41;</OvenTimerBox>:
        <OvenTimerBox>{timerDay}:{timerHour}:{timerMin}</OvenTimerBox>}
        </>
    );
}
