import axios from "axios";
import  Swal  from 'sweetalert2';
import { getToken } from '@4eplatform/shared';

let baseUserUrl = process.env.REACT_APP_BASE_USER_URL;
const userAxiosInstance = axios.create({
  baseURL: `http://ncvc.4explain.net:5196/api/PlatformSettings/`,
});

// Add request interceptor
userAxiosInstance.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `Bearer ${getToken()}`;

    if (config.params != null) {
      config.params = {
        ...config.params,
      };
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add response interceptor
userAxiosInstance.interceptors.response.use(
  function (response) {
    // Handle successful responses
    return response;
  },
  function (error) {
    const statusCode = error.response.status;
    if (statusCode === 401) {
      Swal.fire({
        title: 'لقد انتهت صلاحيه الدخول',
        text: 'من فضلك أعد تسجبل الدخول',
        icon: 'warning',
        showConfirmButton:false
      })

      localStorage.setItem('user', '');
      setTimeout(() => {
        window.location.reload();
      }, 2000);
       
    }    return Promise.reject(error);
  }
);

export default userAxiosInstance;