import { useState, useEffect } from 'react';
import api from '@/services/api';
import {
  PendingOrder,
  ShippingOrder,
  CompletedOrder,
  CancelledOrder,
} from './OrderComponents';

// Helper: Map backend order to frontend order props
function mapOrder(order) {
  return {
    id: order._id,
    userName: order.userName || 'Guest',
    userImage: order.userImage || '/Sample_User_Icon.png',
    orderDate: order.order_at
      ? new Date(order.order_at).toLocaleString('th-TH')
      : '',
    items: (order.order_items || []).map((item) => ({
      image: item.image || '/Sample_Product.png',
      name: item.name || '',
      price: item.price || 0,
      quantity: item.quantity || 0,
    })),
    totalItems: order.order_items ? order.order_items.reduce((sum, i) => sum + (i.quantity || 0), 0) : 0,
    totalAmount: order.total_price || 0,
    status: order.status,
    cancelReason: order.cancelReason || '',
    // Remove mock action handlers
  };
}

function renderOrderComponent(order, handlers = {}) {
  // Default no-op handlers for all actions
  const defaultHandlers = {
    onShip: () => {},
    onOutOfStock: () => {},
    onReturnDelivery: () => {},
    onDeliverySuccess: () => {},
  };
  switch (order.status) {
    case 'Pending':
      return <PendingOrder key={order.id} order={{ ...order, ...defaultHandlers, ...handlers }} />;
    case 'Shipped':
      return <ShippingOrder key={order.id} order={{ ...order, ...defaultHandlers, ...handlers }} />;
    case 'Delivered':
      return <CompletedOrder key={order.id} order={order} />;
    case 'Cancelled':
      return <CancelledOrder key={order.id} order={order} />;
    default:
      return null;
  }
}

export function OrderAll() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function updateOrderStatus(id, status) {
    try {
      await api.patch(`/api/orders/${id}/status`, { status });
      fetchOrders();
    } catch {
      alert('เกิดข้อผิดพลาดในการอัปเดตสถานะ');
    }
  }

  async function fetchOrders() {
    try {
      setLoading(true);
      const response = await api.get('/api/orders');
      setOrders(response.data.orders.map(mapOrder));
      setLoading(false);
    } catch {
      console.error('Error fetching orders:');
      setError('ไม่สามารถโหลดข้อมูลได้');
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) return <div className="p-4 text-center">กำลังโหลด...</div>;
  if (error) return <div className="p-4 text-center text-red-500">{error}</div>;
  if (orders.length === 0) return <div className="p-4 text-center">ไม่พบรายการออเดอร์</div>;

  return (
    <div className="space-y-4">
      {orders.map((order) =>
        renderOrderComponent(order, {
          onShip: (id) => updateOrderStatus(id, 'Shipped'),
          onOutOfStock: (id) => updateOrderStatus(id, 'Cancelled'),
          onReturnDelivery: (id) => updateOrderStatus(id, 'Cancelled'),
          onDeliverySuccess: (id) => updateOrderStatus(id, 'Delivered'),
        })
      )}
    </div>
  );
}

export function OrderPending() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function updateOrderStatus(id, status) {
    try {
      await api.patch(`/api/orders/${id}/status`, { status });
      // Refresh list after update
      fetchOrders();
    } catch {
      alert('เกิดข้อผิดพลาดในการอัปเดตสถานะ');
    }
  }

  async function fetchOrders() {
    try {
      setLoading(true);
      const response = await api.get('/api/orders/status/Pending');
      setOrders(response.data.orders.map(mapOrder));
      setLoading(false);
    } catch {
      console.error('Error fetching pending orders:');
      setError('ไม่สามารถโหลดข้อมูลได้');
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) return <div className="p-4 text-center">กำลังโหลด...</div>;
  if (error) return <div className="p-4 text-center text-red-500">{error}</div>;
  if (orders.length === 0) return <div className="p-4 text-center">ไม่พบรายการที่รอดำเนินการ</div>;

  return (
    <div className="space-y-4">
      {orders.map((order) =>
        renderOrderComponent(order, {
          onShip: (id) => updateOrderStatus(id, 'Shipped'),
          onOutOfStock: (id) => updateOrderStatus(id, 'Cancelled'),
        })
      )}
    </div>
  );
}

export function OrderOnRoute() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function updateOrderStatus(id, status) {
    try {
      await api.patch(`/api/orders/${id}/status`, { status });
      fetchOrders();
    } catch {
      alert('เกิดข้อผิดพลาดในการอัปเดตสถานะ');
    }
  }

  async function fetchOrders() {
    try {
      setLoading(true);
      const response = await api.get('/api/orders/status/Shipped');
      setOrders(response.data.orders.map(mapOrder));
      setLoading(false);
    } catch {
      console.error('Error fetching shipped orders:');
      setError('ไม่สามารถโหลดข้อมูลได้');
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) return <div className="p-4 text-center">กำลังโหลด...</div>;
  if (error) return <div className="p-4 text-center text-red-500">{error}</div>;
  if (orders.length === 0) return <div className="p-4 text-center">ไม่พบรายการที่กำลังจัดส่ง</div>;

  return (
    <div className="space-y-4">
      {orders.map((order) =>
        renderOrderComponent(order, {
          onReturnDelivery: (id) => updateOrderStatus(id, 'Cancelled'),
          onDeliverySuccess: (id) => updateOrderStatus(id, 'Delivered'),
        })
      )}
    </div>
  );
}

export function OrderSuccess() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchOrders() {
      try {
        setLoading(true);
        const response = await api.get('/api/orders/status/Delivered');
        setOrders(response.data.orders.map(mapOrder));
        setLoading(false);
      } catch {
        console.error('Error fetching delivered orders:');
        setError('ไม่สามารถโหลดข้อมูลได้');
        setLoading(false);
      }
    }
    fetchOrders();
  }, []);

  if (loading) return <div className="p-4 text-center">กำลังโหลด...</div>;
  if (error) return <div className="p-4 text-center text-red-500">{error}</div>;
  if (orders.length === 0) return <div className="p-4 text-center">ไม่พบรายการที่จัดส่งสำเร็จ</div>;

  return <div className="space-y-4">{orders.map(renderOrderComponent)}</div>;
}

export function OrderCancelled() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchOrders() {
      try {
        setLoading(true);
        const response = await api.get('/api/orders/status/Cancelled');
        setOrders(response.data.orders.map(mapOrder));
        setLoading(false);
      } catch {
        console.error('Error fetching cancelled orders:');
        setError('ไม่สามารถโหลดข้อมูลได้');
        setLoading(false);
      }
    }
    fetchOrders();
  }, []);

  if (loading) return <div className="p-4 text-center">กำลังโหลด...</div>;
  if (error) return <div className="p-4 text-center text-red-500">{error}</div>;
  if (orders.length === 0) return <div className="p-4 text-center">ไม่พบรายการที่ถูกยกเลิก</div>;

  return <div className="space-y-4">{orders.map(renderOrderComponent)}</div>;
} 