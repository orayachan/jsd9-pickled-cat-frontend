import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { createOrder } from '@/services/ordersService';
import { useMemo } from 'react';
import { useNavigate } from 'react-router';

export function OrderSummary({ selectedItems = [] }) {
  const navigate = useNavigate();

  const { totalBefore, discount, shipping, total } = useMemo(() => {
    const shipping = selectedItems.length > 0 ? 50 : 0;

    let totalBefore = 0;
    let discount = 0;

    selectedItems.forEach((item) => {
      const originalPrice = item.price / (1 - item.discount / 100);
      totalBefore += originalPrice * item.quantity;
      discount += originalPrice * item.quantity * (item.discount / 100);
    });

    const total = totalBefore - discount + shipping;

    return {
      totalBefore,
      discount,
      shipping,
      total,
    };
  }, [selectedItems]);

  const handlePayment = async () => {
    try {
      const orderData = {
        order_items: selectedItems.map((item) => ({
          product_id: item.id,
          product_name: item.name,
          quantity: item.quantity,
          price: item.price,
          product_option: item.selectedOptionIndex ?? 0,
          product_size: item.selectedSizeIndex ?? 0,
          discount: item.discount,
          image: item.image,
        })),
        total_price: total,
        status: 'Pending',
      };
      await createOrder(orderData);
      navigate('/payment');
    } catch (err) {
      alert('ไม่สามารถสร้างคำสั่งซื้อได้');
      console.error(err);
    }
  };

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
          <span>฿{totalBefore.toFixed(2)}</span>
        </CardDescription>
        <CardDescription className='mb-2 flex justify-between'>
          <span>ส่วนลด</span>
          <span>-฿{discount.toFixed(2)}</span>
        </CardDescription>
        <CardDescription className='mb-2 flex justify-between'>
          <span>ค่าบริการจัดส่ง</span>
          <span>฿{shipping.toFixed(2)}</span>
        </CardDescription>
        <CardDescription className='my-4 flex justify-between font-semibold'>
          <span>ชำระเงิน</span>
          <span>฿{total.toFixed(2)}</span>
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

        <Button
          className='w-full rounded-full'
          onClick={handlePayment}
          disabled={selectedItems.length === 0}
        >
          ชำระเงิน
        </Button>
      </CardFooter>
    </Card>
  );
}
