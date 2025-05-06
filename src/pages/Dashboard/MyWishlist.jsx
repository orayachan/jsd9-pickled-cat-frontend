import { Button } from '@/components/ui/button';

export function MyWishlist() {
  return (
    <section className='flex flex-col gap-4'>
      <h2 className='mt-6 text-2xl font-bold'>รายการสินค้าที่สนใจ</h2>
      <div className='flex flex-col rounded-lg bg-white'>
        <div className='mb-4 flex flex-row rounded-lg border p-4 shadow-sm'>
          <img
            src='https://img2.pic.in.th/pic/Chicken.jpeg'
            alt='Pickled Chicken Bites'
            className='mr-4 h-32 w-32 rounded-md object-cover'
          />
          <div className='flex w-145 flex-col gap-1'>
            <div className=''>
              <h3 className='text-xl font-semibold'>Pickled Chicken Bites</h3>
              <p className='text-lg text-gray-600'>
                ขนมขบเคี้ยวเนื้อไก่หมักสูตรพิเศษ อ่อนโยนต่อระบบย่อยของแมว
              </p>
            </div>
            <div className='flex flex-row justify-between'>
              <p className='font-bold text-purple-600'>฿ 250</p>
            </div>
            <div className='flex flex-row justify-between gap-2 pt-1'>
              <div className='flex flex-row gap-2'>
                <Button className='hover:bg-secondary-100 border bg-white p-4 text-lg text-black hover:cursor-pointer'>
                  ซื้อสินค้า
                </Button>
                <Button className='hover:bg-secondary-100 border bg-white p-4 text-lg text-black hover:cursor-pointer'>
                  ลงตะกร้า
                </Button>
              </div>
              <Button className='border border-red-500 bg-white p-4 text-lg text-black hover:cursor-pointer hover:bg-red-100'>
                นำออกจากรายการ
              </Button>
            </div>
          </div>
        </div>

        <div className='mb-4 flex flex-row rounded-lg border p-4 shadow-sm'>
          <img
            src='https://img2.pic.in.th/pic/Chicken.jpeg'
            alt='Pickled Chicken Bites'
            className='mr-4 h-32 w-32 rounded-md object-cover'
          />
          <div className='flex w-145 flex-col gap-1'>
            <div className=''>
              <h3 className='text-xl font-semibold'>Pickled Chicken Bites</h3>
              <p className='text-lg text-gray-600'>
                ขนมขบเคี้ยวเนื้อไก่หมักสูตรพิเศษ อ่อนโยนต่อระบบย่อยของแมว
              </p>
            </div>
            <div className='flex flex-row justify-between'>
              <p className='font-bold text-purple-600'>฿ 250</p>
            </div>
            <div className='flex flex-row justify-between gap-2 pt-1'>
              <div className='flex flex-row gap-2'>
                <Button className='hover:bg-secondary-100 border bg-white p-4 text-lg text-black hover:cursor-pointer'>
                  ซื้อสินค้า
                </Button>
                <Button className='hover:bg-secondary-100 border bg-white p-4 text-lg text-black hover:cursor-pointer'>
                  ลงตะกร้า
                </Button>
              </div>
              <Button className='border border-red-500 bg-white p-4 text-lg text-black hover:cursor-pointer hover:bg-red-100'>
                นำออกจากรายการ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
