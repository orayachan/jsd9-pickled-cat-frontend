import { Sidebar } from '@/components/customs';
import { Outlet } from 'react-router';

export function Dashboard() {
  return (
    <main className='grid grid-flow-col grid-cols-6'>
      <Sidebar />
      <Outlet />
    </main>
  );
}
