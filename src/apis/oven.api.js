import { authInstance, instance } from "./axiosInstance";

//내오븐선택(생성)
export const ovenSelectAPI = async(id,oven,priv) => {
    const reqData = {
        "usId": id,
        "ovDesign": oven,
        "ovPrivateYn": priv
    }

    try{
        const result = await authInstance.post('oven/create',reqData);
        console.log(result.data);
    }catch (error) {
        console.error(error);
        //throw error;
    }
}

export const ovenListAPI = async() => {
    try{
        const result = await instance.get('oven/list');
        console.log(result.data);
    }catch (error) {
        console.error(error);
        //throw error;
    }
}

export const ovenInfoAPI = async(id) => {
    try{
        const result = await instance.get(`oven/details/${id}`);
        console.log(result.data);
    }catch (error) {
        console.error(error);
        //throw error;
    }
}