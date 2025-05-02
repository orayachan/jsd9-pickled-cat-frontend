import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function ShippingPrice() {
  return (
    <Card className='min-w-[350px] px-4'>
      <CardHeader>
        <CardTitle>ค่าบริการจัดส่ง</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className='mb-2 flex items-start justify-between gap-4'>
          <span>ระยะทางไม่เกิน 5 กิโลเมตร</span>
          <span>จัดส่งฟรี</span>
        </CardDescription>
        <CardDescription className='mb-2 flex items-start justify-between gap-4'>
          <span>ระยะทางไม่เกิน 10 กิโลเมตร</span>
          <span>50.00 ฿</span>
        </CardDescription>
        <CardDescription className='mb-2 flex items-start justify-between gap-4'>
          <span>ระยะทางไม่เกิน 20 กิโลเมตร</span>
          <span>100.00 ฿</span>
        </CardDescription>
        <CardDescription className='mb-2 flex items-start justify-between gap-4'>
          <span>ระยะทางมากกว่า 20 กิโลเมตรขึ้นไป</span>
          <span>150.00 ฿</span>
        </CardDescription>
      </CardContent>
    </Card>
  );
}
