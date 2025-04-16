import { Footer, Header } from '@/components/customs';
import { Outlet } from 'react-router';

export function Minimal() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer variation='minimal' />
    </>
  );
}
