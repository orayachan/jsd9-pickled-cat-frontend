import {
  AdminDashboard,
  Dashboard,
  Default,
  Error404,
  Minimal,
} from '@/components/layouts';
import { Checkout, Home, Login, MyAccount, Payment, Register } from '@/pages';
import { createBrowserRouter, RouterProvider } from 'react-router';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Default,
    children: [
      { index: true, Component: Home },
      { path: 'checkout', Component: Checkout },
      { path: 'payment', Component: Payment },
      { path: '*', Component: Error404 },
    ],
  },
  {
    path: '/',
    Component: Minimal,
    children: [
      { path: 'login', Component: Login },
      { path: 'register', Component: Register },
      { path: '404', Component: Error404 },
      { path: 'admin/dashboard', Component: AdminDashboard },
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
