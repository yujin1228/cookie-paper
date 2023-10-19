import { instance } from "./axiosInstance";

//아이디 중복 검사
export const idDuplicateAPI = async (id) => {
  const reqData = {
    usId: id,
  };

  try {
    const result = instance.post("user/checkId", reqData);
    console.log(result.data);
  } catch (error) {
    console.error(error);
    //throw error;
  }
};

//이메일 중복 검사 및 인증
export const emailDuplicateAPI = async (email) => {
  const reqData = {
    usEmail: email,
  };

  try {
    const result = await instance.post("user/checkEmail", reqData);
    return result.data;
  } catch (error) {
    console.error(error);
    //throw error;
  }
};

//회원가입
export const joinAPI = async (userInfo) => {
  const reqData = userInfo;

  try {
    const result = await instance.post("user/signUp", reqData);
    console.log(result.data);
  } catch (error) {
    console.error(error);
    //throw error;
  }
};
