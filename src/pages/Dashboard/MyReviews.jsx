import { Button } from '@/components/ui/button';
import StarRatings from 'react-star-ratings';
export function MyReviews() {
  return (
    <section className='flex flex-col gap-4'>
      <h2 className='mt-6 text-2xl font-bold'>รีวิวของฉัน</h2>

      <div className='flex flex-col gap-4 rounded-lg bg-neutral-50 p-2 shadow-sm'>
        <div className='flex flex-col rounded-lg bg-neutral-100'>
          <div className='flex flex-row rounded-lg border bg-white p-4 shadow-sm'>
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
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-2 px-4'>
          <div className='flex flex-row gap-4'>
            <StarRatings
              rating={5}
              starRatedColor='#facc15'
              starEmptyColor='#e5e7eb'
              numberOfStars={5}
              starDimension='24px'
              starSpacing='3px'
              name='rating'
            />
            <p className='my-auto'>พึงพอใจ</p>
          </div>

          <p>อร่อยมากครับ เผลอแย่งแมวกินจนหมด ต้องสั่งเพิ่มแล้ว อิอิ</p>

          <div className='flex flex-row justify-between pt-4'>
            <p className='my-auto text-sm'>15 เมษายน 2568 21:23</p>
            <Button className='hover:bg-secondary-100 border bg-white px-8 text-black hover:cursor-pointer'>
              แก้ไขรีวิว
            </Button>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-4 rounded-lg bg-neutral-50 p-2 shadow-sm'>
        <div className='flex flex-col rounded-lg bg-neutral-100'>
          <div className='flex flex-row rounded-lg border bg-white p-4 shadow-sm'>
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
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-2 px-4'>
          <div className='flex flex-row gap-4'>
            <StarRatings
              rating={3.5}
              starRatedColor='#facc15'
              starEmptyColor='#e5e7eb'
              numberOfStars={5}
              starDimension='24px'
              starSpacing='3px'
              name='rating'
            />
            <p className='my-auto'>พึงพอใจ</p>
          </div>

          <p>อร่อยมากครับ เผลอแย่งแมวกินจนหมด ต้องสั่งเพิ่มแล้ว อิอิ</p>

          <div className='flex flex-row justify-between pt-4'>
            <p className='my-auto text-sm'>15 เมษายน 2568 21:23</p>
            <Button className='hover:bg-secondary-100 border bg-white px-8 text-black hover:cursor-pointer'>
              แก้ไขรีวิว
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
