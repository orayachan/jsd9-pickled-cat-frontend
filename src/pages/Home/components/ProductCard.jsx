import { Link } from 'react-router';

export const ProductCard = ({ product }) => {
  return (
    <div className='flex h-full w-full flex-col justify-between rounded-2xl border p-4 shadow-md'>
      {/* รูปภาพ */}
      <Link target='_blank' to={`/product/${product._id}`} rel='noreferrer'>
        <div className='hover: flex justify-center'>
          <img
            src={product.images[0]}
            alt={product.name}
            className='h-[244.63px] w-[231.8px] rounded-md object-cover transition-transform duration-300 hover:scale-110'
          />
        </div>
        {/* รายละเอียดสินค้า */}
        <div className='mx-4 mt-2 flex-1'>
          <div className='flex justify-between'>
            <p className='text-primary-800 pt-4 pb-2 text-lg font-semibold'>
              {product.name}
            </p>
            <p className='flex min-w-[80px] justify-end pt-4 font-semibold'>
              ฿ {product.price.toFixed(2)}
            </p>
          </div>
          <p className='text-pretty'>{product.description}</p>
          <div className='my-2 flex h-4 items-center gap-1'>
            <p className='text-yellow-400'>★★★★★</p>
            <p className='text-sm'>(121)</p>
          </div>
        </div>
      </Link>

      {/* ปุ่ม */}
      <div className='mt-4 flex flex-col gap-2'>
        <Link
          to={`/product/${product._id}`}
          className='bg-primary-100 hover:bg-primary-50 rounded-full py-2 text-center font-medium hover:shadow-sm'
        >
          กดสั่งซื้อสินค้าที่นี่
        </Link>
        <button className='hidden'>ลงตระกร้า</button>
      </div>
    </div>
  );
};
