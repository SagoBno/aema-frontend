import axios from 'axios';

const BASE_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/results`;

const client = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// eslint-disable-next-line import/prefer-default-export
export const getResults = async (date) => {
  const errorMessages = {
    default: 'Error obtener los resultados, intentalo más tarde.',
  };

  try {
    const { data } = await client.get(`/me?date=${date}`);
    return data;
  } catch (error) {
    throw new Error(
      errorMessages[error?.response?.status] ?? errorMessages.default,
    );
  }
};
