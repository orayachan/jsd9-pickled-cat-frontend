import ProductCard from '@/components/ui/ProductCard';
import { data } from '@/lib/data';

export function AdminProductList() {
  return (
    <div>
      <h1 className='mt-5 text-3xl font-bold'>สินค้าทั้งหมด</h1>
      <div className='grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3'>
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
