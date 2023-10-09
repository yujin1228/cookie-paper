import { useEffect, useState } from "react";
import { OvenTimerBox } from "../../style/UserOvenStyle";


export default function OvenTimer() {
    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const openDate = new Date('2023-11-10T00:00:00'); //메시지 공개일

    useEffect(()=>{
        const timeInterval = setInterval(() => {
            const now = new Date(); //현재 시간
            const dis = openDate.getTime() - now.getTime();

            if(dis>0){
                const min1 = 1000 * 60;//1분 
                //min*60 -> 1시간
                //min*60*24 -> 1일
    
                const day = Math.floor(dis / (min1 * 60 * 24)).toString();
                const hour = Math.floor((dis % (min1 * 60 * 24)) / (min1 * 60)).toString();
                const min = (Math.floor((dis % (min1 * 60)) / (min1))+1).toString();
                
                const letters = (s) => { // 한자리일때 0붙여줌
                    if (s.length == 1) s = "0"+s;
                    return s;
                }

                setDays(letters(day));
                setHours(letters(hour));
                setMinutes(letters(min));
            }else {
                setDays('00');
                setHours('00');
                setMinutes('00');
                clearInterval(timeInterval);
            }
        },1000);

        return () => clearInterval(timeInterval);
    },[]);
    return(
        <OvenTimerBox>{days}:{hours}:{minutes}</OvenTimerBox>
    );
}
