import { Sidebar } from '../customs';
import { useState } from 'react';
import { MyAccount , MyOrders, MyWishlist , MyReviews } from '@/pages';

export function Dashboard() {
  const [activeTab, setActiveTab] = useState("account");

  const renderContent = () => {
    switch (activeTab) {
      case "account":
        return <MyAccount/>;
      case "orders":
        return <MyOrders/>;
      case "wishlist":
        return <MyWishlist/>;
      case "reviews":
        return <MyReviews/>;
      default:
        return <p>ไม่พบเนื้อหา</p>;
    }
  };

  return (

    <main className="flex flex-col items-center min-h-screen bg-purple-50 py-10">
      <section className="w-full max-w-6xl">

        <nav className="text-sm text-gray-500 mb-4">
          <span className="hover:underline cursor-pointer">หน้าแรก</span> -&gt;
          <span className="mx-1">บัญชีของฉัน</span>
        </nav>

        <div className="flex bg-white rounded-2xl border-5 border-secondary-100">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="flex-1 p-8">
            {/* <Outlet /> */}
            {renderContent()}
          </div>
        </div>

      </section>
    </main>
  );
}
