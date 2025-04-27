import { postFormData, validateFormData } from '@/utils';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

/** @param {'login' | 'register'} validationType */
export function useForm(validationType) {
  const navigate = useNavigate();

  const [data, setData] = useState({});
  const [errors, setErrors] = useState({
    type: null,
    errors: {},
  });
  const [loading, setLoading] = useState(false);

  const controller = new AbortController();

  /** @param {SubmitEvent} e */
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setErrors({ type: null, errors: {} });

    // TODO: Optional: make it loop and auto append error fields in object

    if (validationType === 'login') {
      const { validatedData, errors, success } = validateFormData(
        data,
        'login',
      );
      if (!success) {
        const email =
          errors.format().email ? errors.format().email._errors[0] : null;
        const password =
          errors.format().password ? errors.format().password._errors[0] : null;

        setErrors((prev) => ({
          ...prev,
          type: 'validation',
          errors: { email: email, password: password },
        }));

        setLoading(false);
        return;
      }
    } else if (validationType === 'register') {
      const { validatedData, errors, success } = validateFormData(
        data,
        'register',
      );
      if (!success) {
        const email =
          errors.format().email ? errors.format().email._errors[0] : null;
        const firstname =
          errors.format().firstname ?
            errors.format().firstname._errors[0]
          : null;
        const lastname =
          errors.format().lastname ? errors.format().lastname._errors[0] : null;
        const password =
          errors.format().password ? errors.format().password._errors[0] : null;
        const confirmPassword =
          errors.format().confirmPassword ?
            errors.format().confirmPassword._errors[0]
          : null;

        setErrors((prev) => ({
          ...prev,
          type: 'validation',
          errors: {
            email,
            firstname,
            lastname,
            password,
            confirmPassword,
          },
        }));

        setLoading(false);
        return;
      }
    }

    if (import.meta.VITE_DEV_MODE ?? true) {
      console.log(data, errors);
    } else {
      try {
        // TODO: check `postFormData()` supposed to be done before `navigate()`
        await postFormData(signal, validatedData);
        navigate('/dashboard');
      } catch (error) {
        setErrors((prev) => ({
          ...prev,
          type: 'fetching',
          errors: { fetch: error },
        }));
      }
    }

    setLoading(false);
  }

  useEffect(() => {
    return () => {
      setErrors({ type: null, errors: [] });
      controller.abort();
    };
  }, []);

  return {
    errors,
    handleSubmit,
    loading,
    setData,
    setErrors,
  };
}
