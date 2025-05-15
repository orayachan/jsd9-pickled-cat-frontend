import { useState } from 'react';
import { CancelSuccess } from './CancelOrder';

export function CancelOrder() {
  // Only one tab: 'success'
  return (
    <div>
      <h1 className='my-5 text-3xl font-bold'>คำสั่งซื้อล่าสุด</h1>
      <div className='mb-6 flex gap-2'>
        <button className='px-4 py-2 text-lg rounded-md bg-secondary'>ยกเลิกแล้ว</button>
      </div>
      <div className='rounded-xl bg-neutral-100 p-4'>
        <CancelSuccess />
      </div>
    </div>
  );
}
