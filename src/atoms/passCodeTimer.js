import { atom } from "recoil";

export const timerActive = atom({
    key:'codeTimerActive',
    default: false,
});

export const codeTime = atom({
    key:'passCodeTime',
    default: 600,
});