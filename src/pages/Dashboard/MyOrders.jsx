import { useEffect, useState } from 'react';
import {
  OrderAll,
  OrderCancel,
  OrderOnRoute,
  OrderPending,
  OrderSuccess,
} from './MyOrderList';
import api from '@/services/api';

const STATUS_MAP = {
  pending: 'Pending',
  onroute: 'Shipped',
  success: 'Delivered',
  cancel: 'Cancelled',
};

export function MyOrders() {
  const [orderTab, setOrderTab] = useState('all');
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchOrders = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.get('api/orders/my');
      setOrders(res.data.orders || []);
    } catch (err) {
      setError('ไม่สามารถโหลดข้อมูลคำสั่งซื้อ');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const filterOrders = () => {
    if (orderTab === 'all') return orders;
    return orders.filter((order) => order.status === STATUS_MAP[orderTab]);
  };

  const renderOrderContent = () => {
    const filtered = filterOrders();
    switch (orderTab) {
      case 'pending':
        return <OrderPending orders={filtered} onOrderUpdate={fetchOrders} />;
      case 'onroute':
        return <OrderOnRoute orders={filtered} />;
      case 'success':
        return <OrderSuccess orders={filtered} />;
      case 'cancel':
        return <OrderCancel orders={filtered} />;
      case 'all':
      default:
        return <OrderAll orders={filtered} onOrderUpdate={fetchOrders} />;
    }
  };

  const tabClass = (tab) =>
    `px-4 py-2 text-lg rounded-md cursor-pointer ${
      orderTab === tab ? 'bg-secondary' : 'hover:bg-secondary-50'
    }`;

  return (
    <div>
      <h2 className='mt-6 mb-4 text-2xl font-bold'>รายการคำสั่งซื้อ</h2>

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
          onClick={() => setOrderTab('cancel')}
          className={tabClass('cancel')}
        >
          ยกเลิก
        </button>
      </div>

      <div className='rounded-xl bg-neutral-100 p-4'>
        {loading ? (
          <div className="text-center py-8">กำลังโหลด...</div>
        ) : error ? (
          <div className="text-center text-red-500 py-8">{error}</div>
        ) : (
          renderOrderContent()
        )}
      </div>
    </div>
  );
}
