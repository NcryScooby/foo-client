import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
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
