import axios from "axios";
const BASE_URL = "http://localhost:4001/api/developer";
const pause = () => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  });
};

export const loadAPI = async (page = 1, limit = 10) => {
  await pause();
  return axios.get(`${BASE_URL}/documentation?page=${page}&limit=${limit}`);
};
export const loadIntro = (id) => {
  return axios.get(`${BASE_URL}/intro/${id}`);
};
export const loadGuide = (id) => {
  return axios.get(`${BASE_URL}/guide/${id}`);
};
