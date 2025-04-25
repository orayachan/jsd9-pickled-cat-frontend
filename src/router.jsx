import { Dashboard, Default } from '@/components/layouts';
import { Home, MyAccount } from '@/pages';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { LandingPage } from './pages/Products';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Default,
    children: [
      { index: true, Component: LandingPage },
      { path: '*', Component: Home },
    ],
  },
  {
    path: 'dashboard',
    Component: Dashboard,
    children: [
      { index: true, Component: MyAccount },
      { path: '*', Component: MyAccount },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
