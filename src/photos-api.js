import axios from "axios";

const API_KEY = "L-awsK9qW3bjrNUAqAF3fowpozBM9wtsNRiRDgjZVQQ";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.params = {
  client_id: API_KEY,
  per_page: 12,
  orientation: "landscape",
};

export const fetchPhotos = async (params = {}) => {
  const { data } = await axios.get("/search/photos", {
    params,
  });
  return data;
};
