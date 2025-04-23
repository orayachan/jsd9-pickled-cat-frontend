import { z } from 'zod';

const errorMessage = {
  email: 'ที่อยู่อีเมล์ไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง',
  password: {
    string: 'รหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง',
    min: 'รหัสผ่านต้องอย่างน้อย 8 ตัวอักษร',
    max: 'รหัสผ่านต้องไม่เกิน 24 ตัวอักษร',
  },
};

const loginFormSchema = z.object({
  email: z
    .string({
      message: errorMessage.email,
    })
    .email({ message: errorMessage.email }),
  password: z
    .string({
      message: errorMessage.password.string,
    })
    .min(8, errorMessage.password.min)
    .max(24, errorMessage.password.max),
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
