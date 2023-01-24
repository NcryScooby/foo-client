import axios from "axios";
import { Message } from "../models/Message";

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

export const sendMessage = async ({
  email,
  firstName,
  lastName,
  message,
}: Message) => {
  const { data } = await api.post("/messages", {
    email,
    firstName,
    lastName,
    message,
  });
  return data;
};
