import { Link } from 'react-router';
import { BcrumbCheckout } from './Components/BcrumbCheckout';
import { Cart } from './Components/Cart';
import { OrderSummary } from './Components/OrderSummary';
import { ShippingPrice } from './Components/ShippingPrice';

export function Checkout() {
  return (
    <div className='bg-secondary-50 min-w-dvw px-8 pb-16'>
      <main className='mx-auto max-w-screen-2xl flex flex-col justify-center'>
        {/* Breadcrumb */}
        <BcrumbCheckout />
        <section className='flex flex-col gap-y-8 md:flex-row mt-4'>
          {/* Cart */}
          <div className='w-full md:w-2/3'>
            <Cart />
          </div>
          {/* Sidebar */}
          <aside className='w-full md:w-1/3 flex flex-col items-center justify-start gap-4 lg:pl-4'>
            {/* Order summary */}
            <OrderSummary />
            <p className='text-primary-700 py-2 text-sm sm:text-base text-center'>
              <Link
                to='/Login'
                className='hover:text-primary-500 font-semibold'
              >
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
