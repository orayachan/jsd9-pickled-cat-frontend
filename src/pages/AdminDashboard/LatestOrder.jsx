import { useState } from 'react';
import {
  OrderAll,
  OrderCancelled,
  OrderOnRoute,
  OrderPending,
  OrderSuccess,
} from './LatestOrderLists';

export function LatestOrder() {
  const [orderTab, setOrderTab] = useState('all');

  const renderOrderContent = () => {
    switch (orderTab) {
      case 'pending':
        return <OrderPending />;
      case 'onroute':
        return <OrderOnRoute />;
      case 'success':
        return <OrderSuccess />;
      case 'cancelled':
        return <OrderCancelled />;
      case 'all':
      default:
        return <OrderAll />;
    }
  };

  const tabClass = (tab) =>
    `px-4 py-2 text-lg rounded-md cursor-pointer ${
      orderTab === tab ? 'bg-secondary' : 'hover:bg-secondary-50'
    }`;

  return (
    <div>
      <h1 className='my-5 text-3xl font-bold'>คำสั่งซื้อล่าสุด</h1>

      <div className='mb-6 flex gap-2'>
        <button onClick={() => setOrderTab('all')} className={tabClass('all')}>
          ทั้งหมด
        </button>
        <button
          onClick={() => setOrderTab('pending')}
          className={tabClass('pending')}
        >
          รอดำเนินการ
        </button>
        <button
          onClick={() => setOrderTab('onroute')}
          className={tabClass('onroute')}
        >
          กำลังจัดส่ง
        </button>
        <button
          onClick={() => setOrderTab('success')}
          className={tabClass('success')}
        >
          จัดส่งสำเร็จ
        </button>
        <button
          onClick={() => setOrderTab('cancelled')}
          className={tabClass('cancelled')}
        >
          ยกเลิกแล้ว
        </button>
      </div>

      <div className='rounded-xl bg-neutral-100 p-4'>
        {renderOrderContent()}
      </div>
    </div>
  );
}
