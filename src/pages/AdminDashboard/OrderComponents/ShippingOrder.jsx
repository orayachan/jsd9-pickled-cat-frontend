import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function ShippingOrder({ order }) {
  const [loading, setLoading] = useState(false);

  const handleReturnDelivery = async () => {
    if (typeof order.onReturnDelivery === 'function') {
      setLoading(true);
      await order.onReturnDelivery(order.id);
      setLoading(false);
    }
  };
  const handleDeliverySuccess = async () => {
    if (typeof order.onDeliverySuccess === 'function') {
      setLoading(true);
      await order.onDeliverySuccess(order.id);
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col rounded-lg border bg-white p-4 shadow-sm'>
      <div className='mx-2 my-2 flex flex-row gap-4 border-b pb-4'>
        <img
          src={order.userImage || '/Sample_User_Icon.png'}
          alt='user profile'
          className='max-h-12 max-w-12 rounded-4xl border'
        />
        <p className='text-primary my-auto text-xl font-bold'>{order.userName}</p>
      </div>

      <div className='mx-2 mb-2 flex flex-row justify-between'>
        <p className='text-lg'>{order.orderDate}</p>
        <p className='text-lg font-bold text-yellow-500'>อยู่ระหว่างการขนส่ง</p>
      </div>

      {order.items.map((item, index) => (
        <div key={index} className='mb-4 flex flex-row rounded-lg border p-4 shadow-sm'>
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

      <div className='mx-2 mb-2 flex flex-row justify-between'>
        <div className='flex flex-row gap-4'>
          <Button
            onClick={handleReturnDelivery}
            disabled={loading}
            className='hover:bg-secondary-100 border bg-white p-4 text-lg text-black hover:cursor-pointer'
          >
            {loading ? 'กำลังอัปเดต...' : 'ขนส่งตีกลับ'}
          </Button>
          <Button
            onClick={handleDeliverySuccess}
            disabled={loading}
            className='hover:bg-secondary-100 border bg-white p-4 text-lg text-black hover:cursor-pointer'
          >
            {loading ? 'กำลังอัปเดต...' : 'จัดส่งสำเร็จ'}
          </Button>
        </div>
        <p className='mt-auto text-lg'>
          รวมทั้งสิ้น ( {order.totalItems} สินค้า ) : <strong>฿ {order.totalAmount}</strong>
        </p>
      </div>
    </div>
  );
} 