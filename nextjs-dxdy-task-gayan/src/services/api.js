// services/api.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://localhost:7239/api', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getPlanet = async () => {
  const response = await apiClient.get('/Swapi/planet');
  return response.data;
};

export const getShip = async () => {
  const response = await apiClient.get('/Swapi/ship');
  return response.data;
};

export const submitData = async (data) => {
  const response = await apiClient.post('/Swapi/submit', data);
  return response.data;
};
