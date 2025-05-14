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
  return (
    <header className='content-center-safe border-b bg-white px-8 py-4 text-center'>
      <nav className='mx-auto flex items-center justify-between gap-4 lg:max-w-screen-2xl'>
        {/* Part - start */}
        <h1 className='flex items-start text-xl font-bold italic lg:text-3xl'>
          <Link to='/' className='hover:text-primary-600'>
            PICKLED-CAT
          </Link>
        </h1>
        {/* Part - middle */}
        <ul className='bg-primary-50 hidden items-center justify-center rounded-full px-8 py-4 font-medium xl:flex'>
          <li>
            <Link to='/' className='hover:text-primary-600 mx-6'>
              หน้าแรก
            </Link>
          </li>
          <li>
            <a href='#products' className='hover:text-primary-600 mx-6'>
              สินค้าของเรา
            </a>
          </li>
          <li className='hidden'>
            <a href='#highlight' className='hover:text-primary-600 mx-6'>
              สินค้าขายดี
            </a>
          </li>
          <li>
            <a href='#faqs' className='hover:text-primary-600 mx-6'>
              คำถามที่พบบ่อย
            </a>
          </li>
          <li>
            <a href='#contact' className='hover:text-primary-600 mx-6'>
              ติดต่อเรา
            </a>
          </li>
        </ul>
        {/* Part - end */}
        <div className='flex items-center justify-end gap-4 text-lg md:text-xl'>
          <Link
            to='/Checkout'
            className='hover:text-primary-600 lg:text-primary-500 flex items-center justify-center rounded-full lg:h-[50px] lg:w-[50px] lg:bg-[#f5f1ee]'
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
          <div className='relative'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='hover:text-primary-600 flex items-center justify-center rounded-full lg:h-[50px] lg:w-[50px] lg:bg-[#eeeff8]'
            >
              <HiOutlineMenu />
            </button>
            {isMenuOpen && (
              <ul className='absolute right-0 z-50 mt-4 w-44 rounded-lg border bg-white shadow-md'>
                <li className='hover:text-primary-600 m-4 text-end text-lg'>
                  <Link to='/Dashboard'>ข้อมูลของฉัน</Link>
                </li>
                <li className='hover:text-primary-600 m-4 text-end text-lg'>
                  <Link to='/Dashboard'>คำสั่งซื้อ</Link>
                </li>
                <li className='hover:text-primary-600 m-4 text-end text-lg'>
                  <Link to='/Dashboard'>รายการยกเลิก</Link>
                </li>
                <li className='hover:text-primary-600 m-4 text-end text-lg'>
                  <Link to='/Dashboard'>รีวิวสินค้า</Link>
                </li>
                <li className='hover:text-primary-600 m-4 text-end text-lg'>
                  <Link to='/'>ออกจากระบบ</Link>
                </li>
              </ul>
            )}
          </div>
          <button className='hover:text-primary-600 hidden items-center justify-center rounded-full lg:h-[50px] lg:w-[50px] lg:bg-yellow-100'>
            <HiOutlineUserCircle />
          </button>
          <p className='hidden flex-col items-start justify-center text-lg lg:flex'>
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
