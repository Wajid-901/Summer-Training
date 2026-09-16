import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products";

export const getProducts = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const getProduct = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};