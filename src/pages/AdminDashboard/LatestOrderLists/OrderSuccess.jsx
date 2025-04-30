export function OrderSuccess() {
  return (
    <section className='flex flex-col gap-4'>
      <div className='flex flex-col rounded-lg border bg-white p-4 shadow-sm'>
        <div className='mx-2 my-2 flex flex-row gap-4 border-b pb-4'>
          <img
            src='/Sample_User_Icon.png'
            alt='user profile'
            className='max-h-12 max-w-12 rounded-4xl border'
          />
          <p className='text-primary my-auto text-xl font-bold'>USER 456</p>
        </div>

        <div className='mx-2 mb-2 flex flex-row justify-between'>
          <p className='text-lg'>15 เมษายน 2568 21:23</p>
          <p className='text-lg font-bold text-green-500'>สำเร็จ</p>
        </div>

        <div className='mb-4 flex flex-row rounded-lg border p-4 shadow-sm'>
          <img
            src='https://img2.pic.in.th/pic/Chicken.jpeg'
            alt='Pickled Chicken Bites'
            className='mr-4 h-32 w-32 rounded-md object-cover'
          />
          <div className='flex w-135 flex-col justify-between'>
            <div>
              <h3 className='text-xl font-semibold'>Pickled Chicken Bites</h3>
            </div>
            <div className='flex flex-row justify-between'>
              <p className='font-bold text-purple-600'>฿ 250</p>
              <p className=''>
                จำนวน <strong>3</strong> ชิ้น
              </p>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className='mb-4 flex flex-row rounded-lg border p-4 shadow-sm'>
          <img
            src='https://img5.pic.in.th/file/secure-sv1/Chicken2.jpeg'
            alt='Pickled Chicken Bites'
            className='mr-4 h-32 w-32 rounded-md object-cover'
          />
          <div className='flex w-135 flex-col justify-between'>
            <div>
              <h3 className='text-xl font-semibold'>Pickled Chicken Bites 2</h3>
            </div>
            <div className='flex flex-row justify-between'>
              <p className='font-bold text-purple-600'>฿ 250</p>
              <p className=''>
                จำนวน <strong>3</strong> ชิ้น
              </p>
            </div>
          </div>
        </div>

        <div className='mx-2 mb-2 flex flex-row justify-between'>
          <div className='flex flex-row gap-4'></div>
          <p className='mt-auto text-lg'>
            รวมทั้งสิ้น ( 6 สินค้า ) : <strong>฿ 1,500</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
