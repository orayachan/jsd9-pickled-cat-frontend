import { data } from '../../lib/data';
import { ProductCard } from './ProductCard';

export const LandingPage = () => {
  return (
    <section className='mx-4 my-6 flex justify-center sm:mx-8 md:mx-16 lg:mx-20'>
      <section className='w-full max-w-screen-2xl'>
        <h2 className='text-center text-[28px] font-bold text-[#3A4980] italic sm:text-[32px]'>
          PICKLED-CAT's Products
        </h2>

        {/* menu-bar */}
        <div className='my-8 hidden items-center justify-between text-sm md:flex'>
          {/* sort-option */}
          <div className='flex flex-wrap gap-2'>
            {[
              'หมวดหมู่',
              'ราคา',
              'รีวิว',
              'ขายดี',
              'มาใหม่',
              'ส่วนลด',
            ].map((label) => (
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
            ))}
          </div>

          {/* filter-option */}
          <div>
            <button className='flex items-center gap-1 rounded-full bg-gray-200 px-4 py-1 text-sm font-medium hover:bg-gray-300'>
              Product Filters
              <img
                className='inline-block h-4 w-4'
                src='../../../public/logos/drop.png'
                alt='dropdown icon'
              />
            </button>
          </div>
        </div>

        {/* product list */}
        <div className='mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </section>
  );
};
