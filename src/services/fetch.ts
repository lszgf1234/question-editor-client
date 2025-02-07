import axios from 'axios';

const HOST = process.env.HOST // Mock 的 host
// const HOST = 'http://localhost:3001' // Mock 的 host
const requestInstance = axios.create({
  baseURL: HOST,
});

requestInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

requestInstance.interceptors.response.use(
  (response) => {
    if (response?.status === 200) {
      return response?.data;
    } else {
      return {
        code: -1,
        msg: '未知错误',
        data: null,
      };
    }
  },
  (error) => Promise.reject(error)
);

export async function get() {}

export default requestInstance;
