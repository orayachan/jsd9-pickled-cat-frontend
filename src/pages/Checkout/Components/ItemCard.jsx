import { Checkbox } from '@/components/ui/checkbox';
import { HiOutlineTrash } from 'react-icons/hi';

export function ItemCard({ item, onQuantityChange, onRemove, isChecked, onSelect }) {
  return (
    <section className='flex items-start justify-start gap-4 px-4 pb-4'>
      <div className='mt-2'>
        <Checkbox
        checked={isChecked}
        onCheckedChange={(checked) => onSelect(item, checked)}
        />
      </div>
      <figure className='h-[100px] w-[100px] shrink-0 overflow-hidden rounded-md border bg-white'>
        <img
          src={item.image}
          alt={item.name}
          className='h-full w-full object-cover'
        />
      </figure>
      <div className='flex w-full flex-col justify-between'>
        <div>
          <p className='text-primary-700 font-semibold'>{item.name}</p>
          <p className='text-sm text-gray-600'>
            {item.selectedOption}, {item.selectedSize}
          </p>
          <p className='text-primary-700 mt-1 font-bold'>
            ฿{(item.price * item.quantity).toFixed(2)}
          </p>
        </div>
        <div className='mt-2 flex items-center justify-between'>
          <div className='flex w-24 items-center justify-around rounded-full bg-gray-200 px-3 py-1'>
            <button
              onClick={() =>
                onQuantityChange(
                  item.id,
                  item.selectedOption,
                  item.selectedSize,
                  Math.max(1, item.quantity - 1),
                )
              }
              className='hover:text-primary-600 font-bold'
            >
              -
            </button>
            <span className='font-bold'>{item.quantity}</span>
            <button
              onClick={() =>
                onQuantityChange(
                  item.id,
                  item.selectedOption,
                  item.selectedSize,
                  item.quantity + 1,
                )
              }
              className='hover:text-primary-600 font-bold'
            >
              +
            </button>
          </div>
          <HiOutlineTrash
            onClick={() =>
              onRemove(item.id, item.selectedOption, item.selectedSize)
            }
            className='text-primary-500 cursor-pointer hover:text-red-600'
          />
        </div>
      </div>
    </section>
  );
}
