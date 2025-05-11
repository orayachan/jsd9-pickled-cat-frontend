import api from "./api";

export const getAllProduct = async () => {
  const response = await api.get("/api/products");
  return response.data;
};
