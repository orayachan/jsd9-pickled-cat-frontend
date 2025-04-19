import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog"

export function Sidebar({ activeTab, setActiveTab }) {
  return (
    <nav className="bg-white rounded-l-2xl min-h-140 pt-12 space-y-2 border-r-3 border-secondary">
      <button onClick={() => setActiveTab("account")}
        className={`block w-full text-left pr-20 pl-10 py-2 text-2xl font-bold ${
          activeTab === "account" ? "bg-secondary font-bold" : "hover:bg-secondary-50"
        }`}>บัญชีของฉัน</button>

      <button onClick={() => setActiveTab("orders")}
        className={`block w-full text-left pr-20 pl-10 py-2 text-2xl font-bold ${
          activeTab === "orders" ? "bg-secondary font-bold" : "hover:bg-secondary-50"
        }`}>รายการคำสั่งซื้อ</button>

      <button onClick={() => setActiveTab("wishlist")}
        className={`block w-full text-left pr-20 pl-10 py-2 text-2xl font-bold ${
          activeTab === "wishlist" ? "bg-secondary font-bold" : "hover:bg-secondary-50"
        }`}>รายการสินค้าที่สนใจ</button>

      <button onClick={() => setActiveTab("reviews")}
        className={`block w-full text-left pr-20 pl-10 py-2 text-2xl font-bold ${
          activeTab === "reviews" ? "bg-secondary font-bold" : "hover:bg-secondary-50"
        }`}>รีวิวของฉัน</button>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button variant="destructive" className="block w-full text-left text-red-500 pr-20 pl-10 py-2 text-2xl font-bold hover:underline hover:bg-red-100">ออกจากระบบ</button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>ต้องการ ออกจากระบบ ?</AlertDialogTitle>
            <AlertDialogDescription>
              กด ยืนยัน หากต้องการที่จะออกจากระบบ
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>ยกเลิก</AlertDialogCancel>
            <AlertDialogAction className="bg-white text-black border hover:bg-red-100">ยืนยัน</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </nav>
  );
}
