import { useState } from 'react';
import { CancelReq, CancelSuccess } from './CancelOrder';

export function CancelOrder() {
  const [orderTab, setOrderTab] = useState('req');

  const renderOrderContent = () => {
    switch (orderTab) {
      case 'req':
        return <CancelReq />;
      case 'success':
        return <CancelSuccess />;
      default:
        return <CancelReq />;
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
        <button onClick={() => setOrderTab('req')} className={tabClass('all')}>
          คำขอยกเลิก
        </button>
        <button
          onClick={() => setOrderTab('success')}
          className={tabClass('pending')}
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
