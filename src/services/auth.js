import useSWR from "swr";
import axios from "axios";
import { StatusCodes, ReasonPhrases } from "http-status-codes";

const BASE_URL = "http://localhost:3001/auth";

const client = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
});

export const login = async ({ email, password }) => {
  const errorMessages = {
    [StatusCodes.BAD_REQUEST]: "Correo electrónico o contraseña incorrecta",
    default: "Error al iniciar sesión, intentalo más tarde.",
  };

  try {
    const { data } = await client.post("/login/password", {
      email,
      password,
    });
    return data;
  } catch (error) {
    throw new Error(
      errorMessages[error?.response?.status] ?? errorMessages.default
    );
  }
};

export const getLoginStatus = () =>
  useSWR("/auth/login", async () => {
    try {
      const { data } = await client.get("/login");
      return data.data;
    } catch (error) {
      if (error?.response?.status === StatusCodes.UNAUTHORIZED) {
        throw new Error(ReasonPhrases.UNAUTHORIZED);
      }
      console.error(error);
    }
  });
