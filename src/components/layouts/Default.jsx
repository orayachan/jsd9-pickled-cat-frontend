import { Footer, Header } from '@/components/customs';
import { Outlet } from 'react-router';

export function Default() {
  return (
    <>
      <Header />
      <main className='mx-auto my-6 max-w-screen-2xl'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
