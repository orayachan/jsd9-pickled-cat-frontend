import api from "./api";

export const getAllProduct = async () => {
  const response = await api.get("/api/products");
  return response.data;
};

export const getProductById = async (productId) => {
  const response = await api.get(`/api/product/${productId}`);
  return response.data;
};
