export interface ContactFormPayload {
  nome: string;
  contato: string;
  processo: string;
  mensagem?: string;
}

export interface ApiResponse<T = unknown> {
  data: T;
  message?: string;
  success: boolean;
}
