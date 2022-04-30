import axios from "axios";
import { StatusCodes } from "http-status-codes";

const BASE_URL = "http://localhost:3001/user-answers";

const client = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const create = async ({ questions }) => {
  const errorMessages = {
    [StatusCodes.BAD_REQUEST]: "Tienes alguna respuesta sin resolver.",
    default: "Error al enviar formulario, intentalo más tarde.",
  };

  try {
    const { data } = await client.post("/", {
      questions,
    });
    return data;
  } catch (error) {
    throw new Error(
      errorMessages[error?.response?.status] ?? errorMessages.default
    );
  }
};
