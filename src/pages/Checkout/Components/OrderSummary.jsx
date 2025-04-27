import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function OrderSummary() {
  return (
    <Card className='min-w-[350px] p-4'>
      <CardHeader>
        <CardTitle>สรุปคำสั่งซื้อ</CardTitle>
      </CardHeader>
      <CardContent className='border-b-1 px-6'>
        <CardDescription className='mb-2 flex items-start justify-between gap-4'>
          <span>ราคาทั้งหมด</span>
          <span>฿ xxx.xx</span>
        </CardDescription>
        <CardDescription className='mb-2 flex items-start justify-between gap-4'>
          <span>ส่วนลด</span>
          <span>฿ xxx.xx</span>
        </CardDescription>
        <CardDescription className='mb-2 flex items-start justify-between gap-4'>
          <span>ค่าบริการจัดส่ง</span>
          <span>฿ xxx.xx</span>
        </CardDescription>
        <CardDescription className='my-4 flex items-start justify-between gap-4 font-semibold'>
          <span>ชำระเงิน</span>
          <span>฿ xxx.xx</span>
        </CardDescription>
      </CardContent>
      <CardFooter className='flex flex-col'>
        <div className='mb-4 flex w-full justify-between gap-4'>
          <Button className='bg-primary-50 hover:bg-primary-50 text-primary-800 max-w-[200px] rounded-full font-normal'>
            กรอกรหัสส่วนลด
          </Button>
          <Button className='bg-secondary-50 hover:bg-secondary-100 text-primary-800 rounded-full font-medium'>
            รับส่วนลด
          </Button>
        </div>
        <Button className='w-full rounded-full'>ชำระเงิน</Button>
      </CardFooter>
    </Card>
  );
}
