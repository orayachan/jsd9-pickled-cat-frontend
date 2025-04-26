import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

export function MyAccount() {
  return (
    <div className='pt-6'>
      {/* head */}
      <div className='mb-4 flex items-center justify-between'>
        <h2 className='text-2xl font-bold'>ข้อมูลส่วนตัว</h2>
        <a href='#' className='text-xl font-bold hover:underline'>
          แก้ไขข้อมูล
        </a>
      </div>

      <div className='flex flex-row gap-24'>
        {/* placeholder */}
        <div className='mt-2 flex flex-col gap-4 text-xl'>
          <p className='text-primary font-bold'>ชื่อ-นามสกุล</p>
          <p className='text-primary font-bold'>อีเมล</p>
          <p className='text-primary font-bold'>รหัสผ่าน</p>
          <p className='text-primary font-bold'>เบอร์โทรศัพท์</p>
        </div>

        {/* user info */}
        <div className='mt-2 flex flex-col gap-4 text-xl'>
          <p>Scarlet Johanson</p>
          <p>scarlet@gmail.com</p>
          <p>••••••••</p>
          <p>066-6666666</p>
        </div>
      </div>

      <div className='mt-6 flex flex-col gap-8 text-xl'>
        <div className='flex flex-row gap-19.5'>
          <div>
            <p className='text-primary font-bold'>ที่อยู่จัดส่งสินค้า</p>
          </div>

          <div className='flex flex-col gap-2'>
            <p className=''>ที่อยู่จัดส่งสินค้า 1</p>
            <p className=''>ที่อยู่จัดส่งสินค้า 2</p>
          </div>
        </div>

        <div className='flex flex-row gap-25'>
          <div>
            <p className='text-primary font-bold'>เชื่อมต่อบัญชี</p>
          </div>

          <div className='flex flex-col gap-2'>
            <div className='flex flex-row gap-4'>
              <FcGoogle className='my-auto' />
              <p>Google</p>
            </div>

            <div className='flex flex-row gap-4'>
              <FaFacebook className='my-auto text-blue-500' />
              <p>Facebook</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
