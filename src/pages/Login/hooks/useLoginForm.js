import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { postFormData, validateFormData } from '../utils';

export function useLoginForm() {
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

    const { validatedData, errors, success } = validateFormData(data, 'login');
    if (!success) {
      const emailError =
        errors.format().email ? errors.format().email._errors[0] : null;
      const passwordError =
        errors.format().password ? errors.format().password._errors[0] : null;
      setErrors((prev) => ({
        ...prev,
        type: 'validation',
        errors: { email: emailError, password: passwordError },
      }));
      setLoading(false);
      return;
    }

    if (import.meta.VITE_DEV_MODE ?? true) {
      console.log(data);
    } else {
      try {
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
