import { instance } from 'api/axiosInstance';

//쿠키리스트 api
export const cookieListAPI = async (ovId, page) => {
  const reqData = {
    ovId: ovId,
    page: page,
  };
  try {
    const result = await instance.get('cookie/list?ovId=&page=', reqData);
    console.log(result.data);
  } catch (error) {
    console.error(error);
    //throw error;
  }
};

//쿠키 작성 api
export const cookieCreateAPI = async (cookieInfo) => {
  const reqData = cookieInfo;

  try {
    const result = await instance.get('cookie/create', reqData);
    console.log(result.data);
  } catch (error) {
    console.error(error);
    //throw error;
  }
};

//쿠키 상세보기 api
export const cookieReadAPI = async (cookieId) => {
  try {
    const result = await instance.get(`cookie/details/${cookieId}`);
    console.log(result.data);
  } catch (error) {
    console.error(error);
    //throw error;
  }
};
