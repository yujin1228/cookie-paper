import { instance } from 'api/axiosInstance';

export const loginAPI = async (id, pw) => {
  const reqData = {
    usId: id,
    usPassword: pw,
  };
  try {
    const result = await instance.post('user/login', reqData);
    return result.data;
  } catch (error) {
    throw error;
  }
};
