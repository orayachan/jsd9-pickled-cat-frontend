import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Link } from 'react-router';

export function OrderSummary() {
  return (
    <Card className='max-w-[350px]'>
      <CardHeader>
        <CardTitle className='pt-2'>สรุปคำสั่งซื้อ</CardTitle>
      </CardHeader>
      <CardContent className='border-b-1 px-6'>
        <CardDescription className='mb-2 flex items-start justify-between gap-4'>
          <span>ราคาทั้งหมด</span>
          <span>xxx.xx ฿</span>
        </CardDescription>
        <CardDescription className='mb-2 flex items-start justify-between gap-4'>
          <span>ส่วนลด</span>
          <span>xxx.xx ฿</span>
        </CardDescription>
        <CardDescription className='mb-2 flex items-start justify-between gap-4'>
          <span>ค่าบริการจัดส่ง</span>
          <span>xxx.xx ฿</span>
        </CardDescription>
        <CardDescription className='my-4 flex items-start justify-between gap-4 font-semibold'>
          <span>ชำระเงิน</span>
          <span>xxx.xx ฿</span>
        </CardDescription>
      </CardContent>
      <CardFooter className='flex flex-col'>
        <div className='mb-4 flex w-full justify-between gap-4'>
          <input
            type='text'
            placeholder='กรอกรหัสส่วนลด'
            className='bg-primary-50 text-primary-800 w-3/4 rounded-full pl-4 text-sm font-normal'
          />
          <Button className='bg-secondary-50 hover:bg-secondary-100 text-primary-800 rounded-full font-medium'>
            รับส่วนลด
          </Button>
        </div>
        <Link to='/payment' className='w-full'>
          <Button className='w-full rounded-full'>ชำระเงิน</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
