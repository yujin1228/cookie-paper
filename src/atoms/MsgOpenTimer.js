import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
//메시지공개일(2023-11-10) 됐는지 여부
//2023-11-10 자정 이전 -> false
//2023-11-10 자정 이후 -> true
export const MsgOpen = atom({ 
    key:'messageOpen',
    default: false,
    //effects_UNSTABLE: [persistAtom]
});

export const OvenTime = atom({
    key:'msgOpenTimer',
    default: {
        day: "00",
        hour: "00",
        min: "00"
    }
})