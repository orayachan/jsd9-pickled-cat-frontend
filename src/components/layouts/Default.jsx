import { Footer, Header } from '@/components/customs';
import { Outlet } from 'react-router';

export function Default() {
  return (
    <>
      <Header />
      <main className='grid min-h-[calc(100dvh_-_8rem)] min-w-xl place-content-center-safe gap-4'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
