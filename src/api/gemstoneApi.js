import axios from "axios";

const API_URL = "http://localhost:5000/api/gemstones"; // backend URL

// Get all gemstones
export const getGemstones = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Get gemstone by ID
export const getGemstoneById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// Add new gemstone
export const addGemstone = async (data) => {
  const response = await axios.post(API_URL, data);
  return response.data;
};

// Delete gemstone
export const deleteGemstone = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
