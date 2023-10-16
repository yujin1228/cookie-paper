import { instance } from "./axiosInstance";

//아이디찾기 -> 이메일 발송
export const idFindAPI = async(id) => {
    const reqData = {
        "usId": id
    }

    try{
        const result = instance.post('user/findid',reqData);
        console.log(result.data);
        
    }catch (error) {
        console.error(error);
        //throw error;
    }
}

//비밀번호 찾기 -> 인증번호 이메일 발송
export const pwFindAPI = async(id,email) => {
    const reqData = {
        "usId": id,
        "usEmail": email
    }

    try{
        const result = instance.post('user/findPassword',reqData);
        console.log(result.data);
        
    }catch (error) {
        console.error(error);
        //throw error;
    }
}

//비밀번호 재설정
export const pwUpdateAPI = async(id,pw) => {
    const reqData = {
        "usId": id,
        "usPassword": pw
    }

    try{
        const result = await instance.post('user/updatePassword',reqData);
        console.log(result.data);
        
    }catch (error) {
        console.error(error);
        //throw error;
    }
}