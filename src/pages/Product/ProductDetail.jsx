import { Error404 } from '@/components/layouts/Error404';
import { data } from '@/lib/data';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { ProductImages } from './Components';

export const ProductDetail = () => {
  const { id } = useParams();
  const product = data.find((item) => item.id === Number(id));
  const navigate = useNavigate();
  
  const [selectedOption, setSelectedOption] = useState(product.option[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <Error404 />;
  }

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      image: product.images[0],
      price: product.price,
      discount: product.discount,
      selectedOption,
      selectedSize,
      quantity,
    };

    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    currentCart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(currentCart));

    navigate('/Checkout');
  };

  return (
    <section className='mx-auto max-w-7xl p-4'>
      {/* Breadcrumb */}
      <nav className='text-sm text-gray-500'>
        <Link to='/'>Home</Link> &gt;{' '}
        <span className='text-gray-700'>{product.name}</span>
      </nav>

      <div className='mt-4 flex flex-col lg:flex-row lg:gap-8'>
        {/* dproductData Images */}
        <ProductImages images={product.images} />

        {/* Product Details */}
        <article className='mt-6 lg:mt-0 lg:w-1/2'>
          <h1 className='text-2xl font-semibold'>{product.name}</h1>

          <div className='flex items-center space-x-2 text-lg text-yellow-400'>
            <p>★★★★★</p>
            <span className='text-sm text-gray-600'>4.5/5</span>
          </div>

          {/* Price */}
          <div className='mt-3 flex items-center space-x-3'>
            <span className='text-3xl font-bold text-gray-900'>
              ฿{product.price}
            </span>

            {/* เช็กว่ามีส่วนลดหรือไม่ */}
            {product.discount > 0 && (
              <>
                {/* คำนวณราคาเดิม */}
                <span className='text-lg text-gray-400 line-through'>
                  ฿{Math.round(product.price / (1 - product.discount / 100))}
                </span>

                {/* แสดงเปอร์เซ็นต์ลด */}
                <span className='rounded-lg bg-red-100 px-2 py-1 text-xs text-red-500'>
                  -{Math.round(product.discount)}%
                </span>
              </>
            )}
          </div>

          {/* Description */}
          <p className='mt-3 leading-relaxed text-gray-600'>
            {product.description}
          </p>

          {/* Food Recipes */}
          <div className='mt-5'>
            <h2 className='font-semibold text-gray-700'>เลือกที่ลูกชอบ</h2>
            <div className='mt-2 grid grid-cols-3 gap-2'>
              {product.option.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setSelectedOption(opt)}
                  className={`rounded-lg border bg-gray-200 px-4 py-2 ${
                    selectedOption === opt ?
                      'bg-black text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Packaging Size */}
          <div className='mt-5'>
            <h2 className='font-semibold text-gray-700'>เลือกขนาดที่ต้องการ</h2>
            <div className='mt-2 flex space-x-3'>
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`rounded-lg border px-5 py-3 text-gray-700 transition ${
                    selectedSize === size ?
                      'bg-black text-white'
                    : 'text-gray-700 hover:bg-black hover:text-white'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className='mt-6 flex items-center gap-4'>
            <div className='flex items-center rounded-full border bg-gray-300 px-5 py-3'>
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className='text-2xl'
              >
                -
              </button>
              <span className='mx-4 text-xl font-semibold'>{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className='text-2xl'
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className='w-full rounded-full bg-black px-6 py-4 text-lg font-semibold text-white transition hover:bg-gray-800'
            >
              Add to Cart
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};
