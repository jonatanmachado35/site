import { z } from "zod";

export const contactSchema = z.object({
  nome: z.string().min(2, "Nome obrigatório"),
  email: z.string().email("Email inválido"),
  whatsapp: z.string().min(10, "WhatsApp obrigatório"),
  processo: z.string().min(3, "Informe o processo a ser automatizado"),
  mensagem: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
