import { atom, selector } from 'recoil';

//메시지공개일(2023-11-10) 됐는지 여부
//2023-11-10 자정 이전 -> false
//2023-11-10 자정 이후 -> true
export const MsgOpen = atom({
  key: 'messageOpen',
  default: false,
});

export const showOpenModal = atom({
  key: 'showOpenModal',
  default: false,
});

export const day = atom({
  key: 'msgOpenTimerD',
  default: '00',
});

export const hour = atom({
  key: 'msgOpenTimerH',
  default: '00',
});

export const min = atom({
  key: 'msgOpenTimerM',
  default: '00',
});
