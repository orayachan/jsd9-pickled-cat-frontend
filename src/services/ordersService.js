import api from "./api";

export const createOrder = async (orderData) => {
  const response = await api.post("/api/orders/",orderData);
  return response.data;
};
