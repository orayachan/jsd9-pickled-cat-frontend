/** @param {{variation: 'default', 'minimal'}} */
import { Link2 } from 'lucide-react';
import { Link } from 'react-router';
import { BsFacebook, BsInstagram, BsTwitterX, BsYoutube } from 'react-icons/bs';

export function Footer({ variation: variant = 'default' }) {
  return variant === 'default' ?
      <footer className='bg-secondary-100 content-center-safe p-4'>
        <div className='mx-auto lg:max-w-screen-2xl'>
          <h2 className='pt-8 text-2xl font-bold italic'>
            <Link to='/' className='hover:text-primary-800'>
              PICKLED-CAT
            </Link>
          </h2>
          <section className='grid gap-4 py-4 lg:grid-cols-4'>
            <article className='mb-4 lg:col-span-2'>
              <h3 className='my-2 font-semibold'>เกี่ยวกับเรา</h3>
              <p className='mr-8 text-pretty lg:mr-32'>
                ร้านค้าออนไลน์ที่รวบรวมสินค้าสำหรับทาสแมวทุกคน
                เราคัดสรรเฉพาะอาหารและขนมแมวพรีเมียม
                ของเล่นสำหรับน้องแมวที่ช่วยเสริมพัฒนาการ
                คอนโดแมวที่ออกแบบมาเพื่อความสะดวกสบาย
                รวมไปถึงของใช้และของสะสมหายากสำหรับทาสแมวทั้งหลาย
                มาร่วมเป็นส่วนหนึ่งกับเราและทำให้ทุกวันของคุณและน้องแมวพิเศษยิ่งขึ้น!
              </p>
              <p className='flex'>
                <Link
                  to='https://www.x.com'
                  target='_blank'
                  className='hover:text-primary-700 mt-4 mr-2'
                >
                  <BsTwitterX />
                </Link>
                <Link
                  to='https://www.instagram.com'
                  target='_blank'
                  className='hover:text-primary-700 mt-4 mr-2'
                >
                  <BsInstagram />
                </Link>
                <Link
                  to='https://www.facebook.com'
                  target='_blank'
                  className='hover:text-primary-700 mt-4 mr-2'
                >
                  <BsFacebook />
                </Link>
                <Link
                  to='https://www.youtube.com'
                  target='_blank'
                  className='hover:text-primary-700 mt-4 mr-2'
                >
                  <BsYoutube />
                </Link>
              </p>
            </article>
            <article className='mb-4 flex flex-col'>
              <h3 className='my-2 font-semibold'>บริษัทของเรา</h3>
              <Link to='/' className='hover:text-primary-700'>
                เกี่ยวกับเรา
              </Link>
              <Link to={{hash: '#contact'}} className='hover:text-primary-700'>
                ติดต่อเรา
              </Link>
              <Link to='/Join-us' className='hover:text-primary-700'>
                ร่วมงานกับเรา
              </Link>
              <Link to={{hash: '#faqs'}} className='hover:text-primary-700'>
                คำถามที่พบบ่อย
              </Link>
            </article>
            <article className='flex flex-col'>
              <h3 className='my-2 font-semibold'>บริการลูกค้า</h3>
              <Link to={{hash: '#products'}} className='hover:text-primary-700'>
                สินค้าของเรา
              </Link>
              <Link to='/Checkout' className='hover:text-primary-700'>
                ตะกร้าสินค้า
              </Link>
              <Link to='/Payment' className='hover:text-primary-700'>
                การชำระเงิน
              </Link>
              <Link to='/' className='hover:text-primary-700'>
                ข้อกำหนดและเงื่อนไข
              </Link>
              <Link to='/' className='hover:text-primary-700'>
                นโยบายความเป็นส่วนตัว
              </Link>
            </article>
          </section>
          <p className='my-8 text-xs md:text-sm'>
            Copyright © 2025 PICKLED-CAT • All rights Reserved
          </p>
        </div>
      </footer>
    : <footer className='h-16 content-center-safe bg-white text-center'>
        Copyright © 2025 PICKLED-CAT • All rights Reserved
      </footer>;
}
