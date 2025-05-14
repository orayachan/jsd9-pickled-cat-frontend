import { MdLocalPhone } from 'react-icons/md';
import { RiMailOpenFill } from 'react-icons/ri';
import { TiLocation } from 'react-icons/ti';

export function AboutUs() {
  return (
    // <!-- Contact Us -->
    <section id='contact' className='max-w-screen-2xl mx-auto mb-16 bg-white'>
      <div className='relative mx-auto flex flex-col justify-center'>
        <div className='flex flex-col mx-4'>
          {/* <!-- Title --> */}
          <div className='m-6 flex flex-col items-start'>
            <h2 className='text-primary-700 text-4xl font-bold'>ติดต่อเรา</h2>
          </div>

          <div className='m-4 flex flex-col justify-between gap-8 lg:flex-row'>
            <div className='border-primary-500 max-w-220 min-w-70 flex-[1] rounded-3xl border-2'>
              <div className='m-8 flex flex-col justify-center gap-2'>
                <div className='flex flex-row gap-4'>
                  <TiLocation className='h-[40px] w-[40px]' />
                  <h2 className='text-primary-700 self-center text-2xl font-bold'>
                    สถานที่ตั้ง
                  </h2>
                </div>
                <h3 className='text-primary-800 text-pretty lg:text-xl p-4'>
                  110/1 อาคารเคเอ็กซ์ ถนนกรุงธนบุรี แขวงบางลำภูล่าง
                  เขตคลองสาน กรุงเทพมหานคร <br/>
                  10600
                </h3>
              </div>
            </div>

            <div className='border-primary-500 max-w-220 min-w-70 flex-[1] rounded-3xl border-2'>
              <div className='m-8 flex flex-col justify-center gap-2'>
                <div className='flex flex-row gap-4'>
                  <RiMailOpenFill className='h-[40px] w-[40px]' />
                  <h2 className='text-primary-700 self-center text-2xl font-bold'>
                    อีเมลล์
                  </h2>
                </div>
                <h3 className='text-primary-800 lg:text-xl p-4'>contact@pickledcat.com</h3>
              </div>
            </div>

            <div className='border-primary-500 max-w-220 min-w-70 flex-[1] rounded-3xl border-2'>
              <div className='m-8 flex flex-col justify-center gap-2'>
                <div className='flex flex-row gap-4'>
                  <MdLocalPhone className='h-[40px] w-[40px]' />
                  <h2 className='text-primary-700 self-center text-2xl font-bold'>
                    เบอร์โทรศัพท์
                  </h2>
                </div>
                <h3 className='text-primary-800 lg:text-xl p-4'>(+66) 99 999 9999</h3>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Map --> */}
        <div className='bg-secondary-50 mx-6 my-8 flex max-w-220 justify-center rounded-3xl p-4 lg:max-w-1280 lg:min-w-225'>
          <iframe
            title='map store'
            className='h-[450px] max-h-[1280px] w-full max-w-[1580px] border-0'
            loading='lazy'
            allowFullScreen
            referrerPolicy='no-referrer-when-downgrade'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5470967393924!2d100.52318681537399!3d13.73671709035106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ed5b4b0a6f1%3A0x49b6c87cf3734b5f!2z4LiL4Lit4Liy4LiE4Lij4LiZ4LiXIOC4geC4suC4h-C4nuC4seC4h-C4oiDguK3guJnguLLguIfguJ7guKPguLUg4LiB4Liy4LiH4Lij4Li44LiUIOaYjuiBlOWFqOiBnuGYn-W8gOW6lw!5e0!3m2!1sth!2sth!4v1648623661993!5m2!1sth!2sth'
          ></iframe>
        </div>
      </div>
    </section>
  );
}
