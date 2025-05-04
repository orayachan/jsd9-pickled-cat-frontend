import { Button } from '@/components/ui/button';

export const ProductCard = ({ product }) => {
  const { name, description, price, discount, stock, category, images } =
    product;

  return (
    <div className='flex w-full flex-col justify-between rounded-2xl bg-white p-4 shadow-md'>
      <img
        src={images[0]}
        alt={name}
        className='mx-auto mb-4 h-40 w-40 rounded-xl'
      />
      <h2 className='text-lg font-bold'>{name}</h2>
      <p className='text-sm text-gray-600'>{description}</p>
      <p className='mt-2 text-sm'>
        หมวดหมู่: <span className='font-medium text-gray-800'>{category}</span>
      </p>
      <p className='text-sm'>
        ราคา:{' '}
        <span className='font-semibold text-green-600'>
          {price - discount} บาท
        </span>
        {discount > 0 && (
          <span className='ml-2 text-xs text-red-500 line-through'>
            {price} บาท
          </span>
        )}
      </p>
      <p className='text-sm text-gray-600'>คงเหลือ: {stock} ชิ้น</p>
      <div className='flex flex-col pt-4 text-center'>
        <Button className='hover:bg-secondary border-2 border-black bg-white text-black hover:cursor-pointer'>
          แก้ไข ข้อมูล
        </Button>
      </div>
    </div>
  );
};
