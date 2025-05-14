export function FAQ() {
  return (
    <section id='faqs' className='max-w-screen-2xl mx-auto pt-16'>
      <div className='relative mx-4 justify-center'>
        {/* <!-- Title --> */}
        <div className=''>
          <h2 className='text-primary-700 m-6 text-left text-2xl lg:text-4xl font-bold'>
            คำถามที่พบบ่อย (FAQs)
          </h2>
        </div>

        {/* <!-- List --> */}
        <div className='mr-4 mb-16 ml-4 flex flex-col gap-2'>
          <div className='bg-secondary-50 rounded-xl lg:p-2'>
            <input className='peer hidden' id='faq1' type='checkbox' />
            <label
              className='flex cursor-pointer items-center justify-between py-3 text-lg font-medium text-gray-700 peer-checked:[&>svg]:rotate-180'
              htmlFor='faq1'
            >
              <span className='text-primary-800 ml-4 lg:text-xl'>
                มีบริการจัดส่งทั่วประเทศหรือไม่?
              </span>

              <svg
                className='mr-4 h-5 w-5 text-black transition-transform duration-300 ease-in-out'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </label>

            <div className='m-2 hidden rounded-xl bg-white p-4 text-gray-600 peer-checked:block'>
              เรามีบริการจัดส่งทั่วประเทศไทย โดยใช้ขนส่งที่เชื่อถือได้
              ระยะเวลาจัดส่งขึ้นอยู่กับพื้นที่ โดยปกติจะใช้ เวลา 2-5 วันทำการ
            </div>
          </div>

          <div className='bg-secondary-50 rounded-xl lg:p-2'>
            <input className='peer hidden' id='faq2' type='checkbox' />
            <label
              className='flex cursor-pointer items-center justify-between py-3 text-lg font-medium text-gray-700 peer-checked:[&>svg]:rotate-180'
              htmlFor='faq2'
            >
              <span className='text-primary-800 ml-4 lg:text-xl'>
                สามารถเปลี่ยนหรือคืนสินค้าได้หรือไม่?
              </span>
              <svg
                className='mr-4 h-5 w-5 text-black transition-transform duration-300 ease-in-out'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </label>

            <div className='m-2 hidden rounded-xl bg-white p-4 text-gray-600 peer-checked:block'>
              หากสินค้าเกิดความเสียหายจากการขนส่ง หรือได้รับสินค้าผิดรุ่น
              สามารถติดต่อเรา ภายใน 7 วัน หลังจาก ได้รับสินค้า
              เราจะดำเนินการเปลี่ยนหรือคืนเงินให้
            </div>
          </div>

          <div className='bg-secondary-50 rounded-xl lg:p-2'>
            <input className='peer hidden' id='faq3' type='checkbox' />
            <label
              className='flex cursor-pointer items-center justify-between py-3 text-lg font-medium text-gray-700 peer-checked:[&>svg]:rotate-180'
              htmlFor='faq3'
            >
              <span className='text-primary-800 ml-4 lg:text-xl'>
                สามารถชำระเงินด้วยวิธีใดได้บ้าง?
              </span>
              <svg
                className='mr-4 h-5 w-5 text-black transition-transform duration-300 ease-in-out'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </label>

            <div className='m-2 hidden rounded-xl bg-white p-4 text-gray-600 peer-checked:block'>
              เรารับชำระเงินผ่านบัตรเครดิต/เดบิต โอนเงินผ่านธนาคาร และบริการ
              e-wallet เช่น TrueMoney Wallet
            </div>
          </div>

          <div className='bg-secondary-50 rounded-xl lg:p-2'>
            <input className='peer hidden' id='faq4' type='checkbox' />
            <label
              className='flex cursor-pointer items-center justify-between py-3 text-lg font-medium text-gray-700 peer-checked:[&>svg]:rotate-180'
              htmlFor='faq4'
            >
              <span className='text-primary-800 ml-4 lg:text-xl'>
                จะรู้ได้อย่างไรว่ามีสินค้าใหม่เข้ามา?
              </span>
              <svg
                className='mr-4 h-5 w-5 text-black transition-transform duration-300 ease-in-out'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </label>

            <div className='m-2 hidden rounded-xl bg-white p-4 text-gray-600 peer-checked:block'>
              คุณสามารถติดตามข่าวสารสินค้าใหม่ โปรโมชั่น
              และข้อเสนอพิเศษได้ทางเว็บไซต์ของเรา หรือสมัครรับ
              ข่าวสารผ่านอีเมลเพื่อไม่พลาดข้อมูลสำคัญ
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
