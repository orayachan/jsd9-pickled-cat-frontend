import { Link } from "react-router";

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
      </Link>

      {/* รายละเอียดสินค้า */}
      <div className='mt-2 flex-1'>
        <div className='flex justify-between'>
          <p>{product.name}</p>
          <p>{product.price.toFixed(2)}</p>
        </div>
        <p>{product.description}</p>
        <div className='mt-2 flex h-4 items-center gap-1'>
          <p className='text-yellow-400'>★★★★★</p>
          <p className='text-sm'>(121)</p>
        </div>
      </div>

      {/* ปุ่ม */}
      <div className='mt-4 flex flex-col gap-2'>
        <button className=''>รายละเอียด</button>
        <button className=''>ลงตระกร้า</button>
      </div>
    </div>
  );
};
