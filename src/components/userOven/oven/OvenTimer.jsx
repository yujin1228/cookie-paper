import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
import { MsgOpen, day, hour, min } from 'atoms/msgOpenTimer';

export default function OvenTimer() {
  const isOpenMsg = useRecoilValue(MsgOpen);
  const timerDay = useRecoilValue(day);
  const timerHour = useRecoilValue(hour);
  const timerMin = useRecoilValue(min);

  return (
    <>
      {isOpenMsg ? (
        <OvenTimerBox $end>메세지가 공개되었어요 :&#41;</OvenTimerBox>
      ) : (
        <OvenTimerBox>
          <Ex>메시지공개까지 남은 시간⌛️</Ex>
          {timerDay}:{timerHour}:{timerMin}
        </OvenTimerBox>
      )}
    </>
  );
}

const OvenTimerBox = styled.div`
  width: 331px;
  background-color: var(--gray-900);
  margin: 0 auto;
  position: relative;

  font-size: 24px;
  font-family: ${(props) => (props.$end ? 'var(--message-font)' : 'var(--timer-font)')};
  color: var(--gray-300);
  text-align: center;
  letter-spacing: ${(props) => (props.$end ? '0' : '16px')};
  line-height: 69px;

  padding-left: ${(props) => (props.$end ? '0' : '16px')};
`;

const Ex = styled.p`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -16px);
  font-size: 13px;
  letter-spacing: 2px;
  line-height: 18px;
  color: var(--black);
  white-space: nowrap;
  background-color: var(--orange-100);
  padding: 3px 10px;
  font-family: var(--main-font);
  border-radius: 5px;
`;
