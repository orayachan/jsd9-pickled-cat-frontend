import { useState } from 'react';
import { OrderAll, OrderPending, OrderOnRoute, OrderSuccess, OrderCancel } from './MyOrderList';

export function MyOrders() {
  const [orderTab, setOrderTab] = useState("all");

  const renderOrderContent = () => {
    switch (orderTab) {
      case "pending": return <OrderPending />;
      case "onroute": return <OrderOnRoute />;
      case "success": return <OrderSuccess />;
      case "cancel": return <OrderCancel />;
      case "all":
      default:
        return <OrderAll />;
    }
  };

  const tabClass = (tab) =>
    `px-4 py-2 text-lg rounded-md cursor-pointer ${
      orderTab === tab ? "bg-secondary" : "hover:bg-secondary-50"
    }`;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 mt-6 ">รายการคำสั่งซื้อ</h2>

      <div className="flex gap-2 mb-6">
        <button onClick={() => setOrderTab("all")} className={tabClass("all")}>ทั้งหมด</button>
        <button onClick={() => setOrderTab("pending")} className={tabClass("pending")}>รอดำเนินการ</button>
        <button onClick={() => setOrderTab("onroute")} className={tabClass("onroute")}>กำลังจัดส่ง</button>
        <button onClick={() => setOrderTab("success")} className={tabClass("success")}>จัดส่งสำเร็จ</button>
        <button onClick={() => setOrderTab("cancel")} className={tabClass("cancel")}>ยกเลิก</button>
      </div>

      <div className="bg-neutral-100 rounded-xl p-4">
        {renderOrderContent()}
      </div>
    </div>
  );
}
