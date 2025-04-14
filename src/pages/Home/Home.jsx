import { useEffect, useState } from 'react';
import { Card } from './components';
import style from './home.module.css';
import { useMockData } from './hooks';
import { LandingPage } from '../Products/LandingPage';

export function Home() {
  const data = useMockData();
  const [loading, setLoading] = useState(false);

  // NOTE: Example only!

  const [data1, setData1] = useState({});
  const [data2, setData2] = useState({});

  useEffect(() => {
    if (!data) setLoading(true);
    else {
      setData1(data[0]);
      setData2(data[1]);
    }
    return () => setLoading(false);
  }, [data, loading]);

  return (
    <section className={`${style['section']} gap-4 p-2 outline`}>
      <p className='text-center'>
        This is <code>Home.jsx</code> page.
      </p>
      {
        //Pass props as an object, or pass prop for each field explicitly.
      }
      {!loading && (
        <>
          {/*  WARN: Prop names must be the same as object prop names */}
          <Card {...data1} />{' '}
          <Card id={data2.id} description={data2.description} />
        </>
      )}
    </section>
  );
}
