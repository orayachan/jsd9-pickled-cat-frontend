export function CancelledOrder({ order }) {
  return (
    <div className='flex flex-col rounded-lg border bg-white p-4 shadow-sm'>
      <div className='mx-2 my-2 flex flex-row gap-4 border-b pb-4'>
        <img
          src={order.userImage || '/Sample_User_Icon.png'}
          alt='user profile'
          className='max-h-12 max-w-12 rounded-4xl border'
        />
        <p className='text-primary my-auto text-xl font-bold'>
          {order.userName}
        </p>
      </div>

      <div className='mx-2 mb-2 flex flex-row justify-between'>
        <p className='text-lg'>{order.orderDate}</p>
        <p className='text-lg font-bold text-red-500'>ยกเลิกแล้ว</p>
      </div>

      {order.items.map((item, index) => (
        <div
          key={index}
          className='mb-4 flex flex-row rounded-lg border p-4 shadow-sm'
        >
          <img
            src={item.image}
            alt={item.name}
            className='mr-4 h-32 w-32 rounded-md object-cover'
          />
          <div className='flex w-135 flex-col justify-between'>
            <div>
              <h3 className='text-xl font-semibold'>{item.name}</h3>
            </div>
            <div className='flex flex-row justify-between'>
              <p className='font-bold text-purple-600'>฿ {item.price}</p>
              <p className=''>
                จำนวน <strong>{item.quantity}</strong> ชิ้น
              </p>
            </div>
          </div>
        </div>
      ))}

      <div className='mx-2 mb-2'>
        <p className='text-lg font-semibold'>เหตุผลการยกเลิก:</p>
        <p className='mt-2 text-gray-700'>{order.cancelReason}</p>
      </div>

      <div className='mx-2 mb-2 flex flex-row justify-between'>
        <div className='flex flex-row gap-4'>
          {/* ไม่มีปุ่มกดเพิ่มเติมสำหรับออเดอร์ที่ยกเลิกแล้ว */}
        </div>
        <p className='mt-auto text-lg'>
          รวมทั้งสิ้น ( {order.totalItems} สินค้า ) :{' '}
          <strong>฿ {order.totalAmount}</strong>
        </p>
      </div>
    </div>
  );
}
