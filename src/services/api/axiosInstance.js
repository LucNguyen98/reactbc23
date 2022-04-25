import axios from "axios";

const axiosIntance = axios.create({
  baseURL: "http://svcy.myclass.vn/api/",
  timeout: 15000,
});

axiosIntance.defaults.headers.post["Content-Type"] = "application/json";

axiosIntance.interceptors.request.use((config) => {
  return config;
});

axiosIntance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error;
  }
);

export default axiosIntance;
