/**
 * @param {React.Dispatch<React.SetStateAction<{}>>} setData
 * @param {string} value
 * @param {'email' | 'password'} field
 */
export function handleBlur(setData, value, field) {
  setData((prev) => {
    switch (field) {
      case 'email':
        return { ...prev, email: value };
      case 'password':
        return { ...prev, password: value };
    }
  });
}
