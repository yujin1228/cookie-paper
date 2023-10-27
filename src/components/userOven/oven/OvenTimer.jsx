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

  font-size: 24px;
  font-family: ${(props) => (props.$end ? 'var(--message-font)' : 'var(--timer-font)')};
  color: var(--gray-300);
  text-align: center;
  letter-spacing: ${(props) => (props.$end ? '0' : '16px')};
  line-height: 69px;

  padding-left: ${(props) => (props.$end ? '0' : '16px')};
`;
