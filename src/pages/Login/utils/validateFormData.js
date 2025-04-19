import { z } from 'zod';

const errorMessage = {
  email: 'ที่อยู่อีเมล์ไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง',
  password: 'รหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง',
};

const loginFormSchema = z.object({
  email: z
    .string({
      message: errorMessage.email,
    })
    .email({ message: errorMessage.email }),
  password: z
    .string({
      message: errorMessage.password,
    })
    .min(8, errorMessage.password)
    .max(24, errorMessage.password),
});

/**
 * @param {{ [k: string]: string }} rawData
 * @param {'login' | 'register'} schema
 * @returns {{ data: { [k: string]: string};
 * errors: z.ZodError<{ email?: string; password?: string }>,;
 * success: boolean }}
 */
export function validateFormData(rawData, schema) {
  switch (schema) {
    case 'login':
      const { data, error, success } = loginFormSchema.safeParse(rawData);
      return {
        validatedData: data,
        errors: error,
        success,
      };
    case 'register':
      return;
  }
}
