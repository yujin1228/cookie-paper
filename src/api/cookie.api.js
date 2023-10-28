import { instance } from 'api/axiosInstance';

//쿠키리스트 api
export const cookieListAPI = async (ovId, page) => {
  try {
    const result = await instance.get(`cookie/list?ovId=${ovId}&page=${page}`);
    return result.data;
  } catch (error) {
    throw error;
  }
};

//쿠키 작성 api
export const cookieCreateAPI = async (cookieInfo) => {
  const reqData = cookieInfo;

  try {
    const result = await instance.post('cookie/create', reqData);
    return result.data;
  } catch (error) {
    throw error;
  }
};

//쿠키 상세보기 api
export const cookieReadAPI = async (cookieId) => {
  try {
    const result = await instance.get(`cookie/details/${cookieId}`);
    return result.data;
  } catch (error) {
    throw error;
  }
};
