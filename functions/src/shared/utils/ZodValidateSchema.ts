// functions/src/shared/utils/ValidationUtil.ts
import { ZodSchema } from 'zod';

interface ValidationResult<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export class ZodSchemaValidator {
  public static execute<T>(schema: ZodSchema<T>, data: unknown): ValidationResult<T> {
    const result = schema.safeParse(data);

    if (result.success) {
      return { success: true, data: result.data };
    } else {
      return { success: false, error: result.error.issues[0].message };
    }
  }
}