import { useState } from "react";
import { HiOutlineMenu, HiOutlineShoppingCart, HiOutlineUserCircle,} from 'react-icons/hi';
import { HiOutlineMegaphone } from 'react-icons/hi2';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className='bg-white text-center content-center-safe px-8 py-4 border-b'>
      <nav className='mx-auto flex items-center justify-between gap-4 lg:max-w-screen-2xl'>
        {/* Part - start */}
        <h1 className='flex items-start text-xl lg:text-2xl font-bold italic'>
          <a href='#' className='hover:text-primary-700'>
            PICKLED-CAT
          </a>
        </h1>
        {/* Part - middle */}
        <ul className='hidden font-medium lg:flex items-center justify-center gap-4'>
          <li>
            <a href='#' className='hover:text-primary-600'>หน้าแรก</a>
          </li>
          <li>
            <a href='#products' className='hover:text-primary-600'>ผลิตภัณฑ์</a>
          </li>
          <li>
            <a href='#highlight' className='hover:text-primary-600'>สินค้าขายดี</a>
          </li>
          <li>
            <a href='#contact' className='hover:text-primary-600'>ติดต่อเรา</a>
          </li>
          <li>
            <a href='#faqs'  className='hover:text-primary-600'>คำถามที่พบบ่อย</a>
          </li>
        </ul>
        {/* Part - end */}
        <div className='flex items-center justify-end gap-4'>
          <button className='flex lg:h-[50px] lg:w-[50px] items-center justify-center rounded-full hover:text-primary-600 lg:text-[#875541] lg:bg-[#f5f1ee]'>
            <HiOutlineShoppingCart />
          </button>
          <button className='flex lg:h-[50px] lg:w-[50px] items-center justify-center rounded-full hover:text-primary-600 lg:bg-[#eeeff8]'>
            <HiOutlineMegaphone />
          </button>
          {/* Menu */}
          <div className='relative'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='flex lg:h-[50px] lg:w-[50px] items-center justify-center rounded-full hover:text-primary-600 lg:bg-[#eeeff8]'>
              <HiOutlineMenu />
            </button>
            {isMenuOpen && (
              <ul className='absolute right-0 mt-4 w-36 rounded-lg border bg-white shadow-md z-50'>
                <li className='text-end hover:text-primary-600 mr-4'><a href='#'>ข้อมูลของฉัน</a></li>
                <li className='text-end hover:text-primary-600 mr-4'><a href='#'>คำสั่งซื้อ</a></li>
                <li className='text-end hover:text-primary-600 mr-4'><a href='#'>รายการยกเลิก</a></li>
                <li className='text-end hover:text-primary-600 mr-4'><a href='#'>รีวิวสินค้า</a></li>
                <li className='text-end hover:text-primary-600 mr-4'><a href='#'>ออกจากระบบ</a></li>
              </ul>
            )}
          </div>
          <button className='hidden flex lg:h-[50px] lg:w-[50px] items-center justify-center rounded-full hover:text-primary-600 lg:bg-yellow-100'>
            <HiOutlineUserCircle />
          </button>
          <p className='hidden lg:flex flex-col items-start justify-center'>
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
