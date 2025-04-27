import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { ItemCard } from './ItemCard';

export function Cart() {
  return (
    <Card className='min-w-[350px] p-4 xl:min-w-[500px]'>
      <CardHeader>
        <CardTitle className='pt-2'>รายการคำสั่งซื้อ</CardTitle>
      </CardHeader>
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </Card>
  );
}
