import { data } from '@/lib/data';
import { useState } from 'react';
import { ProductCard, ProductFilterBar, SearchProduct , FAQ } from './components';

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortPrice, setSortPrice] = useState('');

  let filteredData = [...data];

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
    <section className='mx-4 my-6 flex justify-center sm:mx-8 md:mx-16 lg:mx-20'>
      <section className='w-full max-w-screen-2xl'>
        <h2 className='text-[28px] font-bold text-[#3A4980] sm:text-[32px]'>
          สินค้าของเรา
        </h2>

        {/* menu-bar */}
        <div className='my-8 hidden items-center justify-between text-sm md:flex'>
          {/* sort-option */}
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

        {/* product list */}
        <div className='mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {filteredData.slice(0, 16).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <FAQ></FAQ>
      </section>
    </section>
  );
};
