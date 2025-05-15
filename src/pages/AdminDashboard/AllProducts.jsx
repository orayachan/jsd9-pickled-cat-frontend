import { ProductCard } from '@/components/customs';
import api from '@/services/api';
import { useEffect, useState } from 'react';

export function AdminProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/api/products');
        console.log('API Response:', response.data); // Debug log
        // Check if response.data.products exists, otherwise use response.data
        const productsData = response.data.products || response.data;
        if (!Array.isArray(productsData)) {
          throw new Error('Invalid data format received from API');
        }
        setProducts(productsData);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('ไม่สามารถโหลดข้อมูลสินค้าได้');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <div className='text-xl'>กำลังโหลด...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <div className='text-xl text-red-500'>{error}</div>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <div className='text-xl'>ไม่พบข้อมูลสินค้า</div>
      </div>
    );
  }

  return (
    <div>
      <h1 className='mt-5 text-3xl font-bold'>สินค้าทั้งหมด</h1>
      <div className='grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3'>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
