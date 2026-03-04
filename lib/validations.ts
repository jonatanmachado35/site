import { z } from "zod";

export const contactSchema = z.object({
  nome: z.string().min(2, "Nome obrigatório"),
  contato: z.string().min(5, "WhatsApp ou Email obrigatório"),
  processo: z.string().min(3, "Informe o processo a ser automatizado"),
  mensagem: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
