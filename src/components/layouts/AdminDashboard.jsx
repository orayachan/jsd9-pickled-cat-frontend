import {
  AddProduct,
  AdminProductList,
  CancelOrder,
  LatestOrder,
} from '@/pages/AdminDashboard';
import { useState } from 'react';
import { useNavigate } from "react-router";
import { AdminSidebar } from '../customs';

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('add');
  const navigate = useNavigate();
  const renderContent = () => {
    switch (activeTab) {
      case 'all':
        return <AdminProductList />;
      case 'add':
        return <AddProduct />;
      case 'latest':
        return <LatestOrder />;
      case 'cancel':
        return <CancelOrder />;
      default:
        return <p>ไม่พบเนื้อหา</p>;
    }
  };

  return (
    <main className='flex min-h-screen flex-col items-center bg-purple-50 py-10'>
      <section className='w-full max-w-6xl'>
        <nav className='mb-4 text-sm text-gray-500'>
          <span className='cursor-pointer hover:underline' onClick={() => navigate("/")}>หน้าแรก</span> -&gt;
          <span className='mx-1'>จัดการระบบ</span>
        </nav>

        <div className='border-secondary-100 flex rounded-2xl border-5 bg-white'>
          <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className='flex-1 p-8'>{renderContent()}</div>
        </div>
      </section>
    </main>
  );
}
