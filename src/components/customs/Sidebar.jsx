import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

export function Sidebar({ activeTab, setActiveTab }) {
  return (
    <nav className='border-secondary min-h-140 space-y-2 rounded-l-2xl border-r-3 bg-white pt-12'>
      <button
        onClick={() => setActiveTab('account')}
        className={`block w-full py-2 pr-20 pl-10 text-left text-2xl font-bold hover:cursor-pointer ${
          activeTab === 'account' ?
            'bg-secondary font-bold'
          : 'hover:bg-secondary-50'
        }`}
      >
        บัญชีของฉัน
      </button>

      <button
        onClick={() => setActiveTab('orders')}
        className={`block w-full py-2 pr-20 pl-10 text-left text-2xl font-bold hover:cursor-pointer ${
          activeTab === 'orders' ?
            'bg-secondary font-bold'
          : 'hover:bg-secondary-50'
        }`}
      >
        รายการคำสั่งซื้อ
      </button>

      <button
        onClick={() => setActiveTab('wishlist')}
        className={`block w-full py-2 pr-20 pl-10 text-left text-2xl font-bold hover:cursor-pointer ${
          activeTab === 'wishlist' ?
            'bg-secondary font-bold'
          : 'hover:bg-secondary-50'
        }`}
      >
        รายการสินค้าที่สนใจ
      </button>

      <button
        onClick={() => setActiveTab('reviews')}
        className={`block w-full py-2 pr-20 pl-10 text-left text-2xl font-bold hover:cursor-pointer ${
          activeTab === 'reviews' ?
            'bg-secondary font-bold'
          : 'hover:bg-secondary-50'
        }`}
      >
        รีวิวของฉัน
      </button>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button
            variant='destructive'
            className='block w-full py-2 pr-20 pl-10 text-left text-2xl font-bold text-red-500 hover:cursor-pointer hover:bg-red-100 hover:underline'
          >
            ออกจากระบบ
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>ต้องการ ออกจากระบบ ?</AlertDialogTitle>
            <AlertDialogDescription>
              กด ยืนยัน หากต้องการที่จะออกจากระบบ
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className='hover:cursor-pointer'>
              ยกเลิก
            </AlertDialogCancel>
            <AlertDialogAction className='border bg-white text-black hover:cursor-pointer hover:bg-red-100'>
              ยืนยัน
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </nav>
  );
}
