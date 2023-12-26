import axios from "axios";

import  Swal  from 'sweetalert2';
import { getToken } from '@4eplatform/shared';

let baseUserUrl = process.env.REACT_APP_BASE_USER_URL;
const aggregatorAxiosInstance = axios.create({
  baseURL: `http://ncvc.4explain.net:5034/api`,
  //  baseURL: `http://localhost:5111/api`,
});

// Add request interceptor
aggregatorAxiosInstance.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `Bearer ${getToken()}`;
    // config.headers.Authorization = `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg5ODNCMThCMzE1Mjg3NzEwMTkzNDExMTUyRjlBNUJFIiwidHlwIjoiYXQrand0In0.eyJpc3MiOiJodHRwOi8vaG9zdC5kb2NrZXIuaW50ZXJuYWw6NTExMS8iLCJuYmYiOjE3MDM1MDEyMDIsImlhdCI6MTcwMzUwMTIwMiwiZXhwIjoxNzAzNTg3NjAyLCJhdWQiOiJVc2VyTWFuYWdlbWVudFNlcnZlciIsInNjb3BlIjpbIjRFTWljcm9TZXJ2aWNlcyJdLCJhbXIiOlsicHdkIl0sImNsaWVudF9pZCI6ImNsaWVudCIsInN1YiI6ImQ4MTFlMzRiLTBiYWMtNDFiMC1hMzlkLTA4ZGMwNTM2NzBlMiIsImF1dGhfdGltZSI6MTcwMzUwMTIwMiwiaWRwIjoibG9jYWwiLCJlbWFpbCI6IkFobWVkQGdtYWlsLmNvbSIsInJvbGUiOiJzdXBlckFkbWluIiwibmFtZSI6IkFobWVkIiwianRpIjoiMTEzMzFEODJDOEEwNkQxMjk3Mjg3NTdDQTM5MjgzQjEifQ.KzfSB-jtyo4ZjOojefkL5GaUWPZoYekKnCLsQ6Br2nrGvUlI2IXd8198ThGJdmVu817hDzUljtSNcQH8kVeqFSwcX3J99YWNLg7Mu0pp6n7dhm_W8JwsnTC_8XvfS8nXFS4hBUEvMh82jLxTH7uvp0Tu73fES0YtVYPz-N4Ws_l47QJ0MYL432B9SaNOFdBmuk513kQ6W8FMzfllsTijuhp2F_1zFwNHCRNmtiAzwlQHU7gAKipNxqA3cmqSeouSFNLiRS73jlqzNlN4C6W5r1Lnj9gttuln_Xt-XN1CxFm9K_2Gg4Rn3D-bs-Z58QfoOYYZTvquIy66EAFWYQqmzg`;

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
aggregatorAxiosInstance.interceptors.response.use(
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
        showConfirmButton: false
      })

      localStorage.setItem('user', '');
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
    return Promise.reject(error);
  }
);

export default aggregatorAxiosInstance;
