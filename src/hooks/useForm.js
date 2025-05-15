import { loginService, registerService } from '@/services/usersService';
import { validateFormData } from '@/utils';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

/** @param {'login' | 'register'} validationType */
export function useForm(validationType) {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({
    type: null,
    errors: {},
    emailConflict: false,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(true);
  const controller = new AbortController();

  /** @param {SubmitEvent} e */
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setErrors({ type: null, errors: {}, emailConflict: false });

    const { validatedData, errors, success } = validateFormData(
      data,
      validationType,
    );
    if (!success) {
      setErrors((prev) => ({
        ...prev,
        type: 'validation',
        errors: {
          email: errors.format().email?._errors[0],
          password: errors.format().password?._errors[0],
          firstname: errors.format().firstname?._errors[0],
          lastname: errors.format().lastname?._errors[0],
          confirmPassword: errors.format().confirmPassword?._errors[0],
        },
      }));

      setData((prev) => ({ ...prev, validatedData }));
      setLoading(false);
      return;
    }

    try {
      if (validationType === 'login') {
        await loginService(validatedData, controller.signal);
      } else if (validationType === 'register') {
        await registerService(validatedData, controller.signal);
      }
      setSuccess(true);
      setTimeout(
        () =>
          navigate(validationType === 'login' ? '/dashboard' : '/login', {
            viewTransition: true,
          }),
        1000,
      );
    } catch (error) {
      let emailConflict = error.response.status === 409;
      setErrors((prev) => ({
        ...prev,
        type: 'fetching',
        errors: {
          fetch:
            emailConflict ? 'อีเมลนี้ถูกใช้แล้ว' : (
              error.response.data['message']
            ),
        },
        emailConflict,
      }));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    return () => {
      setData({});
      setErrors({ type: null, errors: {}, emailConflict: false });
      controller.abort();
      setSuccess(false);
    };
  }, []);

  return {
    errors,
    handleSubmit,
    loading,
    setData,
    setErrors,
    success,
  };
}
