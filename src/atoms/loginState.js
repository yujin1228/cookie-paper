import { atom } from 'recoil';

export const LoginState = atom({
  key: 'loginstate',
  default: false,
});

export const UserInfo = atom({
  key: 'user-infomaion',
  default: {
    usId: '',
    usNickName: '',
    usEmail: '',
  },
});
