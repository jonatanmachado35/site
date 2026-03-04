import axios from "axios";
import type { ContactFormPayload, ApiResponse } from "./types";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Erro ao processar sua solicitação";
    return Promise.reject(new Error(message));
  }
);

export async function sendContactForm(
  data: ContactFormPayload
): Promise<ApiResponse> {
  const response = await api.post<ApiResponse>("/atendimento", data);
  return response.data;
}

export default api;
