import axios from 'axios';

export const URL = 'http://15.165.55.131/';
// export const URL = 'https://api.mandarin.weniv.co.kr/';

// 기본 인스턴스
export const instance = axios.create({
    baseURL: URL,
    headers: { 'Content-Type': 'application/json' },
});

// 토큰이 포함된 접근 인스턴스
export const authInstance = axios.create({
    baseURL: URL,
    headers: {
    'Content-Type': 'application/json',
    },
});

// 토큰이 필요한 경우 요청 전에 로컬스토리지에 토큰 받아오기 (인터셉트)
authInstance.interceptors.request.use((config) => {
    if (!config.headers.Authorization) {
        config.headers = {
        ...config.headers,
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        };
    }
    return config;
});
