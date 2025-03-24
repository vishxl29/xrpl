import axios from "axios";

const API_URL = "http://localhost:5000";  // Change if needed

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  return axios.post(`${API_URL}/upload`, formData);
};

export const fetchRecords = async () => {
  return axios.get(`${API_URL}/records`);
};
