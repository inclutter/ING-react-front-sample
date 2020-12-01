import axios from 'axios';
import { API_HOST } from '../constant.js';
import { message } from 'antd';


export function callApi({ method = 'get', url }) {
  return axios({
    url,
    method,
    baseURL: API_HOST,
    withCredentials: true,
  }).then(response => {
    const { resultCode, resultMessage, totalCount } = response.data;
    if (resultCode < 0) {
      message.error(resultMessage);
    }
    return {
      isSuccess: resultCode === ResultCode.Success,
      data: response.data.data,
      resultCode,
      resultMessage,
      totalCount,
    };
  });
}

export const ResultCode = {
  Success: 0,
};