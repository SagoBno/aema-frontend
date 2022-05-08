import axios from 'axios';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';

const BASE_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth`;

const client = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const signup = async ({
  parentFirstName, parentLastName, parentBirthday, email, password,
  childFirstName, childLastName, genre, childBirthday,
}) => {
  const errorMessages = {
    [StatusCodes.BAD_REQUEST]: 'Tienes errores en algun campo, intenta de nuevo',
    default: 'Error al crear cuenta, intentalo más tarde.',
  };

  try {
    const { data } = await client.post('/signup', {
      parentFirstName,
      parentLastName,
      parentBirthday,
      email,
      password,
      childFirstName,
      childLastName,
      genre,
      childBirthday,
    });
    return data;
  } catch (error) {
    throw new Error(
      errorMessages[error?.response?.status] ?? errorMessages.default,
    );
  }
};

export const login = async ({ email, password }) => {
  const errorMessages = {
    [StatusCodes.BAD_REQUEST]: 'Correo electrónico o contraseña incorrecta',
    default: 'Error al iniciar sesión, intentalo más tarde.',
  };

  try {
    const { data } = await client.post('/login/password', {
      email,
      password,
    });
    return data;
  } catch (error) {
    throw new Error(
      errorMessages[error?.response?.status] ?? errorMessages.default,
    );
  }
};

// eslint-disable-next-line consistent-return
export const getLoginStatus = async () => {
  try {
    const { data } = await client.get('/login');
    return data.data;
  } catch (error) {
    if (error?.response?.status === StatusCodes.UNAUTHORIZED) {
      throw new Error(ReasonPhrases.UNAUTHORIZED);
    }
  }
};

export const logout = () => client.post('/logout');
