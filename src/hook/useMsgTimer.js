import { useSetRecoilState } from 'recoil';
import { MsgOpen, day, hour, min } from 'atoms/msgOpenTimer';
import { useEffect } from 'react';
import { OPEN_DATE } from 'constant/service';

export default function useMsgTimer() {
  const setIsOpenMsg = useSetRecoilState(MsgOpen);
  const setDay = useSetRecoilState(day);
  const setHour = useSetRecoilState(hour);
  const setMin = useSetRecoilState(min);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const now = new Date(); //현재 시간
      const openDate = new Date(OPEN_DATE);
      const dis = openDate.getTime() - now.getTime();

      if (dis > 0) {
        const min1 = 1000 * 60; //1분

        let d = Math.floor(dis / (min1 * 60 * 24));
        let h = Math.floor((dis % (min1 * 60 * 24)) / (min1 * 60));
        let m = Math.floor((dis % (min1 * 60)) / min1) + 1;

        if (m === 60) {
          h = h + 1;
          m = 0;
        }
        if (h === 24) {
          d = d + 1;
          h = 0;
        }

        d = d.toString().padStart(2, '0');
        h = h.toString().padStart(2, '0');
        m = m.toString().padStart(2, '0');

        setDay(d);
        setHour(h);
        setMin(m);
      } else {
        setIsOpenMsg(true);
        clearInterval(timeInterval);
      }
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);
}
