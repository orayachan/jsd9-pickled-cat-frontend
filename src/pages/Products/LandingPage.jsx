import { data } from '@/lib/data';
import { ProductCard, SearchProduct } from './components';
import { useState } from 'react';

export const LandingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = data.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return (
    <section className='mx-4 my-6 flex justify-center sm:mx-8 md:mx-16 lg:mx-20'>
      <section className='w-full max-w-screen-2xl'>
        <h2 className='text-[28px] font-bold text-[#3A4980] sm:text-[32px]'>
          สินค้าของเรา
        </h2>

        {/* menu-bar */}
        <div className='my-8 hidden items-center justify-between text-sm md:flex'>
          {/* sort-option */}
          <div className='flex flex-wrap gap-2'>
            {['หมวดหมู่', 'ราคา', 'รีวิว', 'ขายดี', 'มาใหม่', 'ส่วนลด'].map(
              (label) => (
                <button
                  key={label}
                  className='flex items-center gap-1 rounded-full bg-gray-200 px-4 py-1 text-sm font-medium hover:bg-gray-300'
                >
                  {label}
                  <img
                    className='inline-block h-4 w-4'
                    src='/logos/drop.png'
                    alt='dropdown icon'
                  />
                </button>
              ),
            )}
          </div>

          {/* search bar */}
          <SearchProduct searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </div>

        {/* product list */}
        <div className='mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </section>
  );
};
