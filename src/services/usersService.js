import api from './api';

/**
 * @param {any} data
 * @param {AbortSignal} signal
 */
export const loginService = async (data, signal) => {
  const response = await api.post('/api/users/login', data, { signal });
  if (response.status !== 200) throw new Error(response.data.message);
  return response.data;
};

/**
 * @param {any} data
 * @param {AbortSignal} signal
 */
export const registerService = async (data, signal) => {
  const response = await api.post('/api/users/register', data, { signal });
  if (response.status !== 201) throw new Error(response.data.message);
  return response.data;
};
