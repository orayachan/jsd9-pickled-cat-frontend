/** @param {{variation: 'default', 'minimal'}} */
import { BsFacebook, BsInstagram, BsTwitterX, BsYoutube } from 'react-icons/bs';

export function Footer({ variation: variant = 'default' }) {
  return variant === 'default' ?
      <footer className='bg-secondary-100 content-center-safe p-4'>
        <div className='mx-auto lg:max-w-screen-2xl'>
          <h2 className='pt-8 text-2xl font-bold italic'>
            <a href='#' className='hover:text-primary-800'>
              PICKLED-CAT
            </a>
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
                <a
                  href='https://www.x.com'
                  target='_blank'
                  className='hover:text-primary-700 mt-4 mr-2'
                >
                  <BsTwitterX />
                </a>
                <a
                  href='https://www.instagram.com'
                  target='_blank'
                  className='hover:text-primary-700 mt-4 mr-2'
                >
                  <BsInstagram />
                </a>
                <a
                  href='https://www.facebook.com'
                  target='_blank'
                  className='hover:text-primary-700 mt-4 mr-2'
                >
                  <BsFacebook />
                </a>
                <a
                  href='https://www.youtube.com'
                  target='_blank'
                  className='hover:text-primary-700 mt-4 mr-2'
                >
                  <BsYoutube />
                </a>
              </p>
            </article>
            <article className='mb-4 flex flex-col'>
              <h3 className='my-2 font-semibold'>บริษัทของเรา</h3>
              <a href='#' className='hover:text-primary-700'>
                เกี่ยวกับเรา
              </a>
              <a href='#' className='hover:text-primary-700'>
                ติดต่อเรา
              </a>
              <a href='#' className='hover:text-primary-700'>
                ร่วมงานกับเรา
              </a>
              <a href='#' className='hover:text-primary-700'>
                คำถามที่พบบ่อย
              </a>
            </article>
            <article className='flex flex-col'>
              <h3 className='my-2 font-semibold'>บริการลูกค้า</h3>
              <a href='#' className='hover:text-primary-700'>
                ผลิตภัณฑ์ของเรา
              </a>
              <a href='#' className='hover:text-primary-700'>
                การจัดส่งสินค้า
              </a>
              <a href='#' className='hover:text-primary-700'>
                การชำระเงิน
              </a>
              <a href='#' className='hover:text-primary-700'>
                ข้อกำหนดและเงื่อนไข
              </a>
              <a href='#' className='hover:text-primary-700'>
                นโยบายความเป็นส่วนตัว
              </a>
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
