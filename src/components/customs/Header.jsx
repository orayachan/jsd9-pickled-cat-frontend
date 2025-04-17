import { useState } from 'react';
import {
  HiOutlineMenu,
  HiOutlineShoppingCart,
  HiOutlineUserCircle,
} from 'react-icons/hi';
import { HiOutlineMegaphone } from 'react-icons/hi2';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className='content-center-safe border-b bg-white px-8 py-4 text-center'>
      <nav className='mx-auto flex items-center justify-between gap-4 lg:max-w-screen-2xl'>
        {/* Part - start */}
        <h1 className='flex items-start text-xl font-bold italic lg:text-2xl'>
          <a href='#' className='hover:text-primary-700'>
            PICKLED-CAT
          </a>
        </h1>
        {/* Part - middle */}
        <ul className='hidden items-center justify-center gap-4 font-medium lg:flex'>
          <li>
            <a href='#' className='hover:text-primary-600'>
              หน้าแรก
            </a>
          </li>
          <li>
            <a href='#products' className='hover:text-primary-600'>
              ผลิตภัณฑ์
            </a>
          </li>
          <li>
            <a href='#highlight' className='hover:text-primary-600'>
              สินค้าขายดี
            </a>
          </li>
          <li>
            <a href='#contact' className='hover:text-primary-600'>
              ติดต่อเรา
            </a>
          </li>
          <li>
            <a href='#faqs' className='hover:text-primary-600'>
              คำถามที่พบบ่อย
            </a>
          </li>
        </ul>
        {/* Part - end */}
        <div className='flex items-center justify-end gap-4'>
          <button className='hover:text-primary-600 flex items-center justify-center rounded-full lg:h-[50px] lg:w-[50px] lg:bg-[#f5f1ee] lg:text-[#875541]'>
            <HiOutlineShoppingCart />
          </button>
          <button className='hover:text-primary-600 flex items-center justify-center rounded-full lg:h-[50px] lg:w-[50px] lg:bg-[#eeeff8]'>
            <HiOutlineMegaphone />
          </button>
          {/* Menu */}
          <div className='relative'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='hover:text-primary-600 flex items-center justify-center rounded-full lg:h-[50px] lg:w-[50px] lg:bg-[#eeeff8]'
            >
              <HiOutlineMenu />
            </button>
            {isMenuOpen && (
              <ul className='absolute right-0 z-50 mt-4 w-36 rounded-lg border bg-white shadow-md'>
                <li className='hover:text-primary-600 mr-4 text-end'>
                  <a href='#'>ข้อมูลของฉัน</a>
                </li>
                <li className='hover:text-primary-600 mr-4 text-end'>
                  <a href='#'>คำสั่งซื้อ</a>
                </li>
                <li className='hover:text-primary-600 mr-4 text-end'>
                  <a href='#'>รายการยกเลิก</a>
                </li>
                <li className='hover:text-primary-600 mr-4 text-end'>
                  <a href='#'>รีวิวสินค้า</a>
                </li>
                <li className='hover:text-primary-600 mr-4 text-end'>
                  <a href='#'>ออกจากระบบ</a>
                </li>
              </ul>
            )}
          </div>
          <button className='hover:text-primary-600 hidden items-center justify-center rounded-full lg:h-[50px] lg:w-[50px] lg:bg-yellow-100'>
            <HiOutlineUserCircle />
          </button>
          <p className='hidden flex-col items-start justify-center lg:flex'>
            <span className='font-semibold'>สวัสดี</span>
            <a href='#' className='hover:text-primary-600'>
              เข้าสู่ระบบ
            </a>
          </p>
        </div>
      </nav>
    </header>
  );
}
