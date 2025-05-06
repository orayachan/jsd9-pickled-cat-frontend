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
import { useNavigate } from 'react-router';

export function AdminSidebar({ activeTab, setActiveTab }) {
  const navigate = useNavigate();
  return (
    <nav className='border-secondary min-h-140 space-y-2 rounded-l-2xl border-r-3 bg-white pt-12'>
      <button
        onClick={() => setActiveTab('all')}
        className={`block w-full py-2 pr-20 pl-10 text-left text-2xl font-bold hover:cursor-pointer ${
          activeTab === 'all' ?
            'bg-secondary font-bold'
          : 'hover:bg-secondary-50'
        }`}
      >
        สินค้าทั้งหมด
      </button>

      <button
        onClick={() => setActiveTab('add')}
        className={`block w-full py-2 pr-20 pl-10 text-left text-2xl font-bold hover:cursor-pointer ${
          activeTab === 'add' ?
            'bg-secondary font-bold'
          : 'hover:bg-secondary-50'
        }`}
      >
        เพิ่มสินค้าคงคลัง
      </button>

      <button
        onClick={() => setActiveTab('latest')}
        className={`block w-full py-2 pr-20 pl-10 text-left text-2xl font-bold hover:cursor-pointer ${
          activeTab === 'latest' ?
            'bg-secondary font-bold'
          : 'hover:bg-secondary-50'
        }`}
      >
        คำสั่งซื้อล่าสุด
      </button>

      <button
        onClick={() => setActiveTab('cancel')}
        className={`block w-full py-2 pr-20 pl-10 text-left text-2xl font-bold hover:cursor-pointer ${
          activeTab === 'cancel' ?
            'bg-secondary font-bold'
          : 'hover:bg-secondary-50'
        }`}
      >
        คำขอยกเลิก
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
            <AlertDialogAction
              className='border bg-white text-black hover:cursor-pointer hover:bg-red-100'
              onClick={() => navigate('/login')}
            >
              ยืนยัน
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </nav>
  );
}
