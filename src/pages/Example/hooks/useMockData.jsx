import { useEffect, useState } from 'react';

/** @returns {Array<{id: number; description: string}>} data */
export function useMockData() {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      let response = await import('../../../lib/data.js');
      let data = response.data;
      console.log(data);
      setData(data);
    }

    fetchData();
  }, []);

  return data;
}
