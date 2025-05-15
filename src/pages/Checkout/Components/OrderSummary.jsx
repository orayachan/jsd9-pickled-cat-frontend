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

export function OrderSummary({ selectedItems = [] }) {
  const totalPrice = selectedItems.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  const discount = selectedItems.reduce((sum, item) => {
    const originalPrice = item.price / (1 - item.discount / 100);
    const discountAmount = (originalPrice - item.price) * item.quantity;
    return sum + discountAmount;
  }, 0);

  const shippingFee = selectedItems.length > 0 ? 50 : 0;
  const grandTotal = totalPrice + shippingFee;

  return (
    <Card className='w-full'>
      <CardHeader>
        <CardTitle className='text-primary-800 pt-2 lg:text-xl'>
          สรุปคำสั่งซื้อ
        </CardTitle>
      </CardHeader>
      <CardContent className='border-b-1 px-6'>
        <CardDescription className='mb-2 flex justify-between'>
          <span>ราคาทั้งหมด</span>
          <span>฿{totalPrice.toFixed(2)}</span>
        </CardDescription>
        <CardDescription className='mb-2 flex justify-between'>
          <span>ส่วนลด</span>
          <span>-฿{discount.toFixed(2)}</span>
        </CardDescription>
        <CardDescription className='mb-2 flex justify-between'>
          <span>ค่าบริการจัดส่ง</span>
          <span>฿{shippingFee.toFixed(2)}</span>
        </CardDescription>
        <CardDescription className='my-4 flex justify-between font-semibold'>
          <span>ชำระเงิน</span>
          <span>฿{grandTotal.toFixed(2)}</span>
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
