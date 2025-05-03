import {
  AdminDashboard,
  Dashboard,
  Default,
  Error404,
  Minimal,
} from '@/components/layouts';
import { Checkout, Home, Login, Payment, Register } from '@/pages';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { ProductDetail } from './pages/Product';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Default,
    children: [
      { index: true, Component: Home },
      { path: 'product/:id', Component: ProductDetail },
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
      { path: '*', Component: Error404 },
      { path: 'dashboard', Component: Dashboard },
    ],
  },
  // {
  //   path: 'dashboard',
  //   Component: Dashboard,
  //   children: [
  //     { index: true, Component: MyAccount },
  //     // TODO: Modify to redirect to `/dashboard`, not just show something else.
  //     { path: '*', Component: MyAccount },
  //   ],
  // },
  {
    path: 'admin/dashboard',
    Component: AdminDashboard,
  },
  // TODO: Make other non-existed paths redirect to this.
  {
    path: '404',
    Component: Minimal,
    children: [{ index: true, Component: Error404 }],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
