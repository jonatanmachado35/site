export interface ContactFormPayload {
  nome: string;
  email: string;
  whatsapp: string;
  tipoProjeto: string;
  mensagem?: string;
}

export interface ApiResponse<T = unknown> {
  data: T;
  message?: string;
  success: boolean;
}
