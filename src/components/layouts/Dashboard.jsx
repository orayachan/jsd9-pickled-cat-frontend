import { MyAccount, MyOrders, MyReviews, MyWishlist } from '@/pages';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Sidebar } from '../customs';

export function Dashboard() {
  const [activeTab, setActiveTab] = useState('account');
  const navigate = useNavigate();

  useEffect(() => {
    if (!window.sessionStorage.getItem('dashboard_refreshed')) {
      window.sessionStorage.setItem('dashboard_refreshed', '1');
      window.location.reload();
    }
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'account':
        return <MyAccount />;
      case 'orders':
        return <MyOrders />;
      case 'wishlist':
        return <MyWishlist />;
      case 'reviews':
        return <MyReviews />;
      default:
        return <p>ไม่พบเนื้อหา</p>;
    }
  };

  return (
    <main className='flex min-h-screen flex-col items-center bg-purple-50 py-10'>
      <section className='w-full max-w-6xl'>
        <nav className='mb-4 text-sm text-gray-500 flex justify-between items-center'>
          <div>
            <span
              className='cursor-pointer hover:underline'
              onClick={() => navigate('/')}
            >
              หน้าแรก
            </span>{' '}
            -&gt;
            <span className='mx-1'>บัญชีของฉัน</span>
          </div>
        </nav>

        <div className='border-secondary-100 flex rounded-2xl border-5 bg-white'>
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className='flex-1 p-8'>
            {/* <Outlet /> */}
            {renderContent()}
          </div>
        </div>
      </section>
    </main>
  );
}
