import { Footer, Header } from '@/components/customs';
import { Outlet } from 'react-router';

export function Default() {
  return (
    <>
      <Header />
      <main className='grid min-h-[calc(100dvh_-_8rem)] min-w-xl place-content-center-safe gap-4'>
        <p className='text-center'>
          This is <code>App.jsx</code> main layout.
        </p>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
