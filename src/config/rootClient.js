import axios from "axios";

const rootClient = axios.create();

rootClient.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default rootClient;
