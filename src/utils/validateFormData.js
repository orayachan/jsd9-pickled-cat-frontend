import { z } from 'zod';

const constraint = {
  name: {
    min: 2,
    max: 50,
  },
  password: {
    min: 8,
    max: 32,
    regex: /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/,
  },
};

const errorMessage = {
  email: {
    string: {
      login: 'กรุณากรอกอีเมลของคุณ',
      register: 'กรุณากรอกอีเมลของคุณ',
    },
    email: 'รูปแบบอีเมลไม่ถูกต้อง',
  },
  firstname: {
    string: 'กรุณากรอกชื่อจริงของคุณ',
    min: 'ชื่อควรมีความยาวไม่ต่ำกว่า 2 ตัวอักษร',
    max: 'ชื่อควรมีความยาวไม่เกิน 50 ตัวอักษร',
  },
  lastname: {
    string: 'กรุณากรอกนามสกุลของคุณ',
    min: 'นามสกุลควรมีความยาวไม่ต่ำกว่า 2 ตัวอักษร',
    max: 'นามสกุลควรมีความยาวไม่เกิน 50 ตัวอักษร',
  },
  password: {
    string: {
      login: 'รหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง',
      register: 'รูปแบบรหัสผ่านไม่ถูกต้อง',
    },
    min: 'รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร',
    max: 'รหัสผ่านต้องมีไม่เกิน 32 ตัวอักษร',
    regex:
      'รหัสต้องมีทั้ง ตัวอักษรพิมพ์ใหญ่ ตัวเลข และอักขระพิเศษอย่างน้อย 1 ตัว',
  },
  confirm: 'รหัสผ่านยืนยันไม่ตรงกัน กรุณาตรวจสอบอีกครั้ง',
};

const loginFormSchema = z.object({
  email: z
    .string({
      message: errorMessage.email.login,
    })
    .email({ message: errorMessage.email.email }),
  password: z
    .string({
      message: errorMessage.password.string.login,
    })
    .min(constraint.password.min, errorMessage.password.min)
    .max(constraint.password.max, errorMessage.password.max),
});

const registerFormSchema = z
  .object({
    email: z
      .string({
        message: errorMessage.email.string.register,
      })
      .email({ message: errorMessage.email.email }),

    firstname: z
      .string({ message: errorMessage.firstname.string })
      .min(constraint.name.min, errorMessage.firstname.min)
      .max(constraint.name.max, errorMessage.firstname.max),

    lastname: z
      .string({ message: errorMessage.lastname.string })
      .min(constraint.name.min, errorMessage.lastname.min)
      .max(constraint.name.max, errorMessage.lastname.max),

    password: z
      .string({
        message: errorMessage.password.string.register,
      })
      .min(constraint.password.min, errorMessage.password.min)
      .max(constraint.password.max, errorMessage.password.max)
      .regex(constraint.password.regex, {
        message: errorMessage.password.regex,
      }),

    confirmPassword: z.any(),
  })
  .required()
  .refine((data) => data.password === data.confirmPassword, {
    message: errorMessage.confirm,
    path: ['confirmPassword'],
  });

/**
 * @param {{ [k: string]: string }} rawData
 * @param {'login' | 'register'} schema
 * @returns {{ data: { [k: string]: string};
 * errors: z.ZodError<{ email?: string; password?: string }>,;
 * success: boolean }}
 */
export function validateFormData(rawData, schema) {
  if (schema === 'login') {
    const { data, error, success } = loginFormSchema.safeParse(rawData);
    return {
      validatedData: data,
      errors: error,
      success,
    };
  } else if (schema === 'register') {
    const { data, error, success } = registerFormSchema.safeParse(rawData);
    return {
      validatedData: data,
      errors: error,
      success,
    };
  }
}
