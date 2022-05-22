import axios from 'axios';

const BASE_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/psychologist`;

const client = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// eslint-disable-next-line import/prefer-default-export
export const getPsychologists = async () => {
  const errorMessages = {
    default: 'Error obtener los psicólogos, intentalo más tarde.',
  };

  try {
    const { data } = await client.get('/');
    return data;
  } catch (error) {
    throw new Error(
      errorMessages[error?.response?.status] ?? errorMessages.default,
    );
  }
};
