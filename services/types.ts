export interface ContactFormPayload {
  nome: string;
  email: string;
  whatsapp: string;
  processo: string;
  mensagem?: string;
}

export interface ApiResponse<T = unknown> {
  data: T;
  message?: string;
  success: boolean;
}
