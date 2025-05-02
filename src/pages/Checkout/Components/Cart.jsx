import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { ItemCard } from './ItemCard';

export function Cart() {
  return (
    <Card className='max-w-full'>
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
