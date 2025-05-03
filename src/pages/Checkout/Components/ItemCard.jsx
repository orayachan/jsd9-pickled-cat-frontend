import { Checkbox } from '@/components/ui/checkbox';
import { HiOutlineTrash } from 'react-icons/hi';
import MockPhoto from '/public/error/mini-graycat.png';

export function ItemCard() {
  return (
    <section className='flex w-full items-center-safe justify-start px-8 pb-4'>
      <Checkbox />
      <figure className='border-secondary-50 max-h-auto mx-2 max-w-[120px] rounded-md border-1 xl:mx-auto'>
        <img src={MockPhoto} alt='product image' className='fill' />
      </figure>
      <div className='ml-2 w-3/4'>
        <p className='text-primary-700 font-semibold'>ชื่อสินค้า</p>
        <p className='text-primary-700 text-sm'>ตัวเลือก, ขนาด</p>
        <p className='text-primary-700 font-semibold'>฿ xxx.xx</p>
        <div className='mt-2 flex items-center justify-between gap-2'>
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
