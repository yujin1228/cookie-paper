import { atom } from 'recoil';

export const LoginState = atom({
  key: 'loginstate',
  default: false,
});

export const userinfo = atom({
  key: 'user-infomaion',
  default: { usId: null, usName: null, usOvId: null },
});
