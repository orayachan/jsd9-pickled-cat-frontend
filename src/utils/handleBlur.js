/**
 * @param {React.Dispatch<React.SetStateAction<{}>>} setData
 * @param {string} value
 * @param {'email' | 'firstname' | 'lastname' | 'password' | 'confirm-password'} field
 */
export function handleBlur(setData, value, field) {
  setData((prev) => {
    switch (field) {
      case 'email':
        return { ...prev, email: value };
      case 'firstname':
        return { ...prev, firstname: value };
      case 'lastname':
        return { ...prev, lastname: value };
      case 'password':
        return { ...prev, password: value };
      case 'confirm-password':
        return { ...prev, confirmPassword: value };
    }
  });
}
