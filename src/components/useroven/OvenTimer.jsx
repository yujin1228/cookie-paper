import { useEffect, useState } from "react";
import { OvenTimerBox } from "../../style/UserOven.style";

const Timer = () => {
    const now = new Date(); //현재 시간
    const openDate = new Date('2023-11-10T00:00:00');
    const dis = openDate.getTime() - now.getTime();

    console.log(dis);
    if(dis>0){
        const min1 = 1000 * 60;//1분

        let day = Math.floor(dis / (min1 * 60 * 24));
        let hour = Math.floor((dis % (min1 * 60 * 24)) / (min1 * 60));
        let min = (Math.floor((dis % (min1 * 60)) / (min1))+1);

        if(min === 60){
            hour = hour - 1;
            min = 0;
        }
        if(hour === 24) day = day - 1;
        
        day = day.toString().padStart(2,"0");
        hour = hour.toString().padStart(2,"0");
        min = min.toString().padStart(2,"0");
        return [day,hour,min,"1"]; 
    }else{
        return 0;
    }

}

export default function OvenTimer() {
    let firstTime = Timer();
    console.log(firstTime);
    const [days, setDays] = useState(firstTime[0]);
    const [hours, setHours] = useState(firstTime[1]);
    const [minutes, setMinutes] = useState(firstTime[2]);
    const [active, setActive] = useState(firstTime[3]);

    useEffect(()=>{
        const timeInterval = setInterval(() => {
            let Time = Timer();
            
            console.log(days,hours,minutes,active);
            if(Time == 0){
                setActive('0');
                clearInterval(timeInterval);
            }else{
                setDays(Time[0]);
                setHours(Time[1]);
                setMinutes(Time[2]);
            }
        },1000);

        return () => clearInterval(timeInterval);
    },[]);

    return(
        <>
        {active == '1'? 
        <OvenTimerBox>{days}:{hours}:{minutes}</OvenTimerBox>:
        <OvenTimerBox $end>메세지가 공개되었어요 :&#41;</OvenTimerBox>}
        </>
    );
}
