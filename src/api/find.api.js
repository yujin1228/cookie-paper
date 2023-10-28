import { instance } from 'api/axiosInstance';

//비밀번호 찾기 -> 인증번호 이메일 발송
export const pwFindAPI = async (id, email) => {
  const reqData = {
    usId: id,
    usEmail: email,
  };

  try {
    const result = await instance.post('user/findPassword', reqData);
    return result.data;
  } catch (error) {
    throw error;
  }
};

//비밀번호 재설정
export const pwUpdateAPI = async ({ userid, useremail, userpw }) => {
  const reqData = {
    usId: userid,
    usEmail: useremail,
    usPassword: userpw,
  };

  try {
    const result = await instance.post('user/updatePassword', reqData);
    return result.data;
  } catch (error) {
    throw error;
  }
};
