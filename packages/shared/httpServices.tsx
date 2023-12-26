import axios, { AxiosInstance } from "axios";
// import { toast } from "react-toastify";

import Swal from "sweetalert2";

const baseUrl = "https://api.publicapis.org";


const http: AxiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});

http.interceptors.response.use(
  (response) => response,
  (error) => {
    // toast(error.response.data.message);
    Swal.fire({
      title: "وقع خطأ أثناء تنفيذ الطلب",
      text: "يرجى إعادة تحميل الصفحة",
      icon: "warning",
      confirmButtonText: "إعادة التحميل",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
      });

    return Promise.reject(error);
  }
);

export default http;
