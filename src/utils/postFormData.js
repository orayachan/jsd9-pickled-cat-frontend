/**
 * @param {object} validatedData
 * @param {AbortSignal} signal
 * @throws Will throw an error if response status is not 200.
 *
 * TODO: Modify function to accept URL either for **\/login** or **\/register**
 */

export async function postFormData(signal, validatedData) {
  // TODO: ใส่ Path ให้ถูกด้วยครับ ท่านผู้เจริญ
  const response = await axios.post(
    import.meta.VITE_API_BASE_URL,
    validatedData,
    {
      signal,
    },
  );

  // TODO: change `response.statusText` to error message if exists.
  if (response.status !== 200) throw new Error(response.statusText);
}
