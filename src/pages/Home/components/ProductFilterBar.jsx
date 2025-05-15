import { useState } from 'react';

export function ProductFilterBar({ onCategoryChange, onPriceChange }) {
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);

  const categories = [
    { label: 'อาหารแมวพรีเมียม', value: 'อาหารแมวพรีเมียม' },
    { label: 'ของเล่นแมว', value: 'ของเล่นแมว' },
    { label: 'ที่นอนแมว', value: 'Cat Beds & Condos' },
    { label: 'เสื้อผ้าแมว', value: 'Apparel & Accessories' },
    { label: 'ของสะสมและตกแต่ง', value: 'Collectibles & Home Decor' },
    { label: 'ของขวัญแมวดองเกลือ', value: 'Pickled Cat Gift & Special Items' },
  ];
  const priceOptions = ['ราคาน้อยไปมาก', 'ราคามากไปน้อย'];
  return (
    <div className='relative my-2 flex items-center justify-between text-sm lg:ml-4'>
      <div className='flex flex-wrap gap-2'>
        {/* หมวดหมู่ */}
        <div className='relative'>
          <button
            onClick={() => {
              setShowCategoryDropdown(!showCategoryDropdown);
              setShowPriceDropdown(false);
            }}
            className='mr-2 flex items-center gap-2 rounded-full bg-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-300'
          >
            หมวดหมู่
            <img
              className='inline-block h-4 w-4'
              src='/logos/drop.png'
              alt='dropdown'
            />
          </button>
          {showCategoryDropdown && (
            <ul className='absolute left-0 z-10 mt-2 w-40 rounded-md bg-white shadow-lg'>
              {categories.map(({ label, value }) => (
                <li
                  key={value}
                  onClick={() => {
                    onCategoryChange(value);
                    setShowCategoryDropdown(false);
                  }}
                  className='cursor-pointer px-4 py-2 hover:bg-gray-100'
                >
                  {label}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* ราคา */}
        <div className='relative'>
          <button
            onClick={() => {
              setShowPriceDropdown(!showPriceDropdown);
              setShowCategoryDropdown(false);
            }}
            className='mr-2 flex items-center gap-2 rounded-full bg-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-300'
          >
            ราคา
            <img
              className='inline-block h-4 w-4'
              src='/logos/drop.png'
              alt='dropdown'
            />
          </button>
          {showPriceDropdown && (
            <ul className='absolute left-0 z-10 mt-2 w-48 rounded-md bg-white shadow-lg'>
              {priceOptions.map((price) => (
                <li
                  key={price}
                  onClick={() => {
                    onPriceChange(price);
                    setShowPriceDropdown(false);
                  }}
                  className='cursor-pointer px-4 py-2 hover:bg-gray-100'
                >
                  {price}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className='hidden flex-wrap gap-4 lg:flex'>
          {['รีวิว', 'ขายดี', 'มาใหม่', 'ส่วนลด'].map((label) => (
            <button
              key={label}
              className='flex items-center gap-1 rounded-full bg-gray-200 px-4 py-1 text-sm font-medium hover:bg-gray-300'
            >
              {label}
              <img
                className='hidden h-4 w-4'
                src='/logos/drop.png'
                alt='dropdown icon'
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
