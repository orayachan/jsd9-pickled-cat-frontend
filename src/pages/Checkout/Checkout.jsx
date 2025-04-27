import { Link } from 'react-router';
import { BcrumbCheckout } from './Components/BcrumbCheckout';
import { Cart } from './Components/Cart';
import { OrderSummary } from './Components/OrderSummary';
import { ShippingPrice } from './Components/ShippingPrice';

export function Checkout() {
  return (
    <div className='bg-secondary-50 min-w-dvw px-8 pt-4 pb-16'>
      <main className='mx-auto flex max-w-screen-2xl flex-col justify-center'>
        {/* Breadcrumb */}
        <BcrumbCheckout />
        <section className='flex flex-col items-start justify-center gap-4 md:flex-row'>
          {/* Cart */}
          <Cart />
          <aside className='flex flex-col items-center justify-center'>
            {/* Order summary */}
            <OrderSummary />
            <p className='text-primary-700 py-4'>
              <Link to='/Login' className='hover:text-primary-500 font-semibold'>
                เข้าสู่ระบบ
              </Link>
              <span> หรือ </span>
              <Link
                to='/Registration'
                className='hover:text-primary-500 font-semibold'
              >
                สมัครสมาชิก
              </Link>
            </p>
            {/* Shipping Price */}
            <ShippingPrice />
          </aside>
        </section>
      </main>
    </div>
  );
}
