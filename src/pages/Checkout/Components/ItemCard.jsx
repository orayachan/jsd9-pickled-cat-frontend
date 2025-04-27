import { Checkbox } from '@/components/ui/checkbox';
import { HiOutlineTrash } from 'react-icons/hi';
import MockPhoto from '/public/error/mini-graycat.png';

export function ItemCard() {
  return (
    <section className='flex items-center-safe justify-start pb-4'>
      <Checkbox className='mx-2' />
      <figure className='border-secondary-50 mx-2 h-[120px] w-[120px] rounded-md border-1'>
        <img src={MockPhoto} alt='product image' className='fill' />
      </figure>
      <div>
        <p className='text-primary-700 font-semibold'>ชื่อสินค้า</p>
        <p className='text-primary-700 text-sm'>ตัวเลือก, ขนาด</p>
        <p className='text-primary-700 font-semibold'>฿ xxx.xx</p>
        <div className='mt-2 flex items-center justify-center gap-2'>
          <div className='bg-primary-50 flex w-24 items-center justify-around rounded-full py-1'>
            <button className='hover:text-primary-500 font-bold'>-</button>
            <span className='text-primary-700 font-bold'>1</span>
            <button className='hover:text-primary-500 font-bold'>+</button>
          </div>
          <HiOutlineTrash className='text-primary-500 hover:text-primary-800' />
        </div>
      </div>
    </section>
  );
}
