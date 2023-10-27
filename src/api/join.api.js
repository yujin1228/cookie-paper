import { instance } from 'api/axiosInstance';

//이메일 중복 검사 및 인증
export const emailDuplicateAPI = async (email) => {
  const reqData = {
    usEmail: email,
  };

  try {
    const result = await instance.post('user/checkEmail', reqData);
    console.log(result);
  } catch (error) {
    throw error;
  }
};

//회원가입
export const joinAPI = async (userInfo) => {
  const reqData = {
    usId: userInfo.userid,
    usPassword: userInfo.userpw,
    usNickname: userInfo.username,
    usEmail: userInfo.useremail,
  };

  try {
    const result = await instance.post('user/signUp', reqData);
    return result.data;
  } catch (error) {
    throw error;
  }
};
