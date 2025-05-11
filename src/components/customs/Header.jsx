import { useState } from 'react';
import {
  HiOutlineMenu,
  HiOutlineShoppingCart,
  HiOutlineUserCircle,
} from 'react-icons/hi';
import { HiOutlineMegaphone } from 'react-icons/hi2';
import { Link } from 'react-router';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <header className='content-center-safe border-b bg-white px-8 py-4 text-center'>
      <nav className='mx-auto flex items-center justify-between gap-4 lg:max-w-screen-2xl'>
        {/* Part - start */}
        <h1 className='flex items-start text-xl font-bold italic lg:text-2xl'>
          <Link to='/' className='hover:text-primary-700'>
            PICKLED-CAT
          </Link>
        </h1>
        {/* Part - middle */}
        <ul className='hidden items-center justify-center gap-4 font-medium lg:flex'>
          <li>
            <Link to='/' className='hover:text-primary-600'>
              หน้าแรก
            </Link>
          </li>
          <li>
            <a href='#products' className='hover:text-primary-600'>
              สินค้าของเรา
            </a>
          </li>
          <li className='hidden'>
            <a href='#highlight' className='hover:text-primary-600'>
              สินค้าขายดี
            </a>
          </li>
          <li>
            <a href='#faqs' className='hover:text-primary-600'>
              คำถามที่พบบ่อย
            </a>
          </li>
          <li>
            <a href='#contact' className='hover:text-primary-600'>
              ติดต่อเรา
            </a>
          </li>
        </ul>
        {/* Part - end */}
        <div className='flex items-center justify-end gap-4'>
          <Link
            to='/Checkout'
            className='hover:text-primary-600 flex items-center justify-center rounded-full lg:h-[50px] lg:w-[50px] lg:bg-[#f5f1ee] lg:text-[#875541]'
          >
            <HiOutlineShoppingCart />
          </Link>
          <Link
            to='/404'
            className='hover:text-primary-600 flex items-center justify-center rounded-full lg:h-[50px] lg:w-[50px] lg:bg-[#eeeff8]'
          >
            <HiOutlineMegaphone />
          </Link>

          {/* Menu */}
          {/* Only show menu when logged in */}
          {isLoggedIn && (
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
                    <Link to='/Dashboard'>ข้อมูลของฉัน</Link>
                  </li>
                  <li className='hover:text-primary-600 mr-4 text-end'>
                    <Link to='/Dashboard'>คำสั่งซื้อ</Link>
                  </li>
                  <li className='hover:text-primary-600 mr-4 text-end'>
                    <Link to='/Dashboard'>รายการยกเลิก</Link>
                  </li>
                  <li className='hover:text-primary-600 mr-4 text-end'>
                    <Link to='/Dashboard'>รีวิวสินค้า</Link>
                  </li>
                  <li className='hover:text-primary-600 mr-4 text-end'>
                    <Link to='/' onClick={() => setIsLoggedIn(false)}>ออกจากระบบ</Link>
                  </li>
                </ul>
              )}
            </div>
          )}

          <button className='hover:text-primary-600 hidden items-center justify-center rounded-full lg:h-[50px] lg:w-[50px] lg:bg-yellow-100'>
            <HiOutlineUserCircle />
          </button>

          <p className='hidden flex-col items-start justify-center lg:flex'>
            <span className='font-semibold'>สวัสดี</span>
            <Link to='/Login' className='hover:text-primary-600'>
              เข้าสู่ระบบ
            </Link>
          </p>
        </div>
      </nav>
    </header>
  );
}
