import axios from "axios";

const VITE_API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getCategories = async () => {
  const { data } = await api.get("/categories");
  return data;
};

export const getProducts = async () => {
  const { data } = await api.get("/products");
  return data;
};
