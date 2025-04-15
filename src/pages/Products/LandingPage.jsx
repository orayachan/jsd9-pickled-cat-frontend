import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { data } from '../../lib/data';
import { ProductCard } from './ProductCard';

export const LandingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = data.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return (
    <section className='mx-4 my-6 flex justify-center sm:mx-8 md:mx-16 lg:mx-20'>
      <section className='w-full max-w-screen-2xl'>
        <h2 className='text-[28px] font-bold text-[#3A4980] italic sm:text-[32px]'>
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
                    src='../../../public/logos/drop.png'
                    alt='dropdown icon'
                  />
                </button>
              ),
            )}
          </div>

          {/* search bar */}
          <div className='relative w-full max-w-sm'>
            <input
              type='text'
              placeholder='ค้นหาผลิตภัณฑ์...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='w-full rounded-full border border-gray-300 bg-white py-2 pr-10 pl-4 text-sm shadow-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none'
            />
            <CiSearch
              className='absolute top-1/2 right-3 -translate-y-1/2 text-gray-400'
              size={20}
            />
          </div>
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
