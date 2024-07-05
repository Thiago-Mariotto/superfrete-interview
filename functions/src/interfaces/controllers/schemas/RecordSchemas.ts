import z from 'zod';

export const CreateRecordSchema = z.object({
  name: z.string({
    required_error: 'O campo "nome" é obrigatório',
    invalid_type_error: 'O campo "nome" deve ser uma string',
  })
    .min(2, 'O campo "nome" deve ter no mínimo 2 caracteres')
    .max(50, 'O campo "nome" deve ter no máximo 50 caracteres')
})
  .strict();