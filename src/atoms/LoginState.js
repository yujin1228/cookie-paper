import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const LoginState = atom({ 
    key:'loginstate',
    default: false,
    //effects_UNSTABLE: [persistAtom]
});

export const UserInfo = atom({
    key:'user-infomaion',
    default: {
        
    }
})