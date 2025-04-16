import {
  HiOutlineMenu,
  HiOutlineShoppingCart,
  HiOutlineUserCircle,
} from 'react-icons/hi';
import { HiOutlineMegaphone } from 'react-icons/hi2';

export function Header() {
  return (
    <header className='bg-secondary-100 content-center-safe p-8 text-center'>
      <nav className='mx-auto grid items-center justify-between gap-4 lg:max-w-screen-2xl lg:grid-cols-3'>
        {/* Part - start */}
        <h1 className='flex items-start text-2xl font-bold italic'>
          <a href='#' className='hover:text-primary-800'>
            PICKLED-CAT
          </a>
        </h1>
        {/* Part - middle */}
        <ul classname='flex items-center justify-center gap-4'>
          <li className=''>
            <a href='#' className='hover:text-primary-600'>หน้าแรก</a>
          </li>
          <li>
            <a href='#products' className='hover:text-primary-600'>ผลิตภัณฑ์</a>
          </li>
          <li>
            <a href='#top' className='hover:text-primary-600'>สินค้าขายดี</a>
          </li>
          <li>
            <a href='#contact' className='hover:text-primary-600'>ติดต่อเรา</a>
          </li>
          <li>
            <a href='#faqs'  className='hover:text-primary-600'>คำถามที่พบบ่อย</a>
          </li>
        </ul>
        {/* Part - end */}
        <ul className='flex items-center justify-end gap-4'>
          <li className='flex h-[50px] w-[50px] items-center justify-center rounded-full bg-yellow-100'>
            <HiOutlineShoppingCart />
          </li>
          <li className='flex h-[50px] w-[50px] items-center justify-center rounded-full bg-yellow-100'>
            <HiOutlineMegaphone />
          </li>
          <li className='flex h-[50px] w-[50px] items-center justify-center rounded-full bg-yellow-100'>
            <HiOutlineMenu />
          </li>
          <li className='flex h-[50px] w-[50px] items-center justify-center rounded-full bg-yellow-100'>
            <HiOutlineUserCircle />
          </li>
          <li className='flex flex-col items-start justify-center'>
            <p className='font-semibold'>สวัสดี</p>
            <a href='#' className='hover:text-primary-600'>
              เข้าสู่ระบบ
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
