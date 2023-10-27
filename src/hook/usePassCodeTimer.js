import { useEffect } from 'react';

export default function useCodeTimer(time, activeTimer, setTime, setActiveTimer) {
  useEffect(() => {
    let interval;

    if (activeTimer && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(interval);
      console.log('타이머가 종료되었습니다.');
      setActiveTimer(false);
      setTime(600); // 10분으로 리셋
    }

    return () => {
      clearInterval(interval);
    };
  }, [time, activeTimer]);
}
