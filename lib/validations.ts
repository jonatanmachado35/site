import { z } from "zod";

export const contactSchema = z.object({
  nome: z.string().min(2, "Nome obrigatório"),
  email: z.string().email("Email inválido"),
  whatsapp: z.string().min(10, "WhatsApp obrigatório"),
  tipoProjeto: z.string().min(1, "Selecione o tipo de projeto"),
  mensagem: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
