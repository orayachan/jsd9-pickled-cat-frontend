export function PaymentSummary() {
  // mock data -- to be update later
  const items = [
    { name: 'ปลอกคอแมว Premium', price: 250 },
    { name: 'อาหารแมวเกรดพรีเมียม 1kg', price: 480 },
  ];

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className='bg-white rounded-lg border p-4 shadow-sm xl:shadow-md'>
      <h2 className='mb-4 text-xl font-semibold'>สรุปรายการสั่งซื้อ</h2>
      <ul className='space-y-2'>
        {items.map((item, index) => (
          <li key={index} className='flex justify-between'>
            <span>{item.name}</span>
            <span>{item.price.toLocaleString()} ฿</span>
          </li>
        ))}
      </ul>
      <div className='mt-4 flex justify-between border-t pt-4 text-md font-semibold'>
        <span>รวมทั้งหมด</span>
        <span>{total.toLocaleString()} ฿</span>
      </div>
    </div>
  );
}
