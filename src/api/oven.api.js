import { authInstance, instance } from 'api/axiosInstance';

//내오븐선택(생성)
export const ovenSelectAPI = async (id, oven, priv) => {
  const reqData = {
    usId: id,
    ovDesign: parseInt(oven),
    ovPrivateYn: priv,
  };
  try {
    const result = await authInstance.post('oven/create', reqData);
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const ovenListAPI = async () => {
  try {
    const result = await instance.get('oven/list');
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const ovenInfoAPI = async (id) => {
  try {
    const result = await instance.get(`oven/details/${id}`);
    return result.data;
  } catch (error) {
    throw error;
  }
};
