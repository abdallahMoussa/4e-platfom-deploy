import axios from "axios";
let baseUserUrl = process.env.REACT_APP_BASE_USER_URL;
const axiosRequest = axios.create({
  baseURL: `http://ncvc.4explain.net:5111/api`,

});

axiosRequest.interceptors.request.use(
  function (config) {
    // config.headers.Authorization = "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkQ4OTBCMzc3MEJENTU2MkM2OEYyQjdEQjlBMDE4OUUwIiwidHlwIjoiYXQrand0In0.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUxMTEvIiwibmJmIjoxNzAzMTYwMDg4LCJpYXQiOjE3MDMxNjAwODgsImV4cCI6MTcwMzI0NjQ4OCwiYXVkIjoiVXNlck1hbmFnZW1lbnRTZXJ2ZXIiLCJzY29wZSI6WyI0RU1pY3JvU2VydmljZXMiXSwiYW1yIjpbInB3ZCJdLCJjbGllbnRfaWQiOiJjbGllbnQiLCJzdWIiOiIwMmY0MzdjYi05MzNkLTQwMGEtYzZjOS0wOGRjMDEzYTRhOTMiLCJhdXRoX3RpbWUiOjE3MDMxNjAwODgsImlkcCI6ImxvY2FsIiwiZW1haWwiOiJBaG1lZEBnbWFpbC5jb20iLCJyb2xlIjoic3VwZXJBZG1pbiIsIm5hbWUiOiJBaG1lZCIsImp0aSI6IjlCQzc3NThDODBBMEQ2M0VENUFGMDdCOTk1QjhGNzgyIn0.Iw9-IiT3dYZFhKiPP7t_gTl5WK7TDvWcidx9r2YXZdpYHn206NmO7pOHijNQ4rbqdm3h3msliX4_k9akUg0IdbswROyw8wdWGXUxOeuuoGYmCJPsB9voFCDIXFg8oanqlm_qhmqqrCZoTVxZPwpuenLC-94FBROLn_-Gf42okJHIKGR-dyS2ino55mUZ6tYq12mF-81bIg_Iux463qk-JOBjZuTpCiMYOofXhvJXC_t-9ajnqYSGuTqbktEnYnJLJtBwJQ9siq921mLZ316cQMoBt2MbmnLxVfD4cRZ927voDm_96fmJ4SRPKzNlguiXEqNQdXO3aX1fYps91595vA";

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

axiosRequest.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosRequest;
