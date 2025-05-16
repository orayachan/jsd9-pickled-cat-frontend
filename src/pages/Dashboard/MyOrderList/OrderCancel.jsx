import { Button } from '@/components/ui/button';

const STATUS_TH = {
  Pending: 'รอดำเนินการ',
  Shipped: 'กำลังจัดส่ง',
  Delivered: 'จัดส่งสำเร็จ',
  Cancelled: 'ยกเลิก',
};

export function OrderCancel({ orders = [] }) {
  if (!orders.length) {
    return <div className="text-center text-gray-400 py-8">ไม่พบรายการคำสั่งซื้อ</div>;
  }
  return (
    <section className='flex flex-col gap-4'>
      {orders.map((order) => (
        <div key={order._id} className='flex flex-col rounded-lg border bg-white p-4 shadow-sm'>
          <div className='mx-2 mb-2 flex flex-row justify-between'>
            <p className='text-lg'>{new Date(order.order_at || order.createdAt || order.created_at).toLocaleString('th-TH')}</p>
            <p className='text-lg font-bold text-red-500'>{STATUS_TH[order.status] || order.status}</p>
          </div>
          {(order.order_items || []).map((item, idx) => (
            <div key={idx} className='mb-4 flex flex-row rounded-lg border p-4 shadow-sm'>
              <img
                src={item.image || 'https://img2.pic.in.th/pic/Chicken.jpeg'}
                alt={item.product_name || item.name}
                className='mr-4 h-32 w-32 rounded-md object-cover'
              />
              <div className='flex w-135 flex-col justify-between'>
                <div>
                  <h3 className='text-xl font-semibold'>{item.product_name || item.name}</h3>
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
              <Button className='hover:bg-secondary-100 border bg-white p-4 text-lg text-black hover:cursor-pointer'>
                ซื้ออีกครั้ง
              </Button>
            </div>
            <p className='mt-auto text-lg'>
              รวมทั้งสิ้น ( {order.order_items?.reduce((sum, i) => sum + (i.quantity || 0), 0)} สินค้า ) : <strong>฿ {order.total_price?.toLocaleString?.() ?? '-'}</strong>
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
