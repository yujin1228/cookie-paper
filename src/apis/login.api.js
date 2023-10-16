import { instance } from "./axiosInstance";


export const loginAPI = async(id,pw) => {
    const reqData = {
            "usId": id,
            "usPassword": pw
    }

    try{
        const result = await instance.post('user/login',reqData);
        console.log(result.data);
    }catch (error) {
        console.error(error);
        //throw error;
    }
}