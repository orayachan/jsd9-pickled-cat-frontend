import { data } from "@/lib/data";
import { useParams } from "react-router";
import { Error404 } from "@/components/layouts/Error404";
import { ProductImages } from "./Components";

export function ProductDetail() {
  const { id } = useParams();
  const product = data.find((item) => item.id === Number(id));

  if (!product) {
    return <Error404 />;

  }
  return (
    <section className='mx-auto max-w-7xl p-4'>
      {/* Breadcrumb */}
      <nav className='text-sm text-gray-500'>
        <a href='/'>Home</a> &gt;{' '}
        <span className='text-gray-700'>{product.name}</span>
      </nav>

      <div className='mt-4 flex flex-col lg:flex-row lg:gap-8'>
        {/* Product Images */}
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
            {/* สมมุติมี discount */}
            <span className='text-lg text-gray-400 line-through'>
              ฿{Math.round(product.price * 1.4)}
            </span>
            <span className='rounded-lg bg-red-100 px-2 py-1 text-xs text-red-500'>
              -40%
            </span>
          </div>

          {/* Description */}
          <p className='mt-3 leading-relaxed text-gray-600'>
            {product.description}
          </p>

          {/* Food Recipes */}
          <div className='mt-5'>
            <h2 className='font-semibold text-gray-700'>เลือกสูตรอาหาร</h2>
            <div className='mt-2 grid grid-cols-3 gap-2'>
              {product.option.map((opt) => (
                <button
                  key={opt}
                  className='rounded-lg border bg-gray-200 px-4 py-2 hover:bg-gray-300'
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Packaging Size */}
          <div className='mt-5'>
            <h2 className='font-semibold text-gray-700'>เลือกขนาดบรรจุ</h2>
            <div className='mt-2 flex space-x-3'>
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className='rounded-lg border px-5 py-3 text-gray-700 transition hover:bg-black hover:text-white'
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className='mt-6 flex items-center gap-4'>
            <div className='flex items-center rounded-full border bg-gray-300 px-5 py-3'>
              <button className='text-2xl'>-</button>
              <span className='mx-4 text-xl font-semibold'>1</span>
              <button className='text-2xl'>+</button>
            </div>
            <button className='w-full rounded-full bg-black px-6 py-4 text-lg font-semibold text-white transition hover:bg-gray-800'>
              Add to Cart
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
