import {
  AdminDashboard,
  Dashboard,
  Default,
  Minimal,
} from '@/components/layouts';
import { Home, Login, MyAccount, Register } from '@/pages';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { Error404 } from './components/layouts/Error404';
import { Checkout } from './pages/Checkout';
import { Payment } from './pages/Payment';
import { LandingPage } from './pages/Products';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Default,
    children: [
      { index: true, Component: LandingPage },
      { path: '*', Component: Home },
      { path: 'checkout', Component: Checkout },
      { path: 'payment', Component: Payment },
    ],
  },
  {
    path: '/',
    Component: Minimal,
    children: [
      { path: 'login', Component: Login },
      { path: 'register', Component: Register },
      { path: '404', Component: Error404 },
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
  {
    path: 'admin/dashboard',
    Component: AdminDashboard,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
