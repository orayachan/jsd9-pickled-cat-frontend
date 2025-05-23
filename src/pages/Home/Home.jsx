//import { data } from '@/lib/data';
import { getAllProduct } from '@/services/productsService.js';
import { useEffect, useState } from 'react';
import {
  AboutUs,
  FAQ,
  HeroBanner,
  ProductCard,
  ProductFilterBar,
  SearchProduct,
} from './components';

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortPrice, setSortPrice] = useState('');
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [error, setError] = useState('');

  const fetchProducts = async () => {
    try {
      const res = await getAllProduct();
      setProducts(res.products || []);
    } catch (err) {
      setError('Failed to load products.', err);
    } finally {
      setLoadingProducts(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  let filteredData = [...products];

  if (selectedCategory) {
    filteredData = filteredData.filter(
      (product) => product.category === selectedCategory,
    );
  }

  if (searchTerm) {
    filteredData = filteredData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }

  if (sortPrice === 'ราคาน้อยไปมาก') {
    filteredData.sort((a, b) => a.price - b.price);
  } else if (sortPrice === 'ราคามากไปน้อย') {
    filteredData.sort((a, b) => b.price - a.price);
  }
  return (
    <div className='mx-auto my-6 max-w-screen-2xl'>
      <HeroBanner />

      {/* menu bar */}
      <section id='products' className='p-8'>
        <h2 className='text-primary-700 mb-6 text-2xl font-bold lg:pl-4 lg:text-4xl'>
          สินค้าของเรา
        </h2>

        <div className='flex flex-col items-start justify-between text-sm md:flex-row'>
          {/* sort option */}
          <ProductFilterBar
            onCategoryChange={(category) => setSelectedCategory(category)}
            onPriceChange={(price) => setSortPrice(price)}
          />

          {/* search bar */}
          <SearchProduct
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </div>

        {/* error display */}
        {error && (
          <div className='text-center text-sm text-red-500'>{error}</div>
        )}

        {/* product list */}
        <div className='mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {loadingProducts ?
            <div className='col-span-full text-center text-gray-400'>
              กำลังโหลดสินค้า...
            </div>
          : filteredData
              .slice(0, 16)
              .map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
          }
        </div>
      </section>

      <FAQ />
      <AboutUs />
    </div>
  );
};
