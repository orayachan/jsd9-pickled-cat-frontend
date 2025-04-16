/** @param {{variation: 'default', 'minimal'}} */
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

export function Footer({ variation: variant = 'default' }) {
  return (variant === 'default' ?
      <footer className='bg-secondary-100 content-center-safe p-4'>
        <div className='lg:max-w-screen-2xl mx-auto'>
          <h2 className='text-2xl font-bold italic pt-8'><a href='#' className='hover:text-primary-800'>PICKLED-CAT</a></h2>
          <section className='grid lg:grid-cols-4 gap-4 py-4'>
            <article className='lg:col-span-2 mb-4'>
              <h3 className='font-semibold my-2'>เกี่ยวกับเรา</h3>
              <p className='text-pretty mr-8 lg:mr-32'>ร้านค้าออนไลน์ที่รวบรวมสินค้าสำหรับทาสแมวทุกคน เราคัดสรรเฉพาะอาหารและขนมแมวพรีเมียม ของเล่นสำหรับน้องแมวที่ช่วยเสริมพัฒนาการ คอนโดแมวที่ออกแบบมาเพื่อความสะดวกสบาย รวมไปถึงของใช้และของสะสมหายากสำหรับทาสแมวทั้งหลาย มาร่วมเป็นส่วนหนึ่งกับเราและทำให้ทุกวันของคุณและน้องแมวพิเศษยิ่งขึ้น!</p>
              <p className='flex'>
                <a href='https://www.x.com' target='_blank' className='mr-2 mt-4 hover:text-primary-700'>
                <BsTwitterX />
                </a>
                <a href='https://www.instagram.com' target='_blank' className='mr-2 mt-4 hover:text-primary-700'>
                <BsInstagram />
                </a>
                <a href='https://www.facebook.com' target='_blank' className='mr-2 mt-4 hover:text-primary-700'>
                <BsFacebook />
                </a>
                <a href='https://www.youtube.com' target='_blank' className='mr-2 mt-4 hover:text-primary-700'>
                <BsYoutube />
                </a>
              </p>
            </article>
            <article className='flex flex-col mb-4'>
              <h3 className='font-semibold my-2'>บริษัทของเรา</h3>
              <a href='#' className='hover:text-primary-700'>เกี่ยวกับเรา</a>
              <a href='#' className='hover:text-primary-700'>ติดต่อเรา</a>
              <a href='#' className='hover:text-primary-700'>ร่วมงานกับเรา</a>
              <a href='#' className='hover:text-primary-700'>คำถามที่พบบ่อย</a>
            </article>
            <article className='flex flex-col'>
              <h3 className='font-semibold my-2'>บริการลูกค้า</h3>
              <a href='#' className='hover:text-primary-700'>ผลิตภัณฑ์ของเรา</a>
              <a href='#' className='hover:text-primary-700'>การจัดส่งสินค้า</a>
              <a href='#' className='hover:text-primary-700'>การชำระเงิน</a>
              <a href='#' className='hover:text-primary-700'>ข้อกำหนดและเงื่อนไข</a>
              <a href='#' className='hover:text-primary-700'>นโยบายความเป็นส่วนตัว</a>
            </article>
          </section>
          <p className='text-xs md:text-sm my-8'>Copyright © 2025 PICKLED-CAT • All rights Reserved</p>
        </div>
      </footer>
    : <footer className='h-16 content-center-safe bg-white text-center'>
        Copyright © 2025 PICKLED-CAT • All rights Reserved
      </footer>
  );
}
