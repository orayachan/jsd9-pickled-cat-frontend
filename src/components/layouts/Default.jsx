import { Footer, Header } from '@/components/customs';
import { Outlet } from 'react-router';

export function Default() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
