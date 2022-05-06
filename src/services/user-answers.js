import axios from 'axios';
import { StatusCodes } from 'http-status-codes';

const BASE_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/user-answers`;

const client = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const create = async ({ answers }) => {
  const errorMessages = {
    [StatusCodes.BAD_REQUEST]: 'Tienes alguna respuesta sin resolver.',
    default: 'Error al enviar inventario, intentalo más tarde.',
  };

  try {
    const { data } = await client.post('/', {
      answers,
    });
    return data;
  } catch (error) {
    throw new Error(
      errorMessages[error?.response?.status] ?? errorMessages.default,
    );
  }
};

export const getUserAnswers = async () => {
  const errorMessages = {
    default: 'Error obtener las respuestas, intentalo más tarde.',
  };

  try {
    const { data } = await client.get('/me');
    return data;
  } catch (error) {
    throw new Error(
      errorMessages[error?.response?.status] ?? errorMessages.default,
    );
  }
};
